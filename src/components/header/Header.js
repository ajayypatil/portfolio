import React from "react";
import "./header.css";
import Cta from "./Cta";
import ME from "../../assets/profile.jpg";
import HaederSocials from "./HaederSocials";
const Header = () => {
  return (
    <div>
      <header>
        <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Ajay Yadav</h1>
          <h5 className="text-light"> Frontend Developer</h5>
          <Cta />
          <HaederSocials />

          <div className="me">
            <img src={ME} alt="Me"></img>
          </div>
          <a href="#contact" className="scroll__down">
            Scroll Down
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
