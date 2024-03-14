import React from "react";

const Button = ({ onClick, name }) => {
  return (
    <div>
      <div
        className="py-4 px-4 bg-purple-950 text-stone-100 flex items-center justify-center mt-7 rounded-md mb-3"
        onClick={onClick}
      >
        {name}
      </div>
    </div>
  );
};

export default Button;
