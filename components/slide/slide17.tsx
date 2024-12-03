import React from 'react';

const ThankYouSlide = () => {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-lg">
      <div className="absolute inset-0 bg-blue-600 transform flex items-center justify-center animate-slide-down">
        <h1 className="text-6xl font-bold text-white">Thank You For Listening</h1>
      </div>

      <style jsx>{`
        @keyframes slide-down {
          from {
            transform: translateY(-100%);
          }
          to {
            transform: translateY(0);
          }
        }
        
        .animate-slide-down {
          animation: slide-down 500ms ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ThankYouSlide;