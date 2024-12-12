import React, { FC } from "react";

const Heading: FC<{ text: string }> = ({ text }) => {
  return (
    <h5 className="text-[12px] xl:text-heading-xxsmall text-[#4d4c4d] dark:text-primary-a">
      {text}
    </h5>
  );
};

export default Heading;
