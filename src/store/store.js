import { comment } from "postcss";
import { ADD_COMMENT, DELETE_REPLY, ADD_REPLY } from "./actionTypes";
import { createStore } from "redux";

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

export const store = createStore(reducer);
