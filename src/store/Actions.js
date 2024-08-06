// actions.js
import {
  ADD_COMMENT,
  ADD_REPLY,
  DELETE_REPLY,
  DELETE_COMMENTS,
} from "./actionTypes";

export const addComment = (comment) => ({
  type: ADD_COMMENT,
  payload: comment,
});

export const addReply = (reply) => ({
  type: ADD_REPLY,
  payload: reply,
});

export const deleteReply = (reply) => ({
  type: DELETE_REPLY,
  payload: reply,
});

export const deleteComments = () => ({
  type: DELETE_COMMENTS,
});
