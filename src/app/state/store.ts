// import {createStore, 
//         combineReducers, 
//         applyMiddleware} from 'redux';

import {configureStore} from '@reduxjs/toolkit';


import productReducer from '../cart/state/reducers/productReducer';
import loggerMiddleware, {loggerMiddleware2} from './middlewares/loggerMiddeware';

// thunk is middleware
import thunk from 'redux-thunk';
import cartReducer from '../cart/state/reducers/cartReducer';
 

console.log("Redux store")

// const rootReducer = combineReducers( {
//     // ps => productState
//     ps: productReducer,
// })

// const store = createStore(rootReducer, 
//                          applyMiddleware(loggerMiddleware, loggerMiddleware2, thunk) )

// export default store;

const store = configureStore({
    reducer: {
        ps: productReducer,
        cart: cartReducer
    },
    middleware: [loggerMiddleware, loggerMiddleware2, thunk]
})

export default store;