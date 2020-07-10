import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { IconContext } from "react-icons";

const useStyles = makeStyles({
  button: {
    borderRadius: "100%",
    minWidth: "0",
    padding: "10px",
    boxShadow: "inset 0px 0px 14px -10px #333",
  },
  highlight: {
    position: "absolute",
    height: "100%",
    width: "100%",
    borderRadius: "100%",
    backgroundColor: "lightblue",
    zIndex: -1,
  },
});

const NavButton = ({ children, activeButton, buttonValue, buttonFunction }) => {
  const classes = useStyles();

  const handleClick = (e) => {
    buttonFunction(e, buttonValue);
  };

  return (
    <Button
      className={classes.button}
      value={buttonValue}
      onClick={handleClick}
    >
      <IconContext.Provider
        value={{ size: "1.5em", attr: { pointerEvents: "none" } }}
      >
        {children}
      </IconContext.Provider>
    </Button>
  );
};

export default NavButton;
