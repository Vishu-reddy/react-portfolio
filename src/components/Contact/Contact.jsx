import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer className={styles.container} id="contact">
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel Free to reach out</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="" />
          <a traget="_blank" href="saduvishwanath95@gmail.com">
            saduvishwanath95@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="" />
          <a traget="_blank" href="https://github.com/Vishu-reddy">
            Vishu-reddy
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="" />
          <a
            traget="_blanck"
            href="https://www.linkedin.com/in/vishwanath-reddy-780947256/"
          >
            Vishwanath Reddy
          </a>
        </li>
      </ul>
    </footer>
  );
};
