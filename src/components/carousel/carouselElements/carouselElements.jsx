import React from 'react';
import './carouselElements.css';

const CarouselElements = ({ children, index }) => (
  <div
    className="carouselElement"
    key={index}
    style={{
      minWidth: '100%',
    }}
  >
    {children}
  </div>
);

export default CarouselElements;
