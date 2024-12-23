import Image from "next/image";
import { BsFillBasket2Fill as BasketIcon } from "react-icons/bs";
import { FaCheck as Check } from "react-icons/fa6";

import PriceNumber from "@/app/_components/PriceNumber";
import { RichTextRenderer } from "@/app/_components/RichTextRenderer";
import { dm_serif_text } from "@/app/fonts";
import { getBook } from "@/data/loaders";
import { getStrapiMedia } from "@/lib/utils";
import amex from "../../../public/amex.svg";
import applePay from "../../../public/apple-pay.svg";
import mastercard from "../../../public/mastercard.svg";
import visa from "../../../public/visa.svg";

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
    <div className="px-[52px] mt-[74px] mb-[32px] ml-auto mr-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-x-10">
        <div className="md:col-span-4 md:col-start-2">
          <div className="relative max-w-[400px] z-0 md:sticky md:top-40 lg:top-44 xl:top-60">
            <div className="w-[300px] aspect-[4/3]">
              <Image
                src={imageUrl}
                alt={book.image[0].alternativeText ?? "no alternative text"}
                className="w-full h-full rounded-md object-cover"
                layout="responsive"
                width={200}
                height={300}
              />
            </div>
          </div>
        </div>
        <div className=" mt-6 md:mt-0 md:col-span-6 relative">
          <div className="flex flex-col gap-7">
            <div className="flex flex-col">
              <h2 className={`${dm_serif_text.className} text-2xl`}>
                {book.title}
              </h2>
              {book.authors.length > 1 ? (
                <span className="text-gray-500 text-sm">
                  {book.authors
                    .map(
                      (author) =>
                        `${author.name}${
                          author.role ? ` (${author.role})` : ""
                        }`
                    )
                    .join(", ")}
                </span>
              ) : (
                <h3 className="text-gray-500 text-sm">
                  {book.authors[0].name}
                </h3>
              )}
            </div>
            <RichTextRenderer
              content={book.summary}
              classNames="text-sm"
              classNamesContainer="flex flex-col gap-3"
            />
            <div className="flex flex-row gap-4 items-center">
              <PriceNumber number={book.price} />
              <button className="flex gap-2 items-center bg-amber-400 hover:bg-amber-500 rounded-md px-6 py-2">
                <BasketIcon />
                Add to cart
              </button>
            </div>
            <div className="flex flex-col">
              <h4 className={`${dm_serif_text.className}`}>This edition</h4>
              <dl className="table text-sm text-gray-500">
                <div className="table-row">
                  <dt className="w-[8rem] table-cell py-[0.2rem]">Format</dt>
                  <dd className="table-cell py-[0.2rem]">
                    {book.numberOfPages}, {book.format}
                  </dd>
                </div>
                <div className="table-row">
                  <dt className="w-[8rem] table-cell py-[0.2rem]">Published</dt>
                  <dd className="table-cell py-[0.2rem]">
                    {book.publicationDate} by {book.editor}
                  </dd>
                </div>
                <div className="table-row">
                  <dt className="w-[8rem] table-cell py-[0.2rem]">
                    First Published
                  </dt>
                  <dd className="table-cell py-[0.2rem]">
                    {book.firstPublicationDate}
                  </dd>
                </div>
                <div className="table-row">
                  <dt className="w-[8rem] table-cell py-[0.2rem]">ISBN</dt>
                  <dd className="table-cell py-[0.2rem]">{book.isbn}</dd>
                </div>
                <div className="table-row">
                  <dt className="w-[8rem] table-cell py-[0.2rem]">Language</dt>
                  <dd className="table-cell py-[0.2rem]">{book.language}</dd>
                </div>
              </dl>
            </div>
            <ul className="flex gap-2 items-center">
              {book.categories.map((category) => (
                <li key={category.id}>
                  <button
                    type="button"
                    className="w-fit border border-solid py-2 px-3 rounded-full cursor-pointer text-sm border-gray-400 text-gray-500 hover:border-gray-600 hover:text-gray-700"
                  >
                    {category.title}
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 border-gray-200 rounded-xl border p-4 divide-y">
              <div className="flex flex-row justify-between">
                <p className="font-bold">Available in our store</p>
                <span className="flex flex-row gap-1 items-center font-semibold text-lime-600">
                  <Check fill="#65a30d" />
                  Available
                </span>
              </div>
              <div className="flex flex-row justify-between pt-3 items-center">
                <p className="font-bold">Secured payment</p>
                <div className="flex flex-row gap-2">
                  <Image priority src={amex} alt="American Express" />
                  <Image priority src={applePay} alt="Apple Pay" />
                  <Image priority src={mastercard} alt="Mastercard" />
                  <Image priority src={visa} alt="Mastercard" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="px-[52px] mt-[74px] mb-[32px] ml-auto mr-auto flex flex-row gap-9">
    //   <div className="w-2/5">
    //     <div className="w-[550px] aspect-[4/3] inline-block sticky top-4">
    //       <Image
    //         src={imageUrl}
    //         alt={book.image[0].alternativeText ?? "no alternative text"}
    //         className="w-full h-full rounded-md object-cover"
    //         fill
    //         style={{ objectFit: "contain" }}
    //       />
    //     </div>
    //   </div>
    //   <div className="w-3/5">
    //     <div className="flex flex-col gap-7 max-w-[80%]">
    //       <div>
    //         <h2 className={`${dm_serif_text.className} text-2xl`}>
    //           {book.title}
    //         </h2>
    //         {book.authors.length > 1 ? (
    //           <span className="text-gray-500 text-sm">
    //             {book.authors
    //               .map(
    //                 (author) =>
    //                   `${author.name}${author.role ? ` (${author.role})` : ""}`
    //               )
    //               .join(", ")}
    //           </span>
    //         ) : (
    //           <h3 className="text-gray-500 text-sm">{book.authors[0].name}</h3>
    //         )}
    //       </div>
    //       <RichTextRenderer
    //         content={book.summary}
    //         classNames="text-sm"
    //         classNamesContainer="flex flex-col gap-3"
    //       />
    //       <div className="flex flex-row gap-4 items-center">
    //         <PriceNumber number={book.price} />
    //         <button className="flex gap-2 items-center bg-amber-400 hover:bg-amber-500 rounded-md px-6 py-2">
    //           <BasketIcon />
    //           Add to cart
    //         </button>
    //       </div>
    //       <div className="flex flex-col">
    //         <h4 className={`${dm_serif_text.className}`}>This edition</h4>
    //         <dl className="table text-sm text-gray-500">
    //           <div className="table-row">
    //             <dt className="w-[8rem] table-cell py-[0.2rem]">Format</dt>
    //             <dd className="table-cell py-[0.2rem]">
    //               {book.numberOfPages}, {book.format}
    //             </dd>
    //           </div>
    //           <div className="table-row">
    //             <dt className="w-[8rem] table-cell py-[0.2rem]">Published</dt>
    //             <dd className="table-cell py-[0.2rem]">
    //               {book.publicationDate} by {book.editor}
    //             </dd>
    //           </div>
    //           <div className="table-row">
    //             <dt className="w-[8rem] table-cell py-[0.2rem]">
    //               First Published
    //             </dt>
    //             <dd className="table-cell py-[0.2rem]">
    //               {book.firstPublicationDate}
    //             </dd>
    //           </div>
    //           <div className="table-row">
    //             <dt className="w-[8rem] table-cell py-[0.2rem]">ISBN</dt>
    //             <dd className="table-cell py-[0.2rem]">{book.isbn}</dd>
    //           </div>
    //           <div className="table-row">
    //             <dt className="w-[8rem] table-cell py-[0.2rem]">Language</dt>
    //             <dd className="table-cell py-[0.2rem]">{book.language}</dd>
    //           </div>
    //         </dl>
    //       </div>
    //       <ul className="flex gap-2 items-center">
    //         {book.categories.map((category) => (
    //           <li key={category.id}>
    //             <button
    //               type="button"
    //               className="w-fit border border-solid py-2 px-3 rounded-full cursor-pointer text-sm border-gray-400 text-gray-500 hover:border-gray-600 hover:text-gray-700"
    //             >
    //               {category.title}
    //             </button>
    //           </li>
    //         ))}
    //       </ul>
    //       <div className="flex flex-col gap-3 border-gray-200 rounded-xl border p-4 divide-y">
    //         <div className="flex flex-row justify-between">
    //           <p className="font-bold">Available in our store</p>
    //           <span className="flex flex-row gap-1 items-center font-semibold text-lime-600">
    //             <Check fill="#65a30d" />
    //             Available
    //           </span>
    //         </div>
    //         <div className="flex flex-row justify-between pt-3 items-center">
    //           <p className="font-bold">Secured payment</p>
    //           <div className="flex flex-row gap-2">
    //             <Image priority src={amex} alt="American Express" />
    //             <Image priority src={applePay} alt="Apple Pay" />
    //             <Image priority src={mastercard} alt="Mastercard" />
    //             <Image priority src={visa} alt="Mastercard" />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
