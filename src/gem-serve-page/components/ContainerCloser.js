import React from "react";
import { FaTimes } from "react-icons/fa";

const ContainerCloser = props => {
  const { closeFunctions } = props;
  return (
    <div className="serveOp serveOp-close-container-row">
      <button
        className="serveOp serveOp-close-button"
        onClick={e => {
          closeFunctions();
        }}
      >
        <FaTimes />
      </button>
    </div>
  );
};

export default ContainerCloser;
