import React from "react";
import { SiWhatsapp } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { GrLinkedin } from "react-icons/gr";
import { FaInstagramSquare } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  return (
    <div>
      <div className="contact-bg"></div>
      <div className="contact-text">
        <div>
          <h3 className="text-slate-100 text-2xl text-center font-semibold font-serif pt-8 pb-4"
          style={{textShadow:"2px 2px 5px black"}}>
            Shubham Tiwari
          </h3>
          <h1 className="text-slate-100 text-4xl text-center font-semibold font-serif py-5"
           style={{textShadow:"2px 2px 5px black"}}>
         
            Web Developer
          </h1>
        </div>
        <div className="contacts">
          <a
            href="https://wa.me/+919627253516"
            rel="noreferrer"
            target="_blank"
          >
            <SiWhatsapp className="contactIcons" />
          </a>
          <a
            href="https://github.com/ShubhamTiwari-909/ShubhamTiwari-909"
            rel="noreferrer"
            target="_blank"
          >
            <SiGithub className="contactIcons" />
          </a>
          <a
            href="https://www.linkedin.com/in/shubham-tiwari-b7544b193/"
            rel="noreferrer"
            target="_blank"
          >
            <GrLinkedin className="contactIcons" />
          </a>
          <a
            href="https://www.instagram.com/s_h.u_b.h_a.m_2k99/"
            rel="noreferrer"
            target="_blank"
          >
            <FaInstagramSquare className="contactIcons" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
