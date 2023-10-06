import { createSlice } from '@reduxjs/toolkit'


const calculateTotalAmount = (items: any[]) => {
    let amount = 0, totalItems = 0;
            
    for (let item of items) {
        amount += item.price * item.qty;
        totalItems += item.qty;
    }

    return {amount, totalItems}
}

interface AddItemAction {
    type: string;
    payload: { item: any}
}

interface EmptyCartAction {
    type: string;
}

interface UpdateItemAction {
    type: string;
    payload: {id: number, qty: number}
}

interface RemoveItemAction {
    type: string;
    payload: {id: number}
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
     items: [],
     amount: 0,
     totalItems: 0
  },
  reducers: {
    addItem: (state :any, action : AddItemAction) => {
        const items = [...state.items, action.payload.item]
            
        // returns object with amount, totalItems attributes, destructruing them
        const result =   calculateTotalAmount(items)

        state.items = items
        state.amount = result.amount
        state.totalItems = result.totalItems

    },

    emptyCart: (state : any, action: EmptyCartAction) => {
        state.items = []
        state.amount = 0
        state.totalItems = 0
    },

    updateItem: (state :any, action: UpdateItemAction) => {
        const items = state.items.map ( (item: any) => item.id === action.payload.id? 
            {...item, qty: action.payload.qty}
            :item)

            const result =   calculateTotalAmount(items)

            state.items = items
            state.amount = result.amount
            state.totalItems = result.totalItems
    },

    removeItem: (state: any, action: RemoveItemAction) => {
        const items = state.items.filter ( (item :any) => item.id != action.payload.id)
        const result =   calculateTotalAmount(items)

        state.items = items
        state.amount = result.amount
        state.totalItems = result.totalItems
    }

}
})

export const { addItem, emptyCart } = cartSlice.actions
export default cartSlice.reducer