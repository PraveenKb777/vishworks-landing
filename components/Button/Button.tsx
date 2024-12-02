import React, { FC } from "react";

const variants = {
  white:
    " bg-primary-b text-primary-a border-primary-b hover:bg-primary-a hover:text-primary-b",
  black:
    " bg-primary-a text-primary-b border-primary-a hover:bg-primary-b hover:text-primary-a",
  default:
    "bg-primary-b border-core-content-teritary  hover:border-accent hover:text-accent  text-primary-a",
};

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  label: string;
  load?: boolean;

  variant?: keyof typeof variants;
}

const Button: FC<ButtonProps> = ({ variant, label, load, ...props }) => {
  let className =
    "border rounded-md py-3 px-3 text-[14px] font-extrabold lg:text-label-medium transition-all duration-300  [&>*]:hover:text-primary-a ";

  if (variant && variant in variants) {
    className += variants[variant];
  } else {
    className += variants["default"];
  }

  if (props.className) {
    className += " ";
    className += props.className;
    console.log(className, props.className);
    delete props.className;
  }
  return (
    <button className={className} {...props}>
      {load ? (
        <svg
          className="animate-spin ml-auto mr-auto h-5 w-5 text-primary-b "
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      ) : (
        label
      )}
    </button>
  );
};

export default Button;
