import * as api from "../api";
import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  UPDATE_LIKES,
  CURRENT_POST,
  CLEAR,
} from "../constants/actionTypes";

// -- Action Creators
export const getPosts = () => async (dispacth) => {
  try {
    const { data } = await api.fetchPosts();

    dispacth({
      type: FETCH_ALL,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({
      type: CREATE,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispacth) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispacth({
      type: UPDATE,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.deletePost(id);

    dispatch({
      type: DELETE,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const likePostAction = (id, count) => async (dispacth) => {
  try {
    const { data } = await api.updateLikeCount(id, count);

    dispacth({
      type: UPDATE_LIKES,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const currentPost = (post) => (dispatch) => {
  try {
    dispatch({
      type: CURRENT_POST,
      payload: post,
    });
  } catch (error) {
    console.log(error);
  }
};

export const clear = () => (dispacth) => {
  dispacth({
    type: CLEAR,
  });
};
