import {createStore, 
        combineReducers, 
        applyMiddleware} from 'redux';

import productReducer from '../cart/state/reducers/productReducer';
import loggerMiddleware, {loggerMiddleware2} from './middlewares/loggerMiddeware';

// thunk is middleware
import thunk from 'redux-thunk';
 

console.log("Redux store")

const rootReducer = combineReducers( {
    // ps => productState
    ps: productReducer,
})

const store = createStore(rootReducer, 
                         applyMiddleware(loggerMiddleware, loggerMiddleware2, thunk) )

export default store;