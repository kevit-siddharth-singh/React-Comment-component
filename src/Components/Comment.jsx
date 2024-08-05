import React from "react";
import InputBox from "./InputBox";

const Comment = ({ id, comment, replies }) => {
  return (
    <>
      <div className="comment flex flex-col  bg-gray-800 w-2/5 p-12  rounded-xl ">
        <div className="comment-wrapper flex flex-col gap-5 ">
          <h1 className="text-3xl font-bold ">Comments</h1>
          <div className="input-field flex gap-4 w-full justify-between">
            <InputBox text={"Add a comment..."} />
            <button className="btn btn-outline btn-success ">Submit</button>
          </div>
        </div>

        <div className="reply-wrapper my-4 ">
          <div className="reply-data flex items-center ">
            <div className="reply-text w-full bg-gray-700 p-2 rounded-lg">
              <h2>{comment}</h2>
              <div className="replied p-2 w-full">
                {replies.map((reply, index) => (
                  <p key={index}>{reply}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="buttons flex gap-4 my-2">
            <button className="reply text-blue-400">Reply</button>
            <button className="delete text-red-500">Delete</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comment;
