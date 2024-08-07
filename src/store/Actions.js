// actions.js
import {
  ADD_COMMENT,
  ADD_REPLY,
  DELETE_REPLY,
  DELETE_COMMENTS,
  DELETE_SPECIFIC_COMMENT,
  DELETE_SPECIFIC_REPLY,
} from "./actionTypes";

export const addComment = (comment) => ({
  type: ADD_COMMENT,
  payload: comment,
});

export const addReply = (replyData) => ({
  type: ADD_REPLY,
  payload: replyData,
});

export const deleteReply = (reply) => ({
  type: DELETE_REPLY,
  payload: reply,
});
export const deleteSpecificComment = (commentData) => ({
  type: DELETE_SPECIFIC_COMMENT,
  payload: commentData,
});

export const deleteComments = () => ({
  type: DELETE_COMMENTS,
});
export const deleteSpecificReply = (data) => ({
  type: DELETE_SPECIFIC_REPLY,
  payload: data,
});
