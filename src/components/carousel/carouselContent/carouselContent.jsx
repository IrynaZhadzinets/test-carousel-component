import React from 'react';
import './carouselContent.css';

const CarouselContent = (props) => {
  const {
    currentSlide, transition, offset, children, itemsPerPage, width,
  } = props;
  const getWidth = () => (window.innerWidth * (width / 100));
  return (
    <div
      className="carouselContent"
      style={{
        transform: `translateX(calc(${-(getWidth() / itemsPerPage) * currentSlide + offset}px))`,
        transition: `transform ease-out ${transition}s`,
      }}
    >
      {children}
    </div>
  );
};

export default CarouselContent;
