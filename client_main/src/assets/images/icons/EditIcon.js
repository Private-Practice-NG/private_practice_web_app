import React from "react";

function EditIcon(props) {
  return (
    <svg
      width={12}
      height={12}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M12.65 3.138l2.012 2.01-2.012-2.01zm1.294-1.772l-5.44 5.44c-.282.281-.473.639-.551 1.028L7.45 10.35l2.516-.504a2.01 2.01 0 001.027-.55l5.441-5.44a1.761 1.761 0 00-2.49-2.49v0z"
        stroke="#000"
        strokeWidth={1.1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.05 12.25v2.85a1.9 1.9 0 01-1.9 1.9H2.7a1.9 1.9 0 01-1.9-1.9V4.65a1.9 1.9 0 011.9-1.9h2.85"
        stroke="#000"
        strokeWidth={1.1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default EditIcon;
