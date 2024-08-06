import { useDispatch, useSelector } from "react-redux";
import Comment from "./Components/Comment";
import InputBox from "./Components/InputBox";
import React, { useRef, useState } from "react";
import { addComment, deleteComments } from "./store/Actions";
import Modal from "./Components/Modal";

const App = () => {
  const [newComment, setNewComment] = useState("");

  const dispatch = useDispatch();

  // Sid : ADD COMMENT HANDLING FUNCTION
  function handleAddComment() {
    if (newComment) {
      const Comment = { id: Date.now(), comment: newComment, replies: [] };
      dispatch(addComment(Comment));
      setNewComment("");
    } else {
      document.getElementById("my_modal_1").showModal();
    }

    // dispatch(addComment(Comment));
    // setNewComment("");
  }
  // Sid : ADD COMMENT HANDLING FUNCTION

  // Note: Func For Deleting Local Storage
  function deleteLocalStorage() {
    localStorage.removeItem("persist:persist-store");
    setNewComment("");
  }

  // Note: Func For Deleting Local Storage

  // !: Handling Deletion of comments

  function handleCommentsDelete() {
    localStorage.removeItem("persist:persist-store");
    dispatch(deleteComments());
  }

  // !: Handling Deletion of comments

  const COMMENT_DATA = useSelector((state) => state.comments);
  console.log(COMMENT_DATA);
  return (
    <div className="comment-container bg-slate-700 py-6 flex flex-col items-center justify-center gap-5">
      {/* Sid: This modal is hidden Initially */}
      <Modal />
      {/* Sid: This modal is hidden Initially */}
      <div className="input-field flex gap-4  justify-between w-4/5 sm:w-2/5 ">
        <InputBox
          text={"Add a comment..."}
          display={null}
          setFunction={setNewComment}
          value={newComment}
        />
        <button
          onClick={handleAddComment}
          className="btn btn-outline btn-success p-2 sm:p-4"
        >
          Comment
        </button>
      </div>
      {COMMENT_DATA?.map((comment, index) => (
        <Comment
          key={index}
          comment={comment.comment}
          replies={comment.replies}
          id={comment.id}
        />
      ))}
      <div className="dangerous-btn flex gap-16">
        <button
          onClick={handleCommentsDelete}
          className="bg-red-500 text-white p-2 rounded-md active:bg-red-600 "
        >
          Clear comments
        </button>
        <button
          onClick={deleteLocalStorage}
          className="bg-green-500 text-white p-2 rounded-md active:bg-green-600 "
        >
          Stop Saving
        </button>
      </div>
    </div>
  );
};

export default App;
