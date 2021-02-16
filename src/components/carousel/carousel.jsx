import React, { useState, useEffect } from 'react';
import Settings from './settings/settings';
import Navigation from './navigation/navigation';
import Pagination from './pagination/pagination';
import CarouselContent from './carouselContent/carouselContent';
import CarouselElements from './carouselElements/carouselElements';
import dataElements from '../../dataElements.json';
import dataPictures from '../../dataImages.json';
import './carousel.css';

const getWidth = () => window.innerWidth * 0.8;

const Carousel = () => {
  const distanceChangeSlide = 100;
  const [data, setData] = useState(dataPictures);
  const [startX, setStartX] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [slideCount, setSlideCount] = useState(data.length);
  const [mouseDown, setMouseDown] = useState(false);
  const [multiMode, setMultiMode] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transition, setTransition] = useState(0.5);
  // const [slides, setSlides] = useState([lastSlide, firstSlide, secondSlide]);

  useEffect(() => {
    if (data) {
      setSlideCount(data.length);
    }
  }, [data]);

  const choosePictureElements = () => {
    setData(dataPictures);
  };

  const chooseDifferentElements = () => {
    setData(dataElements);
  };

  const changeMultiMode = (value) => (
    setMultiMode(value)
  );

  /* const previousSlide = () => {
    if (currentSlide <= 0) {
      setCurrentSlide(slideCount - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
    setOffsetX(0);
  };

  const nextSlide = () => {
    if (currentSlide >= slideCount - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
    setOffsetX(0);
  }; */

  /* useEffect(() => {
    if (translate) {
      setOffsetX(0);
    }
  }, [translate]); */

  const nextSlide = () => {
    if (currentSlide === slideCount - 1) {
      // setTranslate(0);
      setCurrentSlide(0);
    } else {
      // setTranslate(getWidth() * (currentSlide + 1));
      setCurrentSlide(currentSlide + 1);
    }
  };

  const previousSlide = () => {
    if (currentSlide === 0) {
      // setTranslate(getWidth() * (slideCount - 1));
      setCurrentSlide(slideCount - 1);
    } else {
      // setTranslate(getWidth() * (currentSlide - 1));
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (x) => {
    // setTranslate(getWidth() * x);
    setCurrentSlide(x);
  };

  const handleStartMove = (event) => {
    console.log('MOVE');
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
    // console.log('!!!');
    // console.log(offsetX);
  };

  const handleEndMove = (event) => {
    console.log('END MOVE');
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

    if (difference > distanceChangeSlide) {
      nextSlide();
    } else if (difference < -distanceChangeSlide) {
      previousSlide();
    } else {
      setOffsetX(0);
    }
  };

  const createElement = (element) => (
    React.createElement(
      element.tag,
      {
        ...element.attributes,
      },
      element.textContent ? element.textContent : null,
    )
  );

  return (
    <div className="carousel">
      <Settings
        changeMultiMode={changeMultiMode}
        choosePictureElements={choosePictureElements}
        chooseDifferentElements={chooseDifferentElements}
      />
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
          transition={transition}
          offset={offsetX}
        >
          {data.map((children, index) => (
            <CarouselElements
              index={index}
            >
              {createElement(children)}
            </CarouselElements>
          ))}
        </CarouselContent>
      </section>
      <Pagination
        goToSlide={goToSlide}
        multiMode={multiMode}
        slideCount={slideCount}
        currentSlide={currentSlide}
      />
    </div>
  );
};
export default Carousel;
