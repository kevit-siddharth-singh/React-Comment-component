// actions.js
import {
  ADD_COMMENT,
  DELETE_COMMENT,
  REPLY_COMMENT,
} from "./actionTypes";

export const addComment = (comment) => ({
  type: ADD_COMMENT,
  payload: comment,
});



export const deleteComment = (id) => ({
  type: DELETE_COMMENT,
  payload: id,
});

export const reply_comment = (comments) => ({
  type: REPLY_COMMENT,
  payload: comments,
});
