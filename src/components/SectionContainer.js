import React from "react";
import styles from "./SectionContainer.module.css";

const SectionContainer = ({ children, sectionTitle, sectionDescription }) => {
  return (
    <div className={styles.section_container}>
      <div className={styles.section_header}>
        <h2>{sectionTitle}</h2>
        <p>{sectionDescription}</p>
      </div>
      <div className={styles.section_container}>{children}</div>
    </div>
  );
};

export default SectionContainer;
