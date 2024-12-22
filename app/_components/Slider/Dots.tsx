import { Image } from "@/types/common";

interface DotsProps {
  activeIndex: number;
  onDotClick: (index: number) => void;
  sliderImage: Image[];
}

export function Dots({ activeIndex, onDotClick, sliderImage }: DotsProps) {
  return (
    <div className="w-full text-center">
      {sliderImage.map((slide, index) => (
        <span
          key={slide.id}
          className={`cursor-pointer h-2 w-2 my-0 mx-[3px] bg-gray-500 rounded-lg inline-block ${
            activeIndex === index
              ? "dot active-dot bg-[#101828]"
              : "bg-[#767676]"
          }`}
          onClick={() => onDotClick(index)}
        />
      ))}
    </div>
  );
}
