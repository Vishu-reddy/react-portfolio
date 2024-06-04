import React from "react";
import styles from "./Coding.module.css";
import { getImageUrl } from "../../utils";
export const Coding = () => {
  return (
    <section className={styles.container} id="coding">
      <div className={styles.headimgdiv}>
        <img
          className={styles.headimg}
          src={getImageUrl(
            "—Pngtree—developers are coding programs on_14867886.png"
          )}
          alt=""
        />
      </div>
      <div className={styles.content}>
        <h2 className={styles.heading}>Coding Profiles</h2>
        <div className={styles.profile}>
          <div className={styles.img}>
            <img
              className={styles.logos}
              src="https://upload.wikimedia.org/wikipedia/commons/8/8e/LeetCode_Logo_1.png?20190719232508"
              alt="leetcode logo"
            />
          </div>
          <div className={styles.text}>
            <h3 className={styles.title}>
              LeetCode
              <a
                className={styles.link}
                href="https://leetcode.com/u/vishwanath_reddy/"
                target="_blanck"
              >
                Visit
              </a>
            </h3>
            <p>sloved 124 problems with contest rating of 1491</p>
          </div>
        </div>
        <div className={styles.profile}>
          <div className={styles.img}>
            <img
              className={styles.logos}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/HackerRank_Icon-1000px.png/900px-HackerRank_Icon-1000px.png"
              alt="hacker rank logo"
            />
          </div>
          <div className={styles.text}>
            <h3 className={styles.title}>
              HackerRank
              <a
                className={styles.link}
                href="https://www.hackerrank.com/dashboard"
              >
                visit
              </a>
            </h3>
            <p>Acomplished 4 stars in java and python</p>
          </div>
        </div>
        <div className={styles.profile}>
          <div className={styles.img}>
            <img
              className={styles.logos}
              src="https://files.codingninjas.in/cnlogo-32511.png"
              alt="coding ninjas logo"
            />
          </div>
          <div className={styles.text}>
            <h3 className={styles.title}>
              Coding Ninjas
              <a
                className={styles.link}
                href="https://www.naukri.com/code360/profile/vishwanathreddy"
              >
                visit
              </a>
            </h3>

            <p>solved 11 problem 9 easy and 2 moderate</p>
          </div>
        </div>
      </div>
    </section>
  );
};
