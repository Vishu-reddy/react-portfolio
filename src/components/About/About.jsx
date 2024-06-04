import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="me sitting with a laptop"
          className={styles.aboutImg}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="cursor" />
            <div className={styles.aboutText}>
              <h3>Frontend Developer</h3>
              <p>
                Iam a Frontend Developer with experience in building responsive
                and user friendly sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="cursor" />
            <div className={styles.aboutText}>
              <h3>Backend Developer</h3>
              <p>
                Iam a Backend developer with experience in <b>MERN</b> stack
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="cursor" />
            <div className={styles.aboutText}>
              <h3>Ui Designer</h3>
              <p>I have created multiple user friendly pages and websites</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
