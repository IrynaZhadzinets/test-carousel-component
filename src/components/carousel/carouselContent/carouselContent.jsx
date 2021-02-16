import React from 'react';
import './carouselContent.css';

const getWidth = () => (document.querySelector('.carouselBlock')
  ? document.querySelector('.carouselBlock').offsetWidth
  : (window.innerWidth * 0.8));

const CarouselContent = (props) => {
  const {
    currentSlide, transition, offset, children, itemsPerPage,
  } = props;
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
