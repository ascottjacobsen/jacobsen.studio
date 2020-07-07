import React from "react";
import Avatar from "./Avatar";
import Headline from "./Headline";
import styles from "./HeadlineBox.module.css";
import HeadlineText from "./HeadlineText";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { ButtonBase } from "@material-ui/core";
import InnerWrap from "./InnerWrap";

const HeadlineBox = () => {
  return (
    <div className={styles.headline_container}>
      <InnerWrap>
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
          <ButtonBase className={styles.down_arrow}>
            <KeyboardArrowDownIcon fontSize="large" />
          </ButtonBase>
        </div>
      </InnerWrap>
    </div>
  );
};

export default HeadlineBox;
