import React from "react";

const InputBox = ({ text }) => {
  return (
    <div className="w-full">
      <input
        type="text"
        placeholder={text}
        className="input input-bordered input-info w-full "
      />
    </div>
  );
};

export default InputBox;
