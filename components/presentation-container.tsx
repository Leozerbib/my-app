import React, { useState, useEffect } from 'react';
import OpeningSlides from './slide/slide5';
import TechnicalSlides from './slide/slide2';
import BusinessSlides from './slide/slide3';
import PresentationSlides from './slide/slide1';
import ConclusionSlides from './slide/slide4';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import Slide6 from './slide/slide6';
import Slide7 from './slide/slide7';
import Slide8 from './slide/slide8';
import Slide9 from './slide/slide9';
import Slide10 from './slide/slide10';
import Slide11 from './slide/slide11';
import Slide1 from './slide/slide1';
import Slide12 from './slide/slide12';
import Slide13 from './slide/slide13';
import Slide14 from './slide/slide14';
import Slide15 from './slide/slide15';
import Slide16 from './slide/slide16';
import Slide2 from './slide/slide2';
import Slide3 from './slide/slide3';
import Slide4 from './slide/slide4';
import Slide5 from './slide/slide5';

const PresentationContainer = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const allSlides = [
    <Slide1 />,
    <Slide2 />,
    <Slide3 />,
    <Slide4 />,
    <Slide5 />,
    <Slide6 />,
    <Slide7 />,
    <Slide8 />,
    <Slide9 />,
    <Slide10 />,
    <Slide11 />,
    <Slide12 />,
    <Slide13 />,
    <Slide14 />,
    <Slide15 />,
    <Slide16 />,
  ];

  const handleNext = () => {
    if (currentSlide < 16) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  useEffect(() => {
    console.log('currentSlide', currentSlide);
    const handleKeyPress = (event) => {
        console.log('event', event);
      if (event.code === 'Space') {
        event.preventDefault();
        handleNext();
      } else if (event.code === 'ArrowRight') {
        handleNext();
      } else if (event.code === 'ArrowLeft') {
        handlePrevious();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide]);

  return (
    <div 
      className="relative min-h-screen w-full bg-gray-100 p-8"
      onClick={handleNext}
    >
      {/* Affichage de la slide actuelle */}
      <div className="max-w-7xl mx-auto">
        {allSlides[currentSlide]}
      </div>

      {/* Navigation */}
      <div className="fixed bottom-8 right-8 flex gap-4">
        <button
          onClick={(e) => {
            e.stopPropagation();
            handlePrevious();
          }}
          className="p-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
          disabled={currentSlide === 0}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="p-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
          disabled={currentSlide === allSlides.length - 1}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Indicateur de progression */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow">
        {currentSlide + 1} / {allSlides.length}
      </div>
    </div>
  );
};

export default PresentationContainer;