import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import HeroSlider from './data';

function Slider() {
  const [sliderImg, setSliderImg] = useState(HeroSlider);
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const lastIndex = sliderImg.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, sliderImg]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
       <div>
        {sliderImg.map((sliderImage, sliderImageIndex) => {
          const { id, image, } = sliderImage;

          let position = 'nextSlide';
          if (sliderImageIndex === index) {
            position = 'activeSlide';
          }
          if (
            sliderImageIndex === index - 1 ||
            (index === 0 && sliderImageIndex === sliderImg.length - 1)
          ) {
            position = 'lastSlide';
          }

          return (
            <div key={sliderImageIndex} className='slider-container'>
            <article className={` ${position}`} key={id}>
              <img src={image} alt={name} className="sliderImage-img" />
            </article>
            </div>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
  );
}

export default Slider;
