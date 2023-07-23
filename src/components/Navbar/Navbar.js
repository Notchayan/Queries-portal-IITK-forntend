import React from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.headerLeft}>
          <img className={styles.headerLogo} src={"https://www.iitk.ac.in/new/images/page-images/logo/redlogo.jpg"} alt="logo" />
          <h1 className={styles.headerTitle}>Queries IIT Kanpur</h1>
        </div>
        <div className={styles.headerSearch}>
          <input className={styles.searchInput} type="text" placeholder="Search Query or q/Community" />
          <button className={styles.searchButton}>Search</button>
        </div>
        <div className={styles.headerRight}>
          <button className={styles.headerButton}>Log In</button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
