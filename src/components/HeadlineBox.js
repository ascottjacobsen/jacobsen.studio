import React from "react";
import Avatar from "./Avatar";
import Headline from "./Headline";
import styles from "./HeadlineBox.module.css";
import HeadlineText from "./HeadlineText";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

const HeadlineBox = () => {
  return (
    <div className={styles.headline_box}>
      <Avatar
        imageSource="/images/alex-avatar.jpg"
        altText="Alex's avatar image"
      />
      <Headline text="Hello!" headlineClass={styles.headline} />
      <HeadlineText
        text="My name is Alex, and I’m a web developer based in Austin, TX. Here you’ll find some of the things I’ve been working on."
        headlineTextClass={styles.headline_text}
      />
      <KeyboardArrowDownIcon className={styles.down_arrow} />
    </div>
  );
};

export default HeadlineBox;
