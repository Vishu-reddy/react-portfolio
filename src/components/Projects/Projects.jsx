import React from "react";
import styles from "./Projects.module.css";
import { getImageUrl } from "../../utils";
import "bootstrap";
export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.imgdiv}>
            <img
              src={getImageUrl(
                "projects/WhatsApp Image 2024-06-04 at 10.54.57_26255f63.jpg"
              )}
              alt="code image"
              className={styles.img}
            />
          </div>
          <div className={styles.description}>
            <h4>Simon Game</h4>
            <p>A memory game popularly known as Simon says</p>
          </div>
          <div className={styles.tech}>
            <h5 className="btn btn-primary">javascript</h5>
            <h5 className="btn btn-primary">jquery</h5>
          </div>
          <div className={styles.repobtn}>
            <a
              href="https://github.com/Vishu-reddy/Simon-game"
              target="_blanck"
            >
              Repository
            </a>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.imgdiv}>
            <img
              src={getImageUrl("projects/project.png")}
              alt="code image"
              className={styles.img}
            />
          </div>
          <div className={styles.description}>
            <h4>Todo List</h4>
            <p>a personaliszed todo list to maintain all tasks</p>
          </div>
          <div className={styles.tech}>
            <h5 className="btn btn-primary">javascript</h5>
            <h5 className="btn btn-primary">Ejs</h5>
          </div>
          <div className={styles.repobtn}>
            <a href="https://github.com/Vishu-reddy/Todo-List" target="_blanck">
              Repository
            </a>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.imgdiv}>
            <img
              src={getImageUrl("projects/project.png")}
              alt="code image"
              className={styles.img}
            />
          </div>
          <div className={styles.description}>
            <h4>Personal bloging site</h4>
            <p>a personal blog posting wesite with dynamic routing</p>
          </div>
          <div className={styles.tech}>
            <h5 className="btn btn-primary">javascript</h5>
            <h5 className="btn btn-primary">Ejs</h5>
            <h5 className="btn btn-primary">Mongoose</h5>
            <h5 className="btn btn-primary">Mongo atlas</h5>
          </div>
          <div className={styles.repobtn}>
            <a
              href="https://github.com/Vishu-reddy/personal-blog-"
              target="_blanck"
            >
              Repository
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
