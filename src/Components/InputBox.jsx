import React from "react";

const InputBox = ({ tagID, text, display, setFunction, value }) => {
  return (
    <div className="w-full">
      <input
        id={tagID}
        type="text"
        placeholder={text}
        className={`input input-bordered input-info w-full ${display}  `}
        value={value}
        onChange={(e) => setFunction(e.target.value)}
        autoFocus
      />
    </div>
  );
};

export default InputBox;
