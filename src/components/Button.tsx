
import React, { ReactNode, useCallback, useMemo } from "react";

interface Props {
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}

const Button = ({ handleClick, children }: Props) => {
  console.log("Button Component Renders - ", { children });
  return <button onClick={handleClick}>{children}</button>;
};

export default Button;
