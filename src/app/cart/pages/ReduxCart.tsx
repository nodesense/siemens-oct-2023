import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { addItem, emptyCart } from '../state/reducers/cartReducer';


/*
    TODO

    add ReduxCartList.tsx in cart/components/ReduxCartList.tsx
        useSelector to get items from cart state, write  a table 
         and render ReduxCartItem, pass item as props
    add ReduxCartItem.tsx in cart/components/ReduxCartItem.tsx

        receive item from REduxCartList as prop
        useDispatch, to updateQty +1 or -1, implement action "updateItem" in cartReducer
        useDispatch, to remoteItem from cart, implement action "removeItem" in cartReducer
        
    add ReduxCartSummary.tsx in cart/components/ReduxCartSummary.tsx
        useSelector to get amount, totalItems and render them.. already done in ReduxCart
    

*/


const ReduxCart = ( () => {
    console.log ("REduxCArt render ")

    const totalItems = useSelector ( (state:any) => state.cart.totalItems)
    const amount = useSelector ( (state:any) => state.cart.amount)

    const dispatch = useDispatch()

    // addItem
    // emptyCart

    const testAction = addItem({item: {id: 1, nam2: 'test', price: 100, qty: 1} })
    const test2Action = emptyCart();

    console.log("additem action ", testAction)
    console.log("emptyCart action", test2Action)

    return (
        <div>
            <h2>Redux Cart</h2>

            <p>Amount {amount}</p>
            <p>Total Items {totalItems}</p>

            <button onClick={ () => dispatch(testAction) }> Add Item </button>
            <button onClick={ () => dispatch(emptyCart()) } > Empty Cart </button>
        </div>
    )
})

export default ReduxCart;