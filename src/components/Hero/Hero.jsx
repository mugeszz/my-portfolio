import React from "react";
import images from '../../../images/profile.png'
import styles from "./Hero.module.css";


export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Mugesh Kanna</h1>
        <p className={styles.description}>
         I’m a Web Developer with 1 year of experience, specializing in
          Webflow. I’ve built 10+ responsive, SEO-friendly websites, turning
          Figma designs into clean, high-performing sites. I also have working
          knowledge of React and Node.js, expanding my skills in full-stack
          development.
        </p>
        <a href="https://drive.google.com/file/d/1MgMw_InyMyBtTXsSPHGl_qNoJ54lQ71o/view?usp=sharing" target="_blank" className={styles.contactBtn}>
         View Cv
        </a>
      </div>
      <img
        src={images}
        alt="Hero image of me"
        className={styles.heroImg}
        height='350px'
        width='350px'
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
      
    </section>
  );
};
