'use client';
// components/PresentationContainer.tsx
import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import Slide1 from './slide/slide1';
import Slide2 from './slide/slide2';
import Slide3 from './slide/slide3';
import Slide4 from './slide/slide4';
import Slide5 from './slide/slide5';
import Slide6 from './slide/slide6';
import Slide7 from './slide/slide7';
import Slide8 from './slide/slide8';
import Slide9 from './slide/slide9';
import Slide10 from './slide/slide10';
import Slide11 from './slide/slide11';
import Slide12 from './slide/slide12';
import Slide13 from './slide/slide13';
import Slide14 from './slide/slide14';
import Slide15 from './slide/slide15';
import Slide16 from './slide/slide16';
import ThankYouSlide from './slide/slide17';

const PresentationContainer = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const allSlides = [
    <Slide1 key="1" />,
    <Slide2 key="2" />,
    <Slide3 key="3" />,
    <Slide4 key="4" />,
    <Slide5 key="5" />,
    <Slide6 key="6" />,
    <Slide7 key="7" />,
    <Slide8 key="8" />,
    <Slide9 key="9" />,
    <Slide10 key="10" />,
    <Slide11 key="11" />,
    <Slide12 key="12" />,
    <Slide13 key="13" />,
    <Slide14 key="14" />,
    <Slide15 key="15" />,
    <Slide16 key="16" />,
    <ThankYouSlide key="17" />
  ];

  const handleNext = () => {
    setCurrentSlide(prev => prev < allSlides.length - 1 ? prev + 1 : prev);
  };

  const handlePrevious = () => {
    setCurrentSlide(prev => prev > 0 ? prev - 1 : prev);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      console.log('Key pressed:', event.code);
      
      if (event.code === 'Space' || event.code === 'ArrowRight') {
        event.preventDefault();
        handleNext();
      } else if (event.code === 'ArrowLeft') {
        event.preventDefault();
        handlePrevious();
      }
      
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleNext();
    }
  };

  if (!isClient) {
    return null;
  }

  return (
    <div 
      className="h-full w-full bg-gray-100 p-4"
      onClick={handleClick}
    >
      <div className="relative h-full w-full">
        <div className='h-full w-full absolute'>
        {allSlides[currentSlide]}
        </div>
      </div>

      <div className="fixed bottom-8 right-8 flex gap-4">
        <button
          onClick={(e) => {
            e.stopPropagation();
            handlePrevious();
          }}
          className={`p-4 text-white rounded-full transition-colors ${
            currentSlide === 0 
            ? 'bg-blue-300 cursor-not-allowed' 
            : 'bg-blue-600 hover:bg-blue-700'
          }`}
          disabled={currentSlide === 0}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className={`p-4 text-white rounded-full transition-colors ${
            currentSlide === allSlides.length - 1 
            ? 'bg-blue-300 cursor-not-allowed' 
            : 'bg-blue-600 hover:bg-blue-700'
          }`}
          disabled={currentSlide === allSlides.length - 1}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow">
        {currentSlide + 1} / {allSlides.length}
      </div>
    </div>
  );
};

export default PresentationContainer;