import React from "react";
import "./projects.css";
import { RiComputerLine } from "react-icons/ri";
import Project4 from "../../assets/project4.png";
import Tic from "../../assets/Tic.png";
import Doctor from "../../assets/doctor.jpg";
import FRIENDER from "../../assets/Friender.png";

function Projects() {
  return (
    <section id="projects">
      <h1 className="career" data-aos="fade-left" style={{ fontSize: "70px" }}>
        CAREER OBJECTIVE
      </h1>

      <p style={{ fontSize: "30px" }}>
        &emsp;&emsp;&emsp; A strong individual with a zeal to learn and
        implement new technologies. Ready to utilize my skills and passionate to
        follow the mission of a company. A practical thinker who tries to come
        up with feasible solutions and to convert complex business problems into
        awesome scalable solutions.
      </p>
      <br />
      <br />
      <h1 className="work" data-aos="fade-left" style={{ fontSize: "70px" }}>
        RECENT WORK
      </h1>
      <div className="projectsContainer">
        {/* FULL STACK REACT Gmail APPLICATION */}
        <div
          className=" card div"
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-delay="300"
        >
          <div className="cardHead">
            <div className="imageContainer">
              <img src={FRIENDER} alt="Project Management Application"></img>
            </div>
            <div className="projectText">
              <div className="text">
                <h4 className="center">
                  Full-Stack React Gmail Clone Application
                </h4>
                <br />
                <h6 className="center">
                  React - HTML/CSS - MongoDB - ExpressJS - Node -Mongoose -
                  FakerJS
                </h6>
                <br />
                <h6 className="center">
                  Experience with MERN stack development (MongoDB, Express,
                  React and Node).
                  <br />
                  <br />
                  Experience in ReactJS framework and knowledge in developing
                  single-page applications (SPA).
                  <br />
                  <br />
                  Familiar with creating custom reusable React Components.
                </h6>
              </div>
              <div className="cardLinks">
                <button className="btn-grad">
                  <a
                    href="https://github.com/Praveen-S22/Gmail-clone-Frontend"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <RiComputerLine size={15} />
                    <h6>Frontend code</h6>
                  </a>
                </button>
                <button className="btn-grad">
                  <a
                    href="https://github.com/Praveen-S22/Gmail-Clone-Backend"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <RiComputerLine size={15} />
                    <h6>Backend code</h6>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* FULL STACK Web scrapping APPLICATION */}
        <div
          className=" card div"
          data-aos="fade-right"
          data-aos-duration="800"
          data-aos-delay="300"
        >
          <div className="cardHead">
            <div className="imageContainer">
              <img src={Project4} alt="Project Management Application"></img>
            </div>
            <div className="projectText">
              <div className="text">
                <h4 className="center">Full-Stack Web scrapping Application</h4>
                <br />
                <h6 className="center">
                  Handlebars - HTML/CSS - JavaScript - ExpressJS - MongoDB -
                  xpath -Regex- Bootstrap
                </h6>
                <br />
                <h6 className="center">
                  Designed and built a full-stack Web scrapping Application
                  created a server-side API, user authentication and connected
                  Database.
                </h6>
              </div>
              <div className="cardLinks">
                <button className="btn-grad">
                  <a
                    href="https://github.com/Praveen-S22/Web-Scraping-App-Frontend"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <RiComputerLine size={15} />
                    <h6>Frontend code</h6>
                  </a>
                </button>
                <button className="btn-grad">
                  <a
                    href="https://github.com/Praveen-S22/Web-Scraping-App-backend"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <RiComputerLine size={15} />
                    <h6>Backend code</h6>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Doctors Appointment APPLICATION */}
        <div
          className=" card div"
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-delay="300"
        >
          <div className="cardHead">
            <div className="imageContainer">
              <img src={Doctor} alt="Project Management Application"></img>
            </div>
            <div className="projectText">
              <div className="text">
                <h4 className="center">Doctor Appointment APP</h4>
                <br />
                <h6 className="center">
                  Handlebars - HTML/CSS - JavaScript - ExpressJS - MongoDB -
                  xpath -Regex- Bootstrap
                </h6>
                <br />
                <h6 className="center">
                  Designed and built a full-stack Web scrapping Application
                  created a server-side API, user authentication and connected
                  Database.
                </h6>
              </div>
              <div className="cardLinks">
                <button className="btn-grad">
                  <a
                    href="https://github.com/Praveen-S22/Doctors-Appointment-Frontend"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <RiComputerLine size={15} />
                    <h6>Frontend code</h6>
                  </a>
                </button>
                <button className="btn-grad">
                  <a
                    href="https://github.com/Praveen-S22/Doctors-Appointment-Backend"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <RiComputerLine size={15} />
                    <h6>Backend code</h6>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* FULL STACK Web scrapping APPLICATION */}
        <div
          className=" card div"
          data-aos="fade-right"
          data-aos-duration="800"
          data-aos-delay="300"
        >
          <div className="cardHead">
            <div className="imageContainer">
              <img src={Tic} alt="Project Management Application"></img>
            </div>
            <div className="projectText">
              <div className="text">
                <h4 className="center">Tic-Tac-Toe</h4>
                <br />
                <h6 className="center">
                  Handlebars - HTML/CSS - JavaScript - ExpressJS - MongoDB -
                  xpath -Regex- Bootstrap
                </h6>
                <br />
                <h6 className="center">
                  Designed and built a full-stack Web scrapping Application
                  created a server-side API, user authentication and connected
                  Database.
                </h6>
              </div>
              <div className="cardLinks">
                <button className="btn-grad">
                  <a
                    href="https://github.com/Praveen-S22/Game-Frontend"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <RiComputerLine size={15} />
                    <h6>Frontend code</h6>
                  </a>
                </button>
                <button className="btn-grad">
                  <a
                    href="https://github.com/Praveen-S22/Game-Backend"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <RiComputerLine size={15} />
                    <h6>Backend code</h6>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
