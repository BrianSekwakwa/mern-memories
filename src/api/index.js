import axios from "axios";

const url = "https://our-memories-app.herokuapp.com/posts";

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, post) => axios.patch(`${url}/${id}`, post);
export const updateLikeCount = (id, count) =>
  axios.patch(`${url}/updateLikes/${id}`, count);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
