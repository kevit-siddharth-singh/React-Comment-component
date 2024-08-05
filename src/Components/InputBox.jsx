import React from "react";

const InputBox = ({ text, display }) => {
  return (
    <div className="w-full">
      <input
        type="text"
        placeholder={text}
        className={`input input-bordered input-info w-full ${display}  `}
      />
    </div>
  );
};

export default InputBox;
