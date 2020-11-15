import React from "react";

import styles from "./main.module.css";

const Main = props => {
  const { state } = props;

  return (
    <main className={styles.root}>
      main
      <div className={styles.canvas} style={{ alignItems: state.alignItems }}>
        <div className={styles.flexItem}></div>
        <div className={styles.flexItem}></div>
        <div className={styles.flexItem}></div>
      </div>
    </main>
  );
};

export default Main;
