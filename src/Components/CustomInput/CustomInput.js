import React from "react";
import "./CustomInput.css";
const CustomInput = () => {
  const [click, setClick] = React.useState(false);
  return (
    <div className="customInput">
      <input />
      <span
        onClick={(e) => {
          setClick(!click);
        }}
      >
        {click ? "Show" : "Hide"}
      </span>
    </div>
  );
};

export default CustomInput;
