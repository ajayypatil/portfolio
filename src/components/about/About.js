import React from "react";
import "./about.css";
import ME2 from "../../assets/techie.avif";
import { FaAward } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h1>About Me</h1>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME2} alt="me"></img>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2.5+ Years Working</small>
            </article>

            {/* <article className="about__card">
              <AiOutlineFundProjectionScreen className="about__icon" />
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article> */}
          </div>
          <p>
            Currently, I am working as a software engineer at TCS having a role
            of ReactJs Frontend developer. My strengths are Willingness to
            learn, Dedicated towards my work, Always ready for a new challenge
            with a positive attitude.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
