import React from "react";
import styles from "./NavBar.module.css";
import MenuIcon from "@material-ui/icons/Menu";

const NavBar = () => {
  return (
    <div className={styles.nav_bar}>
      <MenuIcon fontSize="large" />
    </div>
  );
};

export default NavBar;
