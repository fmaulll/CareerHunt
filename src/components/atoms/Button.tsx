import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
  icon: React.ReactNode;
  buttonType: string;
  classStyle: string;
  disabled: boolean;
  onClick: () => void;
}

const Button: FC<Props> = ({
  children,
  icon = null,
  buttonType,
  classStyle = "",
  disabled,
  onClick = () => {},
  ...other
}) => {
  function generateClass(type: string) {
    if (type === "blue") {
      return "rounded-2xl text-white py-4 bg-primary w-full flex justify-center items-center active:bg-primaryDark font-bold hover:bg-bright duration-200";
    }
    if (type === "white") {
      return "border-2 border-black bg-white rounded-2xl py-4 w-full flex justify-center items-center hover:bg-gray-300 active:bg-gray-700 duration-200 font-bold";
    }
    if (type === "primaryWhite") {
      return "rounded-2xl bg-white text-primary py-4 w-full flex justify-center items-center hover:bg-gray-300 active:bg-gray-700 duration-200 font-bold";
    }
    return "rounded-2xl text-white py-4 bg-primary w-full flex justify-center items-center active:bg-primaryDark font-bold hover:bg-bright duration-200";
  }
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      {...other}
      className={`${generateClass(
        buttonType
      )} ${classStyle} disabled:bg-gray-300`}
    >
      {icon ? <div className="mr-2">{icon}</div> : null}
      {children}
    </button>
  );
};

export default Button;
