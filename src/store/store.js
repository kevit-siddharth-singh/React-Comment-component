import { comment } from "postcss";
import { ADD_COMMENT, DELETE_REPLY, ADD_REPLY } from "./actionTypes";
import { createStore } from "redux";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  comments: [
    {
      id: 1,
      comment: "hey !",
      replies: ["sid", "temp", "testing"],
    },
    {
      id: 2,
      comment: "hello sid !",
      replies: ["sid", "temp", "testing"],
    },
  ],
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
