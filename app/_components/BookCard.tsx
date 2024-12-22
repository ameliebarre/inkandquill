import Link from "next/link";
import { BsFillBasket2Fill } from "react-icons/bs";
import Image from "next/image";
import { Book } from "@/types/book";
import { getStrapiMedia } from "@/lib/utils";
import { Button } from "../components/ui/button";

export function BookCard({ book }: { book: Book }) {
  const imageUrl = getStrapiMedia(book.image[0].url);

  if (!imageUrl) return null;

  return (
    <div
      className="flex flex-col gap-2 border-gray-300 border border-solid rounded-xl hover:bg-gray-100"
      key={book.id}
    >
      <div className="relative overflow-hidden pt-3 px-3 h-[230px]">
        <Link href={`/books/${book.slug}`}>
          <Image
            src={imageUrl}
            alt={book.image[0].alternativeText ?? "no alternative text"}
            className="w-full h-full rounded-md object-cover"
            width={300}
            height={400}
          />
        </Link>
      </div>
      <div className="flex flex-col flex-1 gap-3 justify-between">
        <div className="px-3">
          <h4 className="text-sm font-semibold line-clamp-2">{book.title}</h4>
          <h5 className="text-sm line-clamp-1 text-gray-500">
            {book.authors[0].name}
          </h5>
        </div>
        <div className="flex justify-between items-center text-slate-800 border-t border-solid border-t-gray-300 p-3">
          <span className="text-base font-semibold">{book.price} $</span>
          <Button className="bg-amber-400 hover:bg-amber-500 rounded-full px-6 shadow-none">
            <BsFillBasket2Fill />
          </Button>
        </div>
      </div>
    </div>
  );
}
