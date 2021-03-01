import React from 'react';
import Carousel from './carousel/carousel';
import '../assets/style/style.css';

const App = () => (
  <main>
    <Carousel
      pagination
      navigation
    >
      <h1>New</h1>
      <h1>Type</h1>
      <h1>Data</h1>
      <h1>New</h1>
      <h1>Type</h1>
      <h1>Data</h1>
    </Carousel>
    <Carousel
      pagination
      navigation
      multipleSlides
      widthSlider="70"
    >
      <h1>New</h1>
      <h1>Type</h1>
      <h1>Data</h1>
      <h1>New</h1>
      <h1>Type</h1>
      <h1>Data</h1>
    </Carousel>
  </main>
);

export default App;
