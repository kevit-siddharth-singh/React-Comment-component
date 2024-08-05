import React from "react";

import Comment from "./Components/Comment";

const COMMENT_DATA = [
  {
    id: 1,
    comment: "hey !",
    reply: ["sid", "temp", "testing"],
  },
  {
    id: 2,
    comment: "hello sid !",
    reply: ["sid", "temp", "testing"],
  },
];

const App = () => {
  return (
    <div className="comment-container bg-slate-700 flex flex-col h-full items-center justify-center gap-5 ">
      {COMMENT_DATA.map((comment, index) => (
        <Comment
          comment={comment.comment}
          reply={comment.reply}
          id={comment.id}
        />
      ))}
    </div>
  );
};

export default App;
