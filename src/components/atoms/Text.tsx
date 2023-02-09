import React, { FC } from "react";

interface Props {
  styling: string;
  children: React.ReactNode;
}
const Text: FC<Props> = ({ styling, children }) => {
  return <div className={`${styling}`}>{children}</div>;
};

export default Text;
