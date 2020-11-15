import React from "react";

import styles from "./sidebar.module.css";

const Sidebar = ({ children }) => {
  return <aside className={styles.root}>{children}</aside>;
};

export default Sidebar;
