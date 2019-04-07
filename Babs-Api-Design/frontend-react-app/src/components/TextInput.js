import React from "react";

const TextInput = props => {
  return (
    <div className="form-group">
      <input type="text" className="form-control" value={props.inputValue} />
    </div>
  );
};

export default TextInput;
