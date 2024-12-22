import { MdOutlineArrowBackIos as ArrowLeft } from "react-icons/md";
import { MdOutlineArrowForwardIos as ArrowRight } from "react-icons/md";

interface ArrowsProps {
  onPrevSlide: () => void;
  onNextSlide: () => void;
}

export function Arrows({ onPrevSlide, onNextSlide }: ArrowsProps) {
  return (
    <>
      <span
        onClick={onPrevSlide}
        className="top-1/2 z-50 absolute ease-in p-4 rounded-full border border-solid border-gray-200"
      >
        <ArrowLeft />
      </span>
      <span
        onClick={onNextSlide}
        className="top-1/2 z-50 absolute right-0 rounded-full p-4 border border-solid border-gray-200"
      >
        <ArrowRight />
      </span>
    </>
  );
}
