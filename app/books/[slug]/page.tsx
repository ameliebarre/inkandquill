import Image from "next/image";
import { getBook } from "@/data/loaders";
import { getStrapiMedia } from "@/lib/utils";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default async function BookPage({
  params,
}: {
  readonly params: { slug: string };
}) {
  const { slug } = await params;
  const { data: book } = await getBook(slug);

  const imageUrl = getStrapiMedia(book.image[0].url);

  if (!imageUrl) return null;

  return (
    <div className="flex gap-8 flex-row mt-[74px] mb-[32px] px-[252px] flex-nowrap">
      <div className="w-[30%]">
        <Image
          src={imageUrl}
          alt={book.image[0].alternativeText ?? "no alternative text"}
          layout="responsive"
          width={3}
          height={4}
        />
      </div>
      <div className="w-[70%]">
        <p>Test</p>
      </div>
    </div>
  );
}
