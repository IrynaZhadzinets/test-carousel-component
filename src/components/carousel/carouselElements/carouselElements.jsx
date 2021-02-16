import React from 'react';
import './carouselElements.css';

const CarouselElements = ({ children, index, itemsPerPage }) => {
  // carousel block is 80vw wide
  const carouselBlockSize = 80;
  return (
    <div
      className="carouselElement"
      key={index}
      style={{
        minWidth: `${carouselBlockSize / itemsPerPage}vw`,
      }}
    >
      {children}
    </div>
  );
};

export default CarouselElements;
