'use client';
// components/PresentationContainer.tsx
import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Download } from 'lucide-react';
import html2pdf from '../node_modules/html2pdf.js';

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
import Slide17 from './slide/slide17';
import ThankYouSlide from './slide/slide18';

const PresentationContainer = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

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
    <Slide17 key="17" />,
    <ThankYouSlide key="18" />
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

  const handleExportPDF = async () => {
    setIsExporting(true);
    const originalSlide = currentSlide;

    try {
      // Create main container
      const pdfContainer = document.createElement('div');
      pdfContainer.style.position = 'absolute';
      pdfContainer.style.left = '-9999px';
      pdfContainer.style.top = '0';
      document.body.appendChild(pdfContainer);

      // Capture all slides
      const slides = [];
      for (let i = 0; i < allSlides.length; i++) {
        // Update current slide
        setCurrentSlide(i);
        
        // Wait for render
        await new Promise(resolve => setTimeout(resolve, 500));

        // Get the rendered slide content
        const slideContent = document.querySelector('.slide-content');
        if (slideContent) {
          // Create a container for this slide
          const slideContainer = document.createElement('div');
          slideContainer.style.width = '1920px';
          slideContainer.style.height = '1080px';
          slideContainer.style.backgroundColor = 'white';
          slideContainer.style.pageBreakAfter = 'always';
          slideContainer.style.margin = '0';
          slideContainer.style.padding = '0';
          slideContainer.style.display = 'block';
          
          // Clone the content
          const clonedContent = slideContent.cloneNode(true) as HTMLElement;
          slideContainer.appendChild(clonedContent);
          
          slides.push(slideContainer);
        }
      }

      // Add all slides to container
      slides.forEach(slide => {
        pdfContainer.appendChild(slide);
      });

      // Wait for all content to be properly rendered
      await new Promise(resolve => setTimeout(resolve, 1000));

      // PDF generation options
      const opt = {
        filename: 'presentation.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          logging: true,
          width: 1920,
          height: 1080,
          backgroundColor: '#ffffff'
        },
        jsPDF: {
          unit: 'px',
          format: [1920, 1080],
          orientation: 'landscape',
          compress: false
        },
        pagebreak: { mode: 'avoid-all' }
      };

      // Generate PDF
      await html2pdf()
        .from(pdfContainer)
        .set(opt)
        .save();

      // Cleanup
      document.body.removeChild(pdfContainer);
      setCurrentSlide(originalSlide);
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="h-full w-full bg-gray-100 p-4" onClick={handleClick}>
      <div className="relative h-full w-full">
        <div className='h-full w-full absolute slide-content bg-white'>
          {allSlides[currentSlide]}
        </div>
      </div>

      {/* Navigation buttons */}
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
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleExportPDF();
          }}
          className="p-4 bg-green-600 hover:bg-green-700 text-white rounded-full transition-colors"
          title="Export to PDF"
          disabled={isExporting}
        >
          <Download className="w-6 h-6" />
        </button>
      </div>

      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow">
        {currentSlide + 1} / {allSlides.length}
      </div>

      {isExporting && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg">
            Generating PDF...
          </div>
        </div>
      )}
    </div>
  );
};

export default PresentationContainer;