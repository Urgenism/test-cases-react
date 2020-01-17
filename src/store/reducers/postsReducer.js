import * as actionTypes from '../actions/actionTypes';

const postsReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_POSTS:
      const todosTitle = action.todos.map(todo => {
        return todo.title;
      });
      return [...state, ...todosTitle];
    case actionTypes.SAVE_POST:
      return [...state, action.post];
    default:
      return state;
  }
};

export default postsReducer;
