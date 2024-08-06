import { useDispatch, useSelector } from "react-redux";
import Comment from "./Components/Comment";
import InputBox from "./Components/InputBox";
import React, { useState, useEffect } from "react";
import { addComment } from "./store/Actions";

const App = () => {
  const [newComment, setNewComment] = useState("");
  const dispatch = useDispatch();

  // Sid : ADD COMMENT HANDLING FUNCTION
  function handleAddComment() {
    const Comment = { id: Date.now(), comment: newComment, replies: [] };

    dispatch(addComment(Comment));
    setContent("");
  }
  // Sid : ADD COMMENT HANDLING FUNCTION


  const COMMENT_DATA = useSelector((state) => state.comments);
  console.log(COMMENT_DATA);
  return (
    <div className="comment-container bg-slate-700 py-6 flex flex-col items-center justify-center gap-5">
      <div className="input-field flex gap-4  justify-between w-2/5 ">
        <InputBox
          text={"Add a comment..."}
          display={null}
          setFunction={setNewComment}
        />
        <button
          onClick={handleAddComment}
          className="btn btn-outline btn-success "
        >
          Comment
        </button>
      </div>

      {COMMENT_DATA.map((comment, index) => (
        <Comment
          key={index}
          comment={comment.comment}
          replies={comment.replies}
          id={comment.id}
        />
      ))}
    </div>
  );
};

export default App;
