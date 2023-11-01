import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { FiBook } from "react-icons/fi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BiMessageAltDetail } from "react-icons/bi";
const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        className={activeNav === "#" ? "active" : ""}
        onClick={() => {
          setActiveNav("#");
        }}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={activeNav === "about" ? "active" : ""}
        onClick={() => {
          setActiveNav("about");
        }}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        className={activeNav === "experience" ? "active" : ""}
        onClick={() => {
          setActiveNav("experience");
        }}
      >
        <FiBook />
      </a>
      <a
        href="#portfolio"
        className={activeNav === "portfolio" ? "active" : ""}
        onClick={() => {
          setActiveNav("portfolio");
        }}
      >
        <AiOutlineFundProjectionScreen />
      </a>
      <a
        href="#contact"
        className={activeNav === "contact" ? "active" : ""}
        onClick={() => {
          setActiveNav("contact");
        }}
      >
        <BiMessageAltDetail />
      </a>
    </nav>
  );
};

export default Nav;
