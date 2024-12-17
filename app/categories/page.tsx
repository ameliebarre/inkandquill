import Link from "next/link";
import { CategorySection } from "@/types/category";
import { getCategoriesSection } from "@/data/loaders";
import { getStrapiMedia } from "@/lib/utils";
import { StrapiImage } from "../_components/StrapiImage";

export default async function CategoriesPage() {
  const categories: CategorySection = await getCategoriesSection();
  const bookCategories = categories.data.blocks[0].bookcategory;

  const filteredCategories = bookCategories.map((bookCategory) => {
    const filteredBooks = bookCategory.category.books
      ?.slice(0, 8)
      .filter((book) => book.isNewRelease);

    return {
      ...bookCategory.category,
      books: filteredBooks,
    };
  });

  return (
    <div className="mt-6 flex flex-col gap-6">
      {filteredCategories.map((bookCategory) => (
        <div key={bookCategory.id} className="flex flex-col gap-1">
          <h3 className="text-md font-bold">{bookCategory.title}</h3>
          <div className="grid grid-cols-7 gap-2">
            {bookCategory.books?.map((book) => (
              <div className="flex flex-col gap-3" key={book.id}>
                <div className="relative w-full aspect-[3/4]">
                  <StrapiImage
                    alt={book.image.alternativeText ?? "no alternative text"}
                    src={getStrapiMedia(book.image.url)}
                    fill
                  />
                </div>
                <div>
                  <h4 className="text-sm font-semibold line-clamp-1">
                    {book.title}
                  </h4>
                  <h5 className="text-sm line-clamp-1">{book.author}</h5>
                </div>
              </div>
            ))}
          </div>
          <Link
            href={`/categories/${bookCategory.slug}`}
            className="underline text-sm font-semibold mt-2"
          >
            View more {bookCategory.title}
          </Link>
        </div>
      ))}
    </div>
  );
}
