import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
{/*       <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
        style={{height:"200px", width:"300px"}}
      /> */}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a href={demo} target="_blank" className={styles.link}>
          Demo
        </a>
        <a href={source} target="_blank" className={styles.link}>
          Source
        </a>
      </div>
    </div>
  );
};



// {
//   "title": "Booking UI",
//   "imageSrc": "projects/booked.jpg",
//   "description": "The app Which I created for my final year project,Just UI",
//   "skills": ["React", "Javascript"],
//   "demo": "https://meek-truffle-52e8af.netlify.app/home/",
//   "source": "https://github.com/Mugesz/frontend/tree/main"
// },

// {
//   "title": "Shopping cart",
//   "imageSrc": "projects/shopping.jpg",
//   "description": "Creating app is giving us joy , created for my career purpose. ",
//   "skills": ["React", "redux"],
//   "demo": "https://main--loquacious-brigadeiros-1ac87a.netlify.app/",
//   "source": "https://github.com/Mugesz/react-eighttask"
// },
