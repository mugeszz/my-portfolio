import React from "react";
import images from '../../../images/profile.png'
import styles from "./Hero.module.css";


export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Mugesh Kanna</h1>
        <p className={styles.description}>
          I'm a full-stack developer With React and
          NodeJS.Feel free to Connect 
        </p>
        <a href="https://drive.google.com/file/d/1LVGiTXWoMQ9Vj9aaQqdG6TgFzEP0Devx/view" target="_blank" className={styles.contactBtn}>
         View Cv
        </a>
      </div>
      <img
        src={images}
        alt="Hero image of me"
        className={styles.heroImg}
        height='500px'
        width='100px'
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
