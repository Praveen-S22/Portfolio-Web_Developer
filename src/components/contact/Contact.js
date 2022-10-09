import React from "react";
import "./contact.css";
import { VscGithubInverted } from "react-icons/vsc";
import { ImLinkedin } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { IoDocumentAttach } from "react-icons/io5";
import Resume from "../../assets/FSD resume.docx";

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
            <VscGithubInverted size={20} />
            <h6>GitHub</h6>
          </a>
        </div>
        <div className="iconNames">
          <a
            href="https://www.linkedin.com/in/praveen-selvaraju-408a3614b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImLinkedin size={20} />
          </a>
          <h6>LinkedIn</h6>
        </div>
        <div className="iconNames">
          <a
            href="mailto:svpraveen16@outlook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdEmail size={20} />
          </a>
          <h6>Email</h6>
        </div>
        <div className="iconNames">
          <a href={Resume} target="_blank" rel="noopener noreferrer">
            <IoDocumentAttach size={20} />
          </a>
          <h6>Resume</h6>
        </div>
        <div className="iconNames">
          <a
            href="tel:8056048867"
            // target="_blank"
            rel="noopener noreferrer"
          >
            <BsFillTelephoneForwardFill size={20} />
          </a>
          <h6>8056048867</h6>
        </div>
      </div>
    </section>
  );
};

export default Contact;
