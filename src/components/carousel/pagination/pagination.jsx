import React from 'react';
import './pagination.css';

const Pagination = (props) => {
  const { currentSlide, slideCount, itemsPerPage } = props;
  if (itemsPerPage !== 1) return 0;
  const dotsList = [...Array(slideCount).keys()]
    .map((currentValue, index) => (
      (currentSlide === currentValue)
        ? <span key={index} className="navDot navDotCurrunt" />
        : (
          <span
            key={index}
            className="navDot"
            onClick={() => props.goToSlide(currentValue)}
            role="button"
            tabIndex="0"
          />
        )
    ));
  return (
    <nav className="paginationDots">
      {dotsList}
    </nav>
  );
};

export default Pagination;
