import React from 'react';
import './carouselElements.css';

const CarouselElements = ({ children, itemsPerPage }) => {
  // carousel block is 80vw wide
  const carouselBlockSize = 80;
  return (
    <div
      className="carouselElement"
      key={children.key}
      style={{
        minWidth: `${carouselBlockSize / itemsPerPage}vw`,
      }}
    >
      {children}
    </div>
  );
};

export default CarouselElements;
