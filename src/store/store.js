import { comment } from "postcss";
import {
  ADD_COMMENT,
  DELETE_REPLY,
  ADD_REPLY,
  DELETE_COMMENTS,
} from "./actionTypes";
import { createStore } from "redux";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };

    case ADD_REPLY:
      return {
        ...state,
        comments: state.comments.map((comment) =>
          comment.id === action.payload.id
            ? {
                ...comment,
                replies: [...comment.replies, action.payload.reply],
              }
            : comment
        ),
      };
    case DELETE_REPLY:
      return {
        ...state,
        comments: state.comments.map((comment) =>
          comment.id === action.payload.id
            ? {
                ...comment,
                replies: [],
              }
            : comment
        ),
      };

    case DELETE_COMMENTS:
      return {
        comments: [],
      };

    default:
      return state;
  }
};
const persistConfig = {
  key: "persist-store",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(persistedReducer);

export const persistor = persistStore(store);
