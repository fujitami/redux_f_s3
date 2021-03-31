import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducer'
// import {
//   sayHiOnDispatch,
//   includeMeaningOfLife
// } from './exampleAddons/enhancers'

import { print1, print2, print3 } from './exampleAddons/middleware'

// const composedEnhancer = compose(sayHiOnDispatch, includeMeaningOfLife)

// const middlewareEnhancer = applyMiddleware(print1, print2, print3)

const composedEnhancer = composedWithDevTools(
  applyMiddleware(print1, print2, print3)
)

// const store = createStore(rootReducer, undefined, composedEnhancer)

// Pass enhancer as the second arg, since there's no preloadedState
// preloadedStateがないため、2番目の引数としてenhancerを渡す
// const store = createStore(rootReducer, middlewareEnhancer)

const store = createStore(rootReducer, composedEnhancer)

export default store
