import React from "react";
import { ImSpinner8 } from "react-icons/im";

const Loader = () => {
  return (
    <div className="z-30 fixed bg-dark opacity-20 top-0 left-0 h-screen w-full flex items-center justify-center">
      <ImSpinner8 className="animate-spin" size="50" />
    </div>
  );
};

export default Loader;
