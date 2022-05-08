import React from "react";
import "./Button.css";

function Button({ small, children, handleClick, disabled, size }) {
  const nameClass = small ? `btn ${small}` : "btn";
  const btnWidth = size ? `${size}px` : "";
  const btnMargin = size ? 0 : "1rem";

  return (
    <button
      className={nameClass}
      onClick={handleClick}
      disabled={disabled}
      style={{ width: btnWidth, marginTop: btnMargin, marginBottom: btnMargin }}
    >
      {children}
    </button>
  );
}

export default Button;
