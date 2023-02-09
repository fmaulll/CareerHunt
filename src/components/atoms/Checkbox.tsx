import React, { FC } from "react";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";

interface Props {
  checked: string;
  handleClick: () => void;
}

const Checkbox: FC<Props> = ({ checked, handleClick }) => {
  return (
    <div className="cursor-pointer" onClick={handleClick}>
      {checked ? (
        <ImCheckboxChecked size="30" fill="#42A7C3" />
      ) : (
        <ImCheckboxUnchecked size="30" fill="#42A7C3" />
      )}
    </div>
  );
};

export default Checkbox;
