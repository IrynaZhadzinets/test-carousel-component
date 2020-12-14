import React, { useState } from 'react';
import './carousel.css';

const Carousel = (props) => {
  const [prevPositions] = useState([]);
  const minWidthSlide = 360;
  let listElements = [];

  const createElement = (element) => (
    React.createElement(
      element.tag,
      {
        ...element.attributes,
      },
      element.textContent ? element.textContent : null,
    )
  );

  const getListElements = () => {
    const direction = (prevPositions[props.currentSlide] < 0);

    /* The slider is 80vw */
    const elementsOnPage = Math.floor((document.body.offsetWidth * 0.80) / minWidthSlide);

    listElements = props.data.map((element, index) => {
      /* Center slide on screen relative to other slides */
      const distance = (props.currentSlide > index)
        ? (index + props.slideCount - props.currentSlide)
        : (index - props.slideCount - props.currentSlide);

      const position = (Math.abs(index - props.currentSlide) < Math.abs(distance))
        ? (index - props.currentSlide) : distance;

      /* Slides only move to the right or left */
      // const position = index - props.currentSlide;

      const transition = ((position - prevPositions[index] > 0) === direction
                                        && !props.offset);

      prevPositions[index] = position;

      return (
        <div
          className="carouselElement"
          key={index}
          style={{
            minWidth: `${props.multiMode ? (100 / elementsOnPage) : 100}%`,
            maxWidth: `${props.multiMode ? (100 / elementsOnPage) : 100}%`,
            fontSize: `${props.multiMode ? 1 : 3}rem`,
            transition: `${transition ? 0.5 : 0}s`,
            transform: `translateX(calc(${position * 100 + (props.multiMode ? 100 : 0)}% + ${props.offset}px))`,
          }}
        >
          {createElement(element)}
        </div>
      );
    });
    return listElements;
  };

  return (
    <div className="carouselBlock">
      { getListElements() }
    </div>
  );
};

export default Carousel;
