'use client';

import PresentationContainer from "@/components/presentation-container";
import Slide1 from "@/components/slide/slide1";
import Slide10 from "@/components/slide/slide10";
import Slide11 from "@/components/slide/slide11";
import Slide12 from "@/components/slide/slide12";
import Slide13 from "@/components/slide/slide13";
import Slide14 from "@/components/slide/slide14";
import Slide15 from "@/components/slide/slide15";
import Slide16 from "@/components/slide/slide16";
import Slide17 from "@/components/slide/slide17";
import ThankYouSlide from "@/components/slide/slide18";
import Slide2 from "@/components/slide/slide2";
import Slide3 from "@/components/slide/slide3";
import Slide4 from "@/components/slide/slide4";
import Slide5 from "@/components/slide/slide5";
import Slide6 from "@/components/slide/slide6";
import Slide7 from "@/components/slide/slide7";
import Slide8 from "@/components/slide/slide8";
import Slide9 from "@/components/slide/slide9";
import ExportButton from '@/components/pdfHelper';

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

const all = () => {
  return allSlides.map((slide, index) => {
    return (
        <div className="w-full ">
            <div 
            key={index} 
            className="flex relative flex-col items-center w-full justify-center p-4 h-screen print:break-after-page"
            >
                {slide}
            </div>
        </div>
      
    );
  });
};

export default function Full() {
  return (
    <>
      <style jsx global>{`
        @media print {
          @page {
            size: landscape;
            margin: 0;
          }
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          .print\\:break-after-page {
            break-after: page;
          }
        }
      `}</style>
      <ExportButton />
      <main className="absolute w-full flex flex-col">
        {all()}
      </main>
    </>
  );
}