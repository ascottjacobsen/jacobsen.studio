import React from "react";
import styles from "./SectionContainer.module.css";
import InnerWrap from "./InnerWrap";

const SectionContainer = ({ children, sectionTitle, sectionDescription }) => {
  return (
    <div className={styles.section_container}>
      <div className={styles.section_header_wrapper}>
        <InnerWrap>
          <div className={styles.section_header}>
            <h2>{sectionTitle}</h2>
            <p>{sectionDescription}</p>
          </div>
        </InnerWrap>
      </div>{" "}
      <div className={styles.app_container}>{children}</div>
    </div>
  );
};

export default SectionContainer;
