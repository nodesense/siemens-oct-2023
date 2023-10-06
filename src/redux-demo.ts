import { initLoading } from "./app/cart/state/actions/product.actions";
import store from "./app/state/store";

import {bindActionCreators} from 'redux';

import * as actions from   "./app/cart/state/actions/product.actions";

console.log("REDUX DEMO..")

console.log("STATE ", store.getState())

const {getState, dispatch} = store;

// call unsubscribe1 to unsubscribe
const unsubscribe1 = store.subscribe( () => {
    // called after every dispatch, no matter whether data changed or not
    console.log("STORE SUBSCRIBE STATE ", store.getState())
})

console.log("STATE ", getState())
// action creator {type: '[cart initLoading]', payload: {loading: true}}
const action1 = initLoading(true)
console.log("LOADING ACTION ", action1)

console.log("DISPATCH LOADING ACTION ", action1)

store.dispatch (action1)

console.log("STATE AFTER loading true ", getState())

// reset loading to false

console.log("DISPATCH Init loading false")
dispatch (initLoading(false))

console.log("STATE AFTER loading false ", getState())


// bind action actors is helper function that bind action creator and dispatch into 
// a wrapper function
// if we call the wrapper function, that calls action creator to create action
// and it automatically dispatch created action to reducers

const initLoadDispatch = bindActionCreators(initLoading, dispatch)

// this calls action creator to create action and dispatch automatically
console.log("Bind action dispatch ...")
initLoadDispatch(true) // internally create action and dispatch
console.log("STATE AFTER loading true with bind action creator ", getState())


// bind actions example 2, we can bind group of functions

// return object with all functions from actions binded
const productActions = bindActionCreators(actions, dispatch)
// this too calls action creator and dispatch the action to reducer
productActions.initLoading(false)

console.log("STATE AFTER loading false with group bind action creators  ", getState())


unsubscribe1()// here after subscribe is not called

// returns a thunk function for async execution, NOT A action OBJECT
const thunkFunc = actions.getProducts()

console.log("Thunk action function ", thunkFunc)

// dispatching thunk action function 
// app crash if we don't use redux thunk middleware as reducer wants action object, not function

dispatch(thunkFunc as any)