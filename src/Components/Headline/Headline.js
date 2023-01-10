import './Headline.css';
import { useRef, useEffect } from 'react';

function Headline() {
  const primaryText = useRef(null);

  const scrollToAbout = () => {
    const about = document.querySelector('#about');
    const headerHeight = document.querySelector('header').offsetHeight;
    window.scrollTo(0, about.offsetTop - headerHeight - 100);
  };

  useEffect(() => {
    const textLoad = () => {
      setTimeout(() => {
        primaryText.current.textContent = 'Shahier Nashaat';
      }, 0);
      setTimeout(() => {
        primaryText.current.innerText = 'Full Stack Developer';
      }, 5000);
      setTimeout(() => {
        primaryText.current.innerText = 'Front End Developer';
      }, 10000);
      setTimeout(() => {
        primaryText.current.innerText = 'Back End Developer';
      }, 15000);
    };
    textLoad();
    setInterval(textLoad, 20000);
  }, []);

  return (
    <div className="headline" id="headline">
      <div className="img-container">
        <div className="border-div" />
        <img src="/images/shahier-nashaat.jpg" alt="Shahier" />
      </div>
      <div>
        <h1>
          <span className="greeting">Hi, I am </span>
          <br />
          <span className="primary-text" ref={primaryText}>Shahier Nashaat</span>
        </h1>
        <p>
          I can help you build a product, feature or website
          Look through some of my work and experience! If you
          like what you see and have a project you need to be
          coded, don’t hesitate to contact me.
          I can help you build a product,
          feature or website Look through.
        </p>
      </div>
      <div className="icons">
        <a href="https://twitter.com/ShahierN" target="blank" className="twitter">
          <span className="twitter-not-hovered"><i className="fab fa-twitter" /></span>
          <span className="twitter-hovered"><i className="fab fa-twitter" /></span>
        </a>
        <a href="https://www.linkedin.com/in/shahier-nashaat/" target="blank" className="linkedin">
          <span className="linkedin-not-hovered"><i className="fab fa-linkedin-in" /></span>
          <span className="linkedin-hovered"><i className="fab fa-linkedin-in" /></span>
        </a>
        <a href="https://github.com/ShahierNashaat" target="blank" className="github">
          <span className="github-not-hovered"><i className="fab fa-github" /></span>
          <span className="github-hovered"><i className="fab fa-github" /></span>
        </a>
      </div>
      <div className="scroll-down">
        <button onClick={scrollToAbout} type="button">
          <i className="fas fa-long-arrow-alt-down" />
          {' '}
          SCROLL DOWN
        </button>
      </div>
    </div>
  );
}

export default Headline;
