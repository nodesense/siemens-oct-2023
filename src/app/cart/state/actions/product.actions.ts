// write all your action creators

import { getAllProducts } from '../services/product.service';
import * as ACTION_TYPES from './index';

// multi line statement
// export const initError = (error: boolean) => {
//     return {
//         type: ACTION_TYPES.INIT_ERROR,
//         payload: {error}
//     }
// }

// create and return action object
export const initError = (error: boolean) => ({
    type: ACTION_TYPES.INIT_ERROR,
    payload: {error}
})

export const initLoading = (loading: boolean) => ({
    type: ACTION_TYPES.INIT_LOADING,
    payload: {loading}
})

export const initProducts = (products: any[]) => ({
    type: ACTION_TYPES.INIT_PRODUCTS,
    payload: {products}
})


// es5, for redux thunk, to implement asyc code like api calls, timer etc
// difference between normal action creator  and thunk?
// normal action creator returns action object {type: '[cart initLoading]', payload: ....}
// thunk action creator returns a async function, not action object
// in thunk, we will dispatch a function
// in normal action creators, we dispatch object
// in thunk, the thunk middleware intercept dispatched function, calls the function, 
//            DO NOT FORWARD dispatched function to reducers


export function getProducts (axiosParams: any) {
    return function getProductsThunkFunc(dispatch: any, getState: any) {
        // place to write async code like api or timer code
        console.log("async thunk function called by thunk middleware")

        // if data already available in store, do not make api call
        // getState().ps.products.length > 0
        // if (getState().ps.products.length > 0) {
        //     console.log("Products already present in state, not making api call")
        //     return;
        // }
        
        getAllProducts(axiosParams)
        .then (products => {
            console.log("PRoducts from service ", products)

            const action = initProducts(products)
            dispatch(action)

            console.log("STATE AFTER loading products ", getState())

        })
        .catch (error => {
            console.log("Erorr while processing request ", error)
            dispatch(initError(error))
        })
    }
}