import React, { useEffect, useState } from 'react';
import Carousel from './carousel/carousel';
import Settings from './settings/settings';
import Navigation from './navigation/navigation';
import Pagination from './pagination/pagination';
import dataPictures from '../dataImages.json';
import dataElements from '../dataElements.json';
import '../assets/style/style.css';

const App = () => {
  const distanceChangeSlide = 100;
  const [data, setData] = useState(dataPictures);
  const [startX, setStartX] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [slideCount, setSlideCount] = useState(data.length);
  const [mouseDown, setMouseDown] = useState(false);
  const [multiMode, setMultiMode] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

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

  const previousSlide = () => {
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
  };

  const handleStartMove = (event) => {
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

  const goToSlide = (x) => {
    setCurrentSlide(x);
  };

  return (
    <>
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
        className="carousel"
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
        <Carousel
          data={data}
          offset={offsetX}
          multiMode={multiMode}
          slideCount={slideCount}
          currentSlide={currentSlide}
        />
      </section>
      <Pagination
        goToSlide={goToSlide}
        multiMode={multiMode}
        slideCount={slideCount}
        currentSlide={currentSlide}
      />
    </>
  );
};

export default App;
