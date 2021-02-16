import React from 'react';
import './carouselElements.css';

const CarouselElements = ({ children, index, itemsPerPage }) => (
  <div
    className="carouselElement"
    key={index}
    style={{
      minWidth: `${80 / itemsPerPage}vw`,
    }}
  >
    {children}
  </div>
);

export default CarouselElements;
