import React from "react";
import "./header.css";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiHeroku } from "react-icons/si";
import Contact from "../contact/Contact";

const Header = () => {
  return (
    <>
      <header>
        <div className="backgroundImage">
          <div id="home" className="headerContainer">
            <h1 data-aos="flip-up">
              <b>Full-Stack MERN Developer</b>
            </h1>
            <h3 className="largeFont" data-aos="zoom-in">
              PRAVEEN S
            </h3>
            <br />
            <Contact />
          </div>
        </div>
      </header>

      <div className="badgesContainer">
        <div className="badgeCard">
          <article class="badge blue">
            <div class="rounded">
              <FaReact size={50} />
            </div>
          </article>
          <h3>React</h3>
        </div>
        <div className="badgeCard">
          <article class="badge green">
            <div class="rounded">
              <SiMongodb size={50} />
            </div>
          </article>
          <h3>MongoDB</h3>
        </div>
        <div className="badgeCard">
          <article class="badge gainsboro">
            <div class="rounded">
              <AiFillHtml5 size={50} />
            </div>
          </article>
          <h3>HTML5</h3>
        </div>
        <div className="badgeCard">
          <article class="badge crimson">
            <div class="rounded">
              <IoLogoCss3 size={50} />
            </div>
          </article>
          <h3>CSS3</h3>
        </div>
        <div className="badgeCard">
          <article class="badge orange">
            <div class="rounded">
              <SiJavascript size={50} />
            </div>
          </article>
          <h3>JavaScript</h3>
        </div>
        <div className="badgeCard">
          <article class="badge green">
            <div class="rounded">
              <FaNode size={50} />
            </div>
          </article>
          <h3>NodeJS</h3>
        </div>
        <div className="badgeCard">
          <article class="badge purple">
            <div class="rounded">
              <SiHeroku size={50} />
            </div>
          </article>
          <h3>Heroku</h3>
        </div>
      </div>
    </>
  );
};

export default Header;
