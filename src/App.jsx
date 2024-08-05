import React from "react";

import Comment from "./Components/Comment";

const COMMENT_DATA = [
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
];

const App = () => {
  return (
    <div className="comment-container bg-slate-700 flex flex-col h-full items-center justify-center gap-5 ">
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
