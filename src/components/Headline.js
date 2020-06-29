import React from "react";

const Headline = ({ text, headlineClass }) => {
  return <h2 className={headlineClass}>{text}</h2>;
};

export default Headline;
