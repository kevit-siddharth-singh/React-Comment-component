import React, { useState, useEffect } from "react";
import InputBox from "./InputBox";

import { useDispatch } from "react-redux";

const Comment = ({ id, comment, replies }) => {
  const dispatch = useDispatch();

  const [replyToggle, setReplyToggle] = useState(false);
  function handleReplyToggle() {
    console.log(replyToggle);
    setReplyToggle(!replyToggle);
  }

  return (
    <>
      <div className="comment-reply flex flex-col   bg-gray-800 w-2/5 p-10  rounded-xl ">
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
            <button className="delete text-red-500">Delete</button>
          </div>
          <InputBox text="reply.." display={replyToggle ? null : "hidden"} />
        </div>
      </div>
    </>
  );
};

export default Comment;
