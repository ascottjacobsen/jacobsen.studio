import React from "react";
import styles from "./InnerWrap.module.css";

const InnerWrap = ({ children }) => {
  return <div className={styles.inner_wrap}>{children}</div>;
};

export default InnerWrap;
