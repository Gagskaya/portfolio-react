import React from "react";
import Anime from "react-anime";
import CustomScroll from "react-custom-scroll";
import BackToHomeBtn from "./BackToHomeBtn";
import mail from "../assets/mail.svg";
import github from "../assets/github.svg";
import twitter from "../assets/twitter.svg";
import medium from "../assets/medium.svg";
import linkedin from "../assets/linkedin.svg";
import codepen from "../assets/codepen.svg";
import quora from "../assets/quora.svg";
import facebook from "../assets/facebook.svg";
import "../styles/ContactsPage.css";

const ContactsPage = (props) => {
  return (
    <Anime
      easing="easeOutCubic"
      opacity={[0, 1]}
      translateY={-30}
      duration={400}
      delay={300}
    >
      <div className="contacts-page">
        <BackToHomeBtn handleClick={props.returnBtn} />
        <Anime
          easing="easeOutCubic"
          left={[-350, -130]}
          duration={500}
          delay={800}
        >
          <p className="page-tag">Контакты</p>
        </Anime>
        <div className="page-content">
          <h1>Связаться со мной</h1>
          <div className="link-list">
            <p>
              Email :{" "}
              <a style={{ color: "#fff" }} href="mailto:alisxan006@mail.ru">
                alisxan006@mail.ru
              </a>
            </p>
            <p>Telegram : t.me/gagskaya</p>
            <p>
              Phone :{" "}
              <a style={{ color: "#fff" }} href="tel:89888085272">
                89888085272
              </a>
            </p>
          </div>
        </div>
      </div>
    </Anime>
  );
};

export default ContactsPage;
