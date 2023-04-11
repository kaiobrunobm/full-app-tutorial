import React from "react";

const Headers = ({ children }) => {
  return (
    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
      {children}
    </h1>
  );
};

export default Headers;
