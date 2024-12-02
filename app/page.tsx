import PresentationSlides from "@/components/slide/slide1";
import TechnicalSlides from "@/components/slide/slide2";
import BusinessSlides from "@/components/slide/slide3";
import ConclusionSlides from "@/components/slide/slide4";
import OpeningSlides from "@/components/slide/slide5";
import { Bus } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <OpeningSlides />
      <TechnicalSlides />
      <BusinessSlides />
      <PresentationSlides />
      <ConclusionSlides />
    </>
  );
}
