import React from "react";
import Avatar from "./Avatar";
import Headline from "./Headline";
import styles from "./HeadlineBox.module.css";

const HeadlineBox = () => {
  return (
    <div className={styles.headline_box}>
      <Avatar
        imageSource="/images/alex-avatar.jpg"
        altText="Alex's avatar image"
      />
      <Headline text="Hello world. My name is alex, and I'm a junior web developer and designer specializing in React.js. Here's some of my work." />
    </div>
  );
};

export default HeadlineBox;
