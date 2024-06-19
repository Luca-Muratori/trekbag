import React from "react";

export default function Button({ onClick, buttonType, text }) {
  return (
    <button
    onClick={onClick}
    type='submit'
      className={`btn ${buttonType === "secondary" ? "btn--secondary" : ""}`}
    >
      {text}
    </button>
  );
}
