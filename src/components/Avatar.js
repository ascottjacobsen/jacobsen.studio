import React from "react";
import styles from "./Avatar.module.css";

const Avatar = ({ imageSource, altText }) => {
  return (
    <img src={imageSource} alt={altText} className={styles.avatar_image} />
  );
};

export default Avatar;
