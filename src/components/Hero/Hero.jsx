import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi,I'm vishu</h1>
        <p className={styles.description}>
          I'm a Web developer,Transforming ideas into immersive digital
          experiences, I am a seasoned full stack web developer specializing in
          the MERN stack, delivering robust and scalable web applications that
          push the boundaries of innovation.
        </p>
        <a
          href="mailto:saduvishwanath95@gmail.com"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
