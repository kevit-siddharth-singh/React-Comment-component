import React from "react";
import InputBox from "./InputBox";

const Comment = ({ id, comment, reply }) => {
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

        <div className="reply-wrapper  p-4">
          <h2>{comment}</h2>
          <p>{reply}</p>
          <div className="buttons flex flex-col justify-end">
            <button className="reply text-blue-400">Reply</button>
            <button className="delete">Delete</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comment;
