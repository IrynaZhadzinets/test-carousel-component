import React from 'react';
import Carousel from './carousel/carousel';
import '../assets/style/style.css';

const App = () => (
  // If we want to extend the program,
  // the component are connected here
  // (for example footer and header)
  <Carousel>
    <div>
      <p>Any Html content being passed</p>
    </div>
    <div>
      <h1>Content</h1>
    </div>
    <div>
      <h1>Some Content</h1>
    </div>
    <div>
      <h1>Random Content</h1>
    </div>
  </Carousel>
);

export default App;
