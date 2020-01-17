import jsonPlaceholder from '../../api/jsonPlaceholder';
import * as actionTypes from './actionTypes';

export const fetchPosts = () => {
  return async dispatch => {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({
      type: actionTypes.FETCH_POSTS,
      todos: response.data
    });
  };
};

export const savePost = post => {
  return {
    type: actionTypes.SAVE_POST,
    post: post
  };
};
