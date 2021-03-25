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

// Use the initialState as a default value
// initialStateをデフォルト値として使用
// (ES6デフォルトの引数構文)
export default function appReducer(state = initialState, action) {
  // The reducer normally looks at the action type field to decide what happens
  // reducerは通常actionタイプフィールドを調べ、何が起こるのかを判断する
  switch (action.type) {
    // Do something here based on the different types of actions
    // 様々なタイプのactionsに基づき、ここに記述する何かしらの処理を行う
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this speciic action, return the existing state unchanged
      // このreducerがactionタイプを認識しない場合、
      // もしくはこの特定のactionを気にしない場合は、
      // 既存のstateを変更せずに返す
      return state
  }
}
