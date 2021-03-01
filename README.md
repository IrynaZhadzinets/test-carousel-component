## For work, you need to run the following commands:

+ git clone https://github.com/IrynaZhadzinets/test-carousel-component.git
+ cd test-carousel-component
+ npm install
+ npm start
+ After installation, the project will open by default at http://localhost:8080/

## Demo

[Slider](https://irynazhadzinets.github.io/slider_ver2.0/)

## Using

Slides must be placed inside the Carousel tag

You can add simple slider
```
<Carousel>
  <h1>Slide 1</h1>
  <p>Slide 2</p>
</Carousel>
```

You can add some settings(You don't have to use all of them)

```
<Carousel
  navigation
  pagination
  multipleSlides
  widthSlider='100'
  heightSlider='50'
 >
  <h1>Slide 1</h1>
  <p>Slide 2</p>
</Carousel>
```

## Settings and default settings

name | type | default | description
--- | --- | --- | ---
multipleSlides | boolean | false |if true, displays multiple slides on the screen, if the screen size allows (calculated for a minimum slide width of 360px)
pagination     | boolean | false |if true, displays pagination (dots at the bottom of the slide to switch between slides)
navigation     | boolean | false |if true, displays navigation (arrows to switch to next/previous slide)
widthSlider    | number  |  80   |unit - vw
heightSlider   | number  |  80   |unit - vh
