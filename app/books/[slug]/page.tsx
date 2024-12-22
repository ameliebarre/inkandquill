import { getBook } from "@/data/loaders";
import { getStrapiMedia } from "@/lib/utils";
import { Slider } from "@/app/_components/Slider/Slider";

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
    <div className="max-w-[1440px] mt-[74px] mb-[32px] ml-auto mr-auto flex flex-row gap-4">
      <div className="flex flex-col w-2/5 border-solid border-gray-200 rounded-2xl border py-7">
        <Slider sliderImage={book.image} />
      </div>
      <div className="bg-green-800 h-[50px] w-3/5">
        <p>Test 2</p>
      </div>
    </div>
  );
}
