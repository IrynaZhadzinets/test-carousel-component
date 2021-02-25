import React, { useState } from 'react';
import Navigation from './navigation/navigation';
import Pagination from './pagination/pagination';
import CarouselContent from './carouselContent/carouselContent';
import CarouselElements from './carouselElements/carouselElements';
import './carousel.css';

const Carousel = ({ children }) => {
  // const minWidthSlide = 360;
  // carousel block is 80vw wide
  // const carouselBlockSize = 0.8;
  const distanceChangeSlide = 100;

  const [startX, setStartX] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [transition, setTransition] = useState(0.5);
  const [mouseDown, setMouseDown] = useState(false);
  const [itemsPerPage] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideCount] = useState(children.length);

  const nextSlide = () => {
    if (currentSlide === slideCount - 1) {
      setCurrentSlide(0);
    // when multi-mode is enabled that empty items aren`t displayed
    } else if (itemsPerPage !== 1 && currentSlide === slideCount - itemsPerPage) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const previousSlide = () => {
    // when multi-mode is enabled that empty items aren`t displayed
    if (itemsPerPage !== 1 && currentSlide === 0) {
      setCurrentSlide(slideCount - itemsPerPage);
    } else if (currentSlide === 0) {
      setCurrentSlide(slideCount - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (x) => {
    setCurrentSlide(x);
  };

  const handleStartMove = (event) => {
    setTransition(0);
    if (event.type === 'mousedown') {
      setStartX(event.nativeEvent.clientX);
      setMouseDown(true);
    } else if (event.type === 'touchstart') {
      setStartX(event.touches[0].clientX);
    }
  };

  const handleMove = (event) => {
    if (mouseDown === true && event.type === 'mousemove') {
      setOffsetX(event.clientX - startX);
    } else if (event.changedTouches && event.type === 'touchmove') {
      setOffsetX(event.changedTouches[0].clientX - startX);
    }
  };

  const handleEndMove = (event) => {
    setTransition(0.5);
    let difference = 0;

    if (event.type === 'mouseup' && mouseDown === true) {
      difference = startX - event.clientX;
      setMouseDown(false);
    } else if (event.type === 'mouseout' && mouseDown === true) {
      difference = startX - event.clientX;
      setMouseDown(false);
    } else if (event.type === 'touchend') {
      difference = startX - event.changedTouches[0].clientX;
    }

    setOffsetX(0);

    if (difference > distanceChangeSlide) {
      nextSlide();
    } else if (difference < -distanceChangeSlide) {
      previousSlide();
    }
  };

  return (
    <div className="carousel">
      <Navigation
        previousSlide={previousSlide}
        nextSlide={nextSlide}
      />
      <section
        className="carouselBlock"
        onMouseDown={handleStartMove}
        onMouseMove={handleMove}
        onMouseUp={handleEndMove}
        onTouchStart={handleStartMove}
        onTouchMove={handleMove}
        onTouchEnd={handleEndMove}
        onMouseOut={handleEndMove}
        onBlur={() => undefined}
        role="grid"
        tabIndex="0"
      >
        <CarouselContent
          currentSlide={currentSlide}
          itemsPerPage={itemsPerPage}
          transition={transition}
          offset={offsetX}
        >
          {children.map((child, index) => (
            <CarouselElements
              index={index}
              itemsPerPage={itemsPerPage}
            >
              {child}
            </CarouselElements>
          ))}
        </CarouselContent>
      </section>
      <Pagination
        goToSlide={goToSlide}
        itemsPerPage={itemsPerPage}
        slideCount={slideCount}
        currentSlide={currentSlide}
      />
    </div>
  );
};
export default Carousel;
