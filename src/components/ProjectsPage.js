import React from "react";
import Anime from "react-anime";
import CustomScroll from "react-custom-scroll";
import BackToHomeBtn from "./BackToHomeBtn";
import GlassEmoji from "../assets/GlassEmoji";
import { BtnIcon } from "./BackToHomeBtn";
import { projectsData } from "../data/data";
import todo from "../assets/img/todo.png";
import "../styles/ProjectsPage.css";
import "../styles/customScroll.css";

const ProjectsList = (props) => {
  return props.projects.map((project, index) => (
    <div className="project-item" key={index}>
      <div className="project-heading">
        <h2>{project.name}</h2>
        <p>{project.heading}</p>
      </div>
      <div className="thumb">
        <img src={project.thumb} alt="Project Preview" />
        {/* <img src={todo} alt="" /> */}
      </div>
      <div className="project-links">
        {project.links.live && (
          <a className="link" target="_blank" href={project.links.live}>
            Live demo
          </a>
        )}
        {project.links.repo && (
          <a className="link" target="_blank" href={project.links.repo}>
            Code on GitHub
          </a>
        )}
      </div>
      <div className="project-details">
        <p> Использованные скиллы : {project.details}</p>
      </div>
    </div>
  ));
};

const ProjectsPage = (props) => {
  return (
    <Anime
      easing="easeOutCubic"
      opacity={[0, 1]}
      translateY={-30}
      duration={400}
      delay={300}
    >
      <div className="projects-page">
        <BackToHomeBtn handleClick={props.returnBtn} />
        <Anime
          easing="easeOutCubic"
          left={[-350, -120]}
          duration={500}
          delay={800}
        >
          <p className="page-tag">Проекты</p>
        </Anime>
        <CustomScroll heightRelativeToParent="calc(100% - 20px)">
          <div className="page-content">
            <h1>
              Мои работы <GlassEmoji />
            </h1>
            <p className="page-intro">
              Мне очень нравится использовать новые инструменты и технологии для
              создания инструментов/сайтов которые облегчают чью-то жизнь. Ниже
              приведены некоторые из моих проектов, над которыми мне было очень
              интересно работать
            </p>
            <div className="projects-container">
              <ProjectsList projects={projectsData} />
            </div>
          </div>
        </CustomScroll>
      </div>
    </Anime>
  );
};

export default ProjectsPage;
