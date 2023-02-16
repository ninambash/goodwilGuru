import React from 'react';
import { Link } from 'react-router-dom';
import '../css/hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-image"></div>
      <div className="hero-content">
        <h1>Your home for help</h1>
        <p>Find help and give help.</p>
        <Link to="/CreateItem">
          <button className="create-button">Start a Campaign</button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
