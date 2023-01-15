import React from "react";
import "./contact.css";
import { VscGithubInverted } from "react-icons/vsc";
import { ImLinkedin } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { IoDocumentAttach } from "react-icons/io5";

const Contact = () => {
  return (
    <section id="contact">
      <div className="icons emulated-flex-gap">
        <div className="iconNames">
          <a
            href="https://github.com/Praveen-S22"
            target="_blank"
            rel="noopener noreferrer"
          >
            <VscGithubInverted size={80} style={{ color: "black" }} />
            <h3>
              <strong>GitHub</strong>
            </h3>
          </a>
        </div>
        <div className="iconNames">
          <a
            href="https://www.linkedin.com/in/praveen-selvaraju-408a3614b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImLinkedin size={80} style={{ color: "red" }} />
          </a>
          <h3>
            <strong>LinkedIn</strong>
          </h3>
        </div>
        <div className="iconNames">
          <a
            href="mailto:svpraveen16@outlook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdEmail size={80} style={{ color: "green" }} />
          </a>
          <h3>
            <strong>Email</strong>
          </h3>
        </div>
        <div className="iconNames">
          <a
            href="https://docs.google.com/document/d/1N-p4V_a2fVa2HOU70xfC6uCybRbTb6Uj/edit?usp=share_link&ouid=114633191572087791133&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoDocumentAttach size={80} style={{ color: "blue" }} />
          </a>
          <h3>
            <strong>Resume</strong>
          </h3>
        </div>
        <div className="iconNames">
          <a
            href="tel:8056048867"
            // target="_blank"
            rel="noopener noreferrer"
          >
            <BsFillTelephoneForwardFill
              size={80}
              style={{ color: "#8932a8" }}
            />
          </a>
          <h3>
            <strong>8056048867</strong>
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Contact;
