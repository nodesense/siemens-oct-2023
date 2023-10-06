import React, {useReducer, memo, useCallback} from 'react';
import CartSummary from '../components/CartSummary';
import CartList from '../components/CartList';

// CartSummaryMemo is a wrapper component, that conditionally render component
// only if changes in props
const CartSummaryMemo = memo(CartSummary)

interface Item {
    id: number;
    name: string;
    price: number;
    qty: number;
}

interface CartState {
    items: Item[];
    amount: number;
    totalItems: number;
}

const INITIAL_STATE : CartState = {
    items: [],
    amount: 0,
    totalItems: 0
}

interface Action {
    type: string;
    payload?: any;
}

const calculateTotalAmount = (items: Item[]) => {
    let amount = 0, totalItems = 0;
            
    for (let item of items) {
        amount += item.price * item.qty;
        totalItems += item.qty;
    }

    return {amount, totalItems}
}

// write business use case, calculation etc
// reducer always returns state, which will be used by component
// reducer is called with dispatch
function cartReducer(state: CartState, action: Action) :CartState {
    console.log('cartReducer ', state, action)

    switch(action.type) {
        case 'addItem': {
            const items = [...state.items, action.payload.item]
            
            // returns object with amount, totalItems attributes, destructruing them
            const result =   calculateTotalAmount(items)
            // return new state 
            return {
                items,
                ...result
               
               // amount,
               // totalItems
            }
        }
        case 'deleteItem': {
            const items = state.items.filter (item => item.id != action.payload.id)
            return {
                items, 
                ...calculateTotalAmount(items)
            }
        }

        case 'updateItem': {
            const items = state.items.map (item => item.id === action.payload.id? 
                                                    {...item, qty: action.payload.qty}
                                                    :item)

            return {
                items: state.items, 
                ...calculateTotalAmount(state.items)
            }
        }
        case 'emptyCart':  return {items: [], amount: 0, totalItems: 0}

        // todo: updateItem
        // todo: deleteItem

        default: 
                return state;
    }
}

// item {id:1, name: 'produt 1', price: 100, qty: 2}
// items [  item1, item2]
// amount = sum of all item price * qty
// totalItems = sum of all qty
function Cart() {
    console.log('Cart Render')

    const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE)
    console.log("STATE ", state)
    const {amount, totalItems, items} = state;

    function addItem () {
        const id = Math.ceil(Math.random() * 10000000);
        const item : Item = {
            id, 
            name: `Product ${id}`, // `backquote/backtick used as template string 
            price: Math.ceil(Math.random () * 100),
            qty: Math.ceil(Math.random() * 10)
        }

        // {item}, this means {item: item}
        const action : Action = {type: 'addItem', payload: {item}}
        console.log("DISPATCHING ACTION ", action)
        dispatch(action)
    }

    function emptyCart() {
        const action: Action = {type: 'emptyCart'}
        console.log("DISTPATCH ACTION", action)
        // dispatch calls the reducer
        // after the dispatch call, component shall re-render
        dispatch(action)
    }

    const  updateItem = useCallback( (id: number, qty: number) => {
        console.log("updateItem called", id, qty)
        const action: Action = {
            type: 'updateItem',
            payload: {id, qty}
        }
        console.log("DISTPATCH ACTION", action)
        dispatch(action)
    } , [])

    const deleteItem = useCallback(  (id: number) => {
        console.log("deleteItem called ", id)
        const action: Action = {
            type: 'deleteItem',
            payload: {id}
        }
        console.log("DISTPATCH ACTION", action)
        dispatch(action)
    }, [])

    return (
        <div>
            <h2>Cart</h2>

            <button onClick={addItem}>Add Item</button>
            <button onClick={emptyCart}>Empty Cart</button>

            <CartList items={items} updateItem={updateItem} deleteItem={deleteItem} />

            {/*CartSummary amount totalItems */}
            <CartSummaryMemo amount={amount} totalItems={totalItems} />
        </div>
    )
}

export default Cart;