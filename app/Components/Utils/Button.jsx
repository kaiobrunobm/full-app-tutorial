import React from "react";

const Button = ({ children }) => {
  return (
    <button className="bg-primary w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-blackPrimary">
      {children}
    </button>
  );
};

export default Button;
