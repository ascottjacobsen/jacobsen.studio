import React from "react";

const HeadlineText = ({ text, headlineTextClass }) => {
  return (
    <>
      <p className={headlineTextClass}>{text}</p>
    </>
  );
};

export default HeadlineText;
