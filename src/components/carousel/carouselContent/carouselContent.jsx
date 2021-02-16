import React from 'react';
import './carouselContent.css';

const getWidth = () => window.innerWidth * 0.8;

const CarouselContent = ({ currentSlide, transition, offset, children }) => {
  console.log(currentSlide);
  console.log(offset);
  return (
    <div
      className="carouselContent"
      style={{
        transform: `translateX(calc(${-getWidth() * currentSlide + offset}px))`,
        transition: `transform ease-out ${transition}s`,
      }}
    >
      {children}
    </div>
  );
};

export default CarouselContent;
