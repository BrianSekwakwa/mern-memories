import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  UPDATE_LIKES,
  DELETE,
  CURRENT_POST,
  CLEAR,
} from "../constants/actionTypes";

const initState = {
  posts: [],
  currentPost: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return {
        ...state,
        posts: action.payload,
      };
    case CREATE:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case UPDATE:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };

    case UPDATE_LIKES:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };

    case DELETE:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload._id),
      };
    case CURRENT_POST:
      return {
        ...state,
        currentPost: action.payload,
      };

    case CLEAR:
      return {
        ...state,
        currentPost: null,
      };
    default:
      return state;
  }
};
