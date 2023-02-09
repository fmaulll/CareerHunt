import React, { FC, useRef, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

interface Props {
  value: string;
  type: string;
  icon: React.ReactNode;
  styling: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const Input: FC<Props> = ({ value, type, icon, styling, onChange, placeholder }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [show, setShow] = useState(false);

  const handleShowPassword = () => {
    setShow(!show);
  };

  const handleFocus = () => {
    inputRef.current!.focus();
  };
  return (
    <div
      onClick={handleFocus}
      className={`relative w-full rounded-2xl py-4 px-5 border-[1.5px] cursor-text flex items-center border-primary active:border-black duration-200 ${styling}`}
    >
      {icon ? <div className="mr-4">{icon}</div> : null}
      <input
        type={show !== true ? type : "text"}
        ref={inputRef}
        onChange={onChange}
        className={`focus:outline-none w-full ${
          type === "password" ? "mr-4" : ""
        }`}
        placeholder={placeholder}
        value={value}
      />
      {type === "password" ? (
        show === true ? (
          <AiOutlineEye
            className="cursor-pointer"
            size="30px"
            fill="#42A7C3"
            onClick={handleShowPassword}
          />
        ) : (
          <AiOutlineEyeInvisible
            className="cursor-pointer"
            size="30px"
            fill="#42A7C3"
            onClick={handleShowPassword}
          />
        )
      ) : null}
    </div>
  );
};

export default Input;
