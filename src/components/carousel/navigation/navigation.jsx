import React from 'react';
import './navigation.css';

const Navigation = ({ previousSlide, nextSlide }) => (
  <nav className="navigation">
    <button type="button" className="previousSlide" onClick={previousSlide}>
      <img src="./images/arrow-left.svg" alt="Left" />
    </button>
    <button type="button" className="nextSlide" onClick={nextSlide}>
      <img src="./images/arrow-right.svg" alt="Right" />
    </button>
  </nav>
);

export default Navigation;
