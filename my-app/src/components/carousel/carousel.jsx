import React from "react";
import jsonData from "../../file.json";
import { useParams } from "react-router-dom";
import { useState } from "react";
import ArrowRight from '../../images/Vector-right.png'
import ArrowLeft from '../../images/Vector-left.png'

const Carousel = () => {

// on recupere l'id avec useParams
  const { id } = useParams();

  const dataAppartment = jsonData.filter((data) => data.id === id);
  const images = dataAppartment.length > 0 ? dataAppartment[0].pictures : null;


  // fonction pour passer a l'image suivante 
  const nextSlide = () => {
    setCurrentIndex(currentIndex + 1);
    if (currentIndex === images.length - 1) setCurrentIndex(0);
  };


  // fonction pour passer a l'image precedente
  const prevSlide = () => {
    setCurrentIndex(currentIndex - 1);
    if (currentIndex === 0) setCurrentIndex(images.length - 1);
  };
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
      className="carousel"
    >
      {images.length > 1 && (
        <>
          <img
            className="carousel_arrow carousel_arrow_right"
            src={ArrowRight}
            alt="show next slider"
            onClick={nextSlide}
          />
          <img
            className="carousel_arrow carousel_arrow_left"
            src={ArrowLeft}
            alt="show previous slider"
            onClick={prevSlide}
          />
          <p className="slideCount">
            {currentIndex + 1} / {images.length}
          </p>
        </>
      )}
    </section>
  );
};

export default Carousel;
