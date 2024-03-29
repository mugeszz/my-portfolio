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
        <a href="https://drive.google.com/file/d/1OFXpayO7BkuO0rv71IF-25h0nmWOL_IR/view?usp=sharing" target="_blank" className={styles.contactBtn}>
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
