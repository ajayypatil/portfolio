import React from "react";
import "./services.css";
import {BsCheckLg} from 'react-icons/bs'
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li> <BsCheckLg className="Service__list-icon"/>
            <p>lorem, lorem ipsum dolor sit amet constriunents</p>
            </li>
            <li> <BsCheckLg className="Service__list-icon"/>
            <p>lorem, lorem ipsum dolor sit amet constriunents</p>
            </li>
            <li> <BsCheckLg className="Service__list-icon"/>
            <p>lorem, lorem ipsum dolor sit amet constriunents</p>
            </li>
            <li> <BsCheckLg className="Service__list-icon"/>
            <p>lorem, lorem ipsum dolor sit amet constriunents</p>
            </li>
            <li> <BsCheckLg className="Service__list-icon"/>
            <p>lorem, lorem ipsum dolor sit amet constriunents</p>
            </li>
            
          </ul>
        </article>
        {/* End of UX/UI */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li> <BsCheckLg className="Service__list-icon"/>
            <p>lorem, lorem ipsum dolor sit amet constriunents</p>
            </li>
            <li> <BsCheckLg className="Service__list-icon"/>
            <p>lorem, lorem ipsum dolor sit amet constriunents</p>
            </li>
            <li> <BsCheckLg className="Service__list-icon"/>
            <p>lorem, lorem ipsum dolor sit amet constriunents</p>
            </li>
            <li> <BsCheckLg className="Service__list-icon"/>
            <p>lorem, lorem ipsum dolor sit amet constriunents</p>
            </li>
            <li> <BsCheckLg className="Service__list-icon"/>
            <p>lorem, lorem ipsum dolor sit amet constriunents</p>
            </li>
            
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
