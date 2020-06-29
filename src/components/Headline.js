import React from "react";
import styles from "./Headline.module.css";

const Headline = ({ text, headlineClass }) => {
  return (
    <>
      <h2 className={headlineClass}>{text}</h2>;
    </>
  );
};

export default Headline;
