import React from "react";
import "../styles/ProjectsCard.css";
import Anime from "react-anime";

function ProjectCard(props) {
  return (
    <Anime
      easing="easeInSine"
      scale={props.scaleArr}
      opacity={[0, 1]}
      delay={500}
      duration={300}
    >
      <div
        className="card projects-card"
        onClick={props.onClick("projects")}
        onMouseEnter={props.MouseEnter("projects")}
        onMouseLeave={props.MouseLeave("projects")}
      >
        <h2>My projects</h2>
        <p>Take a look at some of my projects</p>
      </div>
    </Anime>
  );
}

export default ProjectCard;
