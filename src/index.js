import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import './api/server'

import store from './store'

// Log the initial state
// 初期stateのログ
console.log('Initial state: ', store.getState())
// {todos: [...], filters: {status, colors}}

// Every time the state changes, log it
// stateに変化があるたびにログを残す
// Note that subscribe() returns a function for unregistering the listener
// subscribe()はリスナーの登録を解除するための関数を返すことに注意する
const unsubscribe = store.subscribe(() =>
  console.log('State after dispatch: ', store.getState())
)

// Now, dispatch some actions
// ここでいくつかのアクションを更新する

console.log('Dispatching action')

store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions' })
store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about reducers' })
store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about stores' })

store.dispatch({ type: 'todos/todoToggled', payload: 0 })
store.dispatch({ type: 'todos/todoToggled', payload: 1 })

store.dispatch({ type: 'todos/statusFilterChanged', payload: 'Active' })

store.dispatch({
  type: 'todos/colorFilterChanged',
  payload: { color: 'red', changeType: 'added' }
})

// Stop listening to state updates
// state更新のリスニングを止める
unsubscribe()

// Dispatch one more action to see what happens
// もう一つのactionをディスパッチして、何が起こるかを確認する

store.dispatch({ type: 'todos/todoAdded', payload: 'Try creating a store' })

console.log('Dispatch complete')

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
