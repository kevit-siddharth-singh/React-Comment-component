import React, { useState } from "react";
import InputBox from "./InputBox";
import { useDispatch, useSelector } from "react-redux";
import { addReply, deleteReply } from "../store/Actions";

const Comment = ({ id, comment, replies }) => {
  const dispatch = useDispatch();

  const COMMENT_DATA = useSelector((state) => state.comments);

  const [replyToggle, setReplyToggle] = useState(false);
  const [emptyReplies, setEmptyReplies] = useState(true);
  function handleReplyToggle() {
    // console.log(replyToggle);
    setReplyToggle(!replyToggle);
  }

  // Sid : State for reply..
  const [reply, setReply] = useState("");

  // NOTE : ADD REPLY HANDLING FUNCTION
  function handleReply() {
    const replyData = {
      id: id,
      reply: reply,
    };
    setEmptyReplies(false);
    dispatch(addReply(replyData));
    setReply("");
  }
  // NOTE : ADD REPLY HANDLING FUNCTION

  // Sid: Handling Deletion of Reply

  function handleReplyDelete() {
    const replyData = {
      id: id,
    };
    setEmptyReplies(true);
    dispatch(deleteReply(replyData));
  }

  // Sid: Handling Deletion of Reply

  return (
    <>
      <div className="comment-reply flex flex-col bg-gray-800 w-4/5 p-5 sm:w-2/5 sm:p-10  rounded-xl ">
        <div className="reply-wrapper my-2 ">
          <p className="bg-slate-600 rounded-xl p-2 text-yellow-500 mb-6">
            {comment}
          </p>
          <div className="reply-data flex items-center ">
            <div className="reply-text w-full bg-gray-700 p-2 rounded-lg">
              <h2>Reply :</h2>
              <hr />
              <div className="replied p-2 w-full">
                {replies.map((reply, index) => (
                  <p key={index}>{reply}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="buttons flex gap-4 my-2">
            <button className="reply text-blue-400" onClick={handleReplyToggle}>
              {replyToggle ? "Cancel" : "Reply"}
            </button>

            {replyToggle && (
              <button
                className="reply text-green-400 p-2"
                onClick={handleReply}
              >
                Send
              </button>
            )}

            {!emptyReplies && (
              <button
                className="delete text-red-500 p-2"
                onClick={handleReplyDelete}
              >
                Delete
              </button>
            )}
          </div>
          <InputBox
            text="reply.."
            display={replyToggle ? null : "hidden"}
            setFunction={setReply}
            value={reply}
          />
        </div>
      </div>
    </>
  );
};

export default Comment;
