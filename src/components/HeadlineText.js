import React from "react";
import styles from "./Headline.module.css";

const HeadlineText = ({ text, headlineTextClass }) => {
  return (
    <>
      <p className={headlineTextClass}>{text}</p>
    </>
  );
};

export default HeadlineText;
