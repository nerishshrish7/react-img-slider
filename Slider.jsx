import './App.css';
import React, { useState, useEffect } from 'react';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  return (
    <div className="image-slider">
      <button onClick={prevSlide}>Previous</button>
      <img src={images[currentIndex]} id='image' alt={`Slide ${currentIndex}` } height={400} width={400}/>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default ImageSlider;



