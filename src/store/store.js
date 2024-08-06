import { ADD_COMMENT, DELETE_COMMENT } from "./actionTypes";
import { createStore } from "redux";

const initialState = {
  comment: [
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
        comment: [...state.comment, action.payload],
      };

    case DELETE_COMMENT:
      return {
        ...state,
        comment: state.comment.filter(
          (comment) => comment.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

export const store = createStore(reducer);
