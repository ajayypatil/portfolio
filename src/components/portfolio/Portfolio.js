import React from "react";
import "./portfolio.css";
import netflix from "../../assets/Netflix.png";
import youtube from "../../assets/Youtube.png";
import tictactoe from '../../assets/tic-tac-toe.png'
import weather from '../../assets/weather-app.png'
import passwordGen from '../../assets/password-generator.png'
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={netflix} alt="netflix" />
          </div>
          <h3>Netflix-GPT</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/ajayypatil/netflix-gpt"
              target="blank"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://netflix-gpt-brown.vercel.app/"
              target="blank"
              className="btn"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={youtube} alt="Youtube" />
          </div>
          <h3>Youtube-Clone</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/ajayypatil/youtube-clone"
              target="blank"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://youtube-clone-puce-delta.vercel.app/"
              target="blank"
              className="btn"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={weather} alt="weather" />
          </div>
          <h3>Weather App</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/ajayypatil/weather-app"
              target="blank"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://weather-ajay-app.netlify.app/"
              target="blank"
              className="btn"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={tictactoe} alt="TicTacToe" />
          </div>
          <h3>Tic-Tac-Toe Game</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/ajayypatil/tic-tac-toe"
              target="blank"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://tic-tac-toe-ajay.netlify.app/"
              target="blank"
              className="btn"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={passwordGen} alt="PasswordGen" />
          </div>
          <h3>Password Generator</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/ajayypatil/password-generator"
              target="blank"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://password-generatorajay.netlify.app/"
              target="blank"
              className="btn"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
