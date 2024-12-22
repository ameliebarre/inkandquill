"use client";
import { useState } from "react";
import { Image } from "@/types/common";
import { SliderContent } from "./SliderContent";
import { Arrows } from "./Arrows";
import { Dots } from "./Dots";

interface SliderProps {
  sliderImage: Image[];
}

export function Slider({ sliderImage }: SliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const SLIDER_LENGTH = sliderImage.length - 1;

  return (
    <div className="relative m-auto overflow-hidden w-[90%]">
      <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} />
      <Arrows
        onPrevSlide={() =>
          setActiveIndex(activeIndex < 1 ? SLIDER_LENGTH : activeIndex - 1)
        }
        onNextSlide={() =>
          setActiveIndex(activeIndex === SLIDER_LENGTH ? 0 : activeIndex + 1)
        }
      />
      <Dots
        activeIndex={activeIndex}
        sliderImage={sliderImage}
        onDotClick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
  );
}
