import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className="section">
      <div className={`${styles.container} container`}>
        <p className={styles["open-text"]}>Questions? Contact us.</p>
        <div className={styles.links}>
          <ul>
            <li>FAQ</li>
            <li>Media Center</li>
            <li>Ways to Watch</li>
            <li>Cookie Preferences</li>
            <li>Speed Test</li>
          </ul>
          <ul>
            <li>Help Center</li>
            <li>Investor Relations</li>
            <li>Terms of Use</li>
            <li>Corporate Information</li>
            <li>Legal Notices</li>
          </ul>
          <ul>
            <li>Account</li>
            <li>Jobs</li>
            <li>Privacy</li>
            <li>Contact Us</li>
            <li>Only on Netflix</li>
          </ul>
        </div>

        <select>
          <option>English</option>
        </select>
        <p className={styles["small-text"]}>Netflix Nigeria</p>
      </div>
    </div>
  );
};

export default Footer;
