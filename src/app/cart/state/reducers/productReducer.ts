// this means, import from actions/index.ts
import { ProductReducerState } from '..'; // import from index.ts
import * as ACTION_TYPES from '../actions';
 
const INITIAL_STATE : ProductReducerState = {
    loading: false,
    error: '',
    products: []
}

export default function productReducer(state: ProductReducerState = INITIAL_STATE, 
                                       action: any): ProductReducerState {
    console.log("productReducer called", state, action)

    switch (action.type) {
        case ACTION_TYPES.INIT_PRODUCTS: return {...state, products: action.payload.products}
        case ACTION_TYPES.INIT_LOADING: return {...state, loading: action.payload.loading}
        case ACTION_TYPES.INIT_ERROR: return {...state, error: action.payload.error}
        default: return state;
    }
}
