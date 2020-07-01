import React from "react";
import { Button } from "@material-ui/core";
const NavButton = ({
  children,
  buttonClassName,
  buttonValue,
  buttonFunction,
}) => {
  return (
    <Button
      className={buttonClassName}
      value={buttonValue}
      onClick={buttonFunction}
    >
      {children}
    </Button>
  );
};

export default NavButton;
