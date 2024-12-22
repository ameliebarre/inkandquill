import { getStrapiMedia } from "@/lib/utils";
import { Image as SliderImage } from "@/types/common";
import Image from "next/image";

interface SliderContentProps {
  activeIndex: number;
  sliderImage: SliderImage[];
}

export function SliderContent({
  activeIndex,
  sliderImage,
}: SliderContentProps) {
  return (
    <section className="w-[70%] m-auto">
      {sliderImage.map((image, index) => {
        const imageUrl = getStrapiMedia(image.url);

        if (!imageUrl) return null;

        return (
          <div
            key={image.id}
            className={
              index === activeIndex
                ? "relative inline-block w-full aspect-[4/3]"
                : "hidden"
            }
          >
            <Image
              src={imageUrl}
              alt={image.alternativeText ?? "no alternative text"}
              className="w-full h-full rounded-md object-cover"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        );
      })}
    </section>
  );
}
