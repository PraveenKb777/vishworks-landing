import React, { FC } from "react";

const GardiantText: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <span
      className="bg-gradient-1 bg-clip-text  text-transparent"
      style={{ WebkitBackgroundClip: "text" }}
    >
      {children}
    </span>
  );
};

export default GardiantText;
