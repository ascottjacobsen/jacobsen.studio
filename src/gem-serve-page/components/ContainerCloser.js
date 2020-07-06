import React from "react";
import { ButtonBase } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  closeRow: {
    margin: 0,
  },
  closeButton: {
    color: "#333333",
    borderRadius: "100%",
    width: 24,
  },
});

const ContainerCloser = (props) => {
  const { closeFunctions } = props;
  const classes = useStyles();
  return (
    <div className={classes.closeRow}>
      <ButtonBase
        className={classes.closeButton}
        onClick={(e) => {
          closeFunctions();
        }}
      >
        <CloseIcon />
      </ButtonBase>
    </div>
  );
};

export default ContainerCloser;
