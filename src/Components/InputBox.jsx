import React from "react";

const InputBox = ({ text, display, setFunction ,value}) => {
  return (
    <div className="w-full">
      <input
        type="text"
        placeholder={text}
        className={`input input-bordered input-info w-full ${display}  `}
        value={value}
        onChange={(e) => setFunction(e.target.value)}
      />
      
    </div>
  );
};

export default InputBox;
