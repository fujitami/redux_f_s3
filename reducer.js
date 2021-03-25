const initialState = {
  todos: [
    { id: 0, text: 'Learn React', completed: true },
    { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
    { id: 2, text: 'Build something fun!', completed: false, color: 'blue' }
  ],
  filters: {
    status: 'All',
    colors: []
  }
}

function nextTodoId(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
  return maxId + 1
}

// Use the initialState as a default value
// initialStateをデフォルト値として使用
// (ES6デフォルトの引数構文)
export default function appReducer(state = initialState, action) {
  // The reducer normally looks at the action type field to decide what happens
  // reducerは通常actionタイプフィールドを調べ、何が起こるのかを判断する
  switch (action.type) {
    // Do something here based on the different types of actions
    // 様々なタイプのactionsに基づき、ここに記述する何かしらの処理を行う
    case 'todos/todoAdded': {
      //We need to return a new state object
      // 新しいstateオブジェクトを返す必要がある
      return {
        // that has all the existing state data
        // すべての既存stateデータがある
        ...state
        // but has a new array for the `todos` field
        // ただし、「todo」フィールドには新しい配列がある
        todos: [
          // with all of the old todos
          // すべての古いtodoを使用する
          ...state.todos,
          // and the new todo object
          // そして、新しいtodoオブジェクトを扱う
          {
            // Use an auto-incrementing numeric ID for this example
            // この例では、自動で増加する数値IDを使用する
            id: nextTodoId(state.todos),
            text: action.payload,
            completed: faulse
          }
        ]
      }
    }
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this speciic action, return the existing state unchanged
      // このreducerがactionタイプを認識しない場合、
      // もしくはこの特定のactionを気にしない場合は、
      // 既存のstateを変更せずに返す
      return state
  }
}
