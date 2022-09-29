import React from "react";
import Anime from "react-anime";
import CustomScroll from "react-custom-scroll";
import BackToHomeBtn from "./BackToHomeBtn";
import "../styles/customScroll.css";
import "../styles/AboutPage.css";

const AboutPage = (props) => {
  return (
    <Anime
      easing="easeOutCubic"
      opacity={[0, 1]}
      translateY={-30}
      duration={400}
      delay={300}
    >
      <div className="about-page">
        <BackToHomeBtn handleClick={props.returnBtn} />
        <Anime
          easing="easeOutCubic"
          left={[-350, -150]}
          duration={500}
          delay={800}
        >
          <p className="page-tag">About me</p>
        </Anime>
        <CustomScroll heightRelativeToParent="calc(100% - 20px)">
          <div className="page-content">
            <p>
              Hello! <span className="hand-wave">👋</span>
            </p>
            <h1>My name is Iliskhan Aldaganov</h1>
            <p>I am 24 years old and i am a frontend developer</p>
            <div className="skills">
              <h3>Skills</h3>
              <ul>
                <li>
                  <strong>JavaScript</strong>
                </li>
                <li>
                  <strong>TypeScript</strong>
                </li>
                <li>
                  <strong>React</strong>
                </li>
                <li>
                  <strong>Redux</strong>
                </li>
                <li>
                  <strong>Vue</strong>
                </li>
                <li>
                  <strong>Vuex</strong>
                </li>
                <li>
                  <strong>React Native</strong>
                </li>
                <li>
                  <strong>Node.js</strong>
                </li>
                <li>
                  <strong>MySql</strong>
                </li>
                <li>
                  <strong>GraphQL</strong>
                </li>
                <li>
                  <strong>HTML</strong>
                </li>
                <li>
                  <strong>CSS</strong>
                </li>
                <li>
                  <strong>SASS/SCSS/CSS-in-js</strong>
                </li>
                <li>
                  <strong>
                    Bootstrap 3/4,Material-Ui,Ant Design,React Semantic-Ui
                  </strong>
                </li>
                <li>Wordpress</li>
                <li>Photoshop/Figma/Avocode/Illustrator</li>
                <li>Gulp/Webpack</li>
                <li>BEM</li>
                <li>SVG/CSS-animation</li>
                <li>Git/GitHub/Bitbucket/Gitlab</li>
                <li>Jira/Trello</li>
              </ul>
            </div>
          </div>
        </CustomScroll>
      </div>
    </Anime>
  );
};

export default AboutPage;
