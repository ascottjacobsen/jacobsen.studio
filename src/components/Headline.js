import React from "react";
import styles from "./Headline.module.css";

const Headline = ({ text }) => {
  return <p className={styles.headline}>{text}</p>;
};

export default Headline;
