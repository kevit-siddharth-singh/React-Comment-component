import {
  ADD_COMMENT,
  DELETE_REPLY,
  ADD_REPLY,
  DELETE_COMMENTS,
  DELETE_SPECIFIC_COMMENT,
  DELETE_SPECIFIC_REPLY,
} from "./actionTypes";
import { createStore } from "redux";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  comments: [
    {
      id: 1,
      comment: "hey !",
      replies: [
        {
          id: 1,
          reply: "sid",
        },
        {
          id: 2,
          reply: "sid",
        },
      ],
    },
    {
      id: 2,
      comment: "hello sid !",
      replies: [
        {
          id: 1,
          reply: "sid",
        },
        {
          id: 2,
          reply: "sid",
        },
      ],
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
          comment.id === action.payload.commentId
            ? {
                ...comment,
                replies: [
                  ...comment.replies,
                  {
                    id: action.payload.replyId,
                    reply: action.payload.reply,
                  },
                ],
              }
            : comment
        ),
      };
    case DELETE_SPECIFIC_REPLY:
      return {
        ...state,
        comments: state.comments.map((comment) =>
          comment.id === action.payload.commentId
            ? {
                ...comment,
                replies: comment.replies.filter(
                  (reply) => reply.id !== action.payload.replyId
                ),
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

    case DELETE_SPECIFIC_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(
          (comment) => comment.id !== action.payload.id
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
