import Image from 'next/image';

import { getStrapiMedia } from '@/lib/utils';

interface StrapiImageProps {
  src: string | null;
  alt: string;
  height?: number;
  width?: number;
  className?: string;
  fill?: boolean;
}

export function StrapiImage({
  src,
  alt,
  height,
  width,
  className,
  fill = false,
}: Readonly<StrapiImageProps>) {
  const imageUrl = getStrapiMedia(src);
  if (!imageUrl) {return null;}

  return (
    <Image
      src={imageUrl}
      alt={alt}
      height={height}
      width={width}
      className={className}
      fill={fill}
    />
  );
}
