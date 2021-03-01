import React from 'react';
import './carouselElements.css';

const CarouselElements = ({ children, width, itemsPerPage }) => (
  <div
    className="carouselElement"
    key={children.key}
    style={{
      minWidth: `${width / itemsPerPage}vw`,
    }}
  >
    {children}
  </div>
);

export default CarouselElements;
