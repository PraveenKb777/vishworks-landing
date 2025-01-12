import React, { FC } from "react";

const GardiantText: FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <span
      className={
        "bg-gradient-1 bg-clip-text  text-transparent" +
        " " +
        (className ? className : "")
      }
      style={{ WebkitBackgroundClip: "text" }}
    >
      {children}
    </span>
  );
};

export default GardiantText;
