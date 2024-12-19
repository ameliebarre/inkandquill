import { GrBasket } from "react-icons/gr";
import { getStrapiMedia } from "@/lib/utils";
import { Book } from "@/types/book";
import { StrapiImage } from "./StrapiImage";

export function BookCard({ book }: { book: Book }) {
  return (
    <div className="flex flex-col gap-2 group" key={book.id}>
      <div className="relative w-full aspect-[3/4]">
        <StrapiImage
          alt={book.image.alternativeText ?? "no alternative text"}
          src={getStrapiMedia(book.image.url)}
          fill
        />
        <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bottom-0 left-0 right-0 p-2">
          <button className="bg-slate-50 font-semibold text-sm text-black w-full px-4 py-2 rounded flex gap-2 items-center justify-center">
            <GrBasket />
            Achat rapide
          </button>
        </div>
      </div>
      <div className="flex flex-col flex-1 gap-1 justify-between">
        <div>
          <h4 className="text-sm font-semibold line-clamp-2">{book.title}</h4>
          <h5 className="text-sm line-clamp-1 text-gray-500">
            {book.authors[0].name}
          </h5>
        </div>
        <span className="text-base font-semibold text-slate-800">
          {book.price} $
        </span>
      </div>
    </div>
  );
}
