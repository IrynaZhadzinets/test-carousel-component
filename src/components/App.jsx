import React from 'react';
import Carousel from './carousel/carousel';
import '../assets/style/style.css';

const App = () => (
  // If we want to extend the program,
  // the component are connected here
  // (for example footer and header)
  <Carousel
    multipleSlides
  >
    <h1>New</h1>
    <h1>Type</h1>
    <h1>Data</h1>
    <h1>New</h1>
    <h1>Type</h1>
    <h1>Data</h1>
  </Carousel>
);

export default App;
