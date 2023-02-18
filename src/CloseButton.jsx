import React from "react";
import { FaTimes } from "react-icons/fa";

function classNames(...classList) {
  return classList.filter(Boolean).join(" ");
}

export default function CloseButton({ handleClick, extraClassName }) {
  return (
    <button
      onClick={handleClick}
      className={classNames(
        extraClassName,
        "text-3xl text-red-500 duration-200 hover:text-red-600"
      )}
    >
      <FaTimes />
    </button>
  );
}
