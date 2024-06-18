// ControlledCarousel.js

import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import images from './img';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {images.map((imgSrc, idx) => (
        <Carousel.Item key={idx}>
          <img
            src={imgSrc}
            alt={`Slide ${idx + 1}`}
            className="d-block w-100"
          />
          {/* <Carousel.Caption>
            <h3>Slide label {idx + 1}</h3>
            <p>Optional slide description.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ControlledCarousel;
