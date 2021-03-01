import React, { useState, useEffect } from 'react';
import Navigation from './navigation/navigation';
import Pagination from './pagination/pagination';
import CarouselContent from './carouselContent/carouselContent';
import CarouselElements from './carouselElements/carouselElements';
import './carousel.css';

const Carousel = (props) => {
  const {
    children, multipleSlides, pagination, navigation, widthSlider, heightSlider,
  } = props;
  const minWidthSlide = 360;
  const distanceChangeSlide = 100;

  const [startX, setStartX] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [transition, setTransition] = useState(0.5);
  const [mouseDown, setMouseDown] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [screenWidth, setScreenWidth] = useState(document.body.offsetWidth);

  const slideCount = children.length;
  const width = (widthSlider || '80');
  const height = (heightSlider || '80');
  const multiMode = (multipleSlides === true);
  const showPagination = (pagination === true);
  const showNavigation = (navigation === true);

  useEffect(() => {
    if (multiMode) {
      const maxItemsPerPage = Math.floor((screenWidth * (width / 100)) / minWidthSlide);
      if (maxItemsPerPage < slideCount) {
        setItemsPerPage(maxItemsPerPage);
      } else {
        setItemsPerPage(slideCount);
      }
    }
  }, [screenWidth]);

  useEffect(() => {
    function handleResize() {
      setScreenWidth(document.body.offsetWidth);
    }
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    <section
      className="carouselContainer"
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
      style={{
        width: `${width}vw`,
        height: `${height}vh`,
      }}
    >
      <Navigation
        showNavigation={showNavigation}
        previousSlide={previousSlide}
        nextSlide={nextSlide}
      />
      <CarouselContent
        currentSlide={currentSlide}
        itemsPerPage={itemsPerPage}
        transition={transition}
        width={width}
        offset={offsetX}
      >
        {children.map((child) => (
          <CarouselElements
            itemsPerPage={itemsPerPage}
            width={width}
          >
            {child}
          </CarouselElements>
        ))}
      </CarouselContent>
      <Pagination
        showPagination={showPagination}
        multiMode={multiMode}
        goToSlide={goToSlide}
        slideCount={slideCount}
        currentSlide={currentSlide}
      />
    </section>
  );
};
export default Carousel;
