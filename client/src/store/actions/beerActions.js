import {
  LOADING,
  POST_BEER,
  GET_ERRORS,
  FETCH_BEER,
  ADD_COMMENT,
  DELETE_COMMENT,
  CLEAR_ERRORS
} from './types';
import axios from '../../axios/beerRoutes';

export const postBeer = (beer, history) => async dispatch => {
  try {
    dispatch(loading());
    const res = await axios.post('/', beer);
    dispatch({
      type: POST_BEER
    });
    history.push(`/reviews/${res.data._id}`);
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const fetchBeer = id => async dispatch => {
  try {
    dispatch(loading());
    const res = await axios.get(`/${id}`);
    dispatch({
      type: FETCH_BEER,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const addComment = (id, comment) => async dispatch => {
  try {
    dispatch(clearErrors());
    const res = await axios.post(`/comment/${id}`, comment);
    dispatch({
      type: ADD_COMMENT,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const deleteComment = (id, comment_id) => async dispatch => {
  try {
    const res = await axios.delete(`/comment/${id}/${comment_id}`);
    dispatch({
      type: DELETE_COMMENT,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

const loading = () => ({ type: LOADING });

const clearErrors = () => ({ type: CLEAR_ERRORS });
