export const renderSlidesToPDF = async (slides: React.ReactElement[], setCurrentSlide: (index: number) => void) => {
    const exportContainer = document.createElement('div');
    exportContainer.style.width = '1920px';
    exportContainer.style.position = 'fixed';
    exportContainer.style.left = '-9999px';
    exportContainer.style.top = '0';
    document.body.appendChild(exportContainer);
  
    const slidesData = [];
  
    // Render each slide sequentially and capture the content
    for (let i = 0; i < slides.length; i++) {
      // Set the current slide
      setCurrentSlide(i);
      
      // Wait for the slide to render
      await new Promise(resolve => setTimeout(resolve, 500));
  
      // Capture the current slide content
      const currentSlide = document.querySelector('.slide-content');
      if (currentSlide) {
        const slideClone = currentSlide.cloneNode(true) as HTMLElement;
        const slideWrapper = document.createElement('div');
        slideWrapper.style.height = '1080px';
        slideWrapper.style.width = '1920px';
        slideWrapper.style.pageBreakAfter = 'always';
        slideWrapper.className = 'pdf-slide bg-white';
        slideWrapper.appendChild(slideClone);
        slidesData.push(slideWrapper);
      }
    }
  
    // Append all slides to the export container
    slidesData.forEach(slide => {
      exportContainer.appendChild(slide);
    });
  
    return exportContainer;
  };