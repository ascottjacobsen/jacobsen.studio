import React from "react";
import styles from "./Layout.module.css";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <NavBar></NavBar>

      {children}
    </div>
  );
};

export default Layout;
