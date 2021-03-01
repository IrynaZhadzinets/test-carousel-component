import React from 'react';
import Carousel from './carousel/carousel';
import '../assets/style/style.css';

const App = () => (
  <main>
    <Carousel
      pagination
      navigation
      widthSlider="70"
      heightSlider="70"
    >
      <img src="./images/1.jpg" alt="Slide 1" />
      <img src="./images/2.jpg" alt="Slide 2" />
      <img src="./images/3.jpg" alt="Slide 3" />
      <img src="./images/4.jpg" alt="Slide 4" />
      <img src="./images/5.jpg" alt="Slide 5" />
      <img src="./images/6.jpg" alt="Slide 6" />
      <img src="./images/7.jpg" alt="Slide 7" />
      <img src="./images/8.jpg" alt="Slide 8" />
      <img src="./images/9.jpg" alt="Slide 9" />
      <img src="./images/10.jpg" alt="Slide 10" />
    </Carousel>
    <Carousel
      navigation
      multipleSlides
    >
      <img src="./images/1.jpg" alt="Slide 1" />
      <img src="./images/2.jpg" alt="Slide 2" />
      <img src="./images/3.jpg" alt="Slide 3" />
      <img src="./images/4.jpg" alt="Slide 4" />
      <img src="./images/5.jpg" alt="Slide 5" />
    </Carousel>
    <Carousel
      pagination
    >
      <h1>Winter Morning Poem</h1>
      <p>
        Winter is the king of showmen,
        <br />
        Turning tree stumps into snow men,
        <br />
        And houses into birthday cakes,
        <br />
        And spreading sugar over lakes.
      </p>
      <input type="text" size="30" />
      <textarea name="comment" cols="20" rows="3" />
      <a href="google">This link not work</a>
      <video>
        <track kind="captions" />
        <source src="https://player.vimeo.com/external/454440518.sd.mp4?s=ca0390b81de13f932c7731a637ea9e660d7b5384&profile_id=164" />
      </video>
      <i>Last slide by number, but not by value</i>
    </Carousel>
  </main>
);

export default App;
