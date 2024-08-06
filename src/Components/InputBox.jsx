import React from "react";

const InputBox = ({ text, display, setNewComment }) => {
  return (
    <div className="w-full">
      <input
        type="text"
        placeholder={text}
        className={`input input-bordered input-info w-full ${display}  `}
        
        onChange={(e) => setNewComment(e.target.value)}
      />
      
    </div>
  );
};

export default InputBox;
