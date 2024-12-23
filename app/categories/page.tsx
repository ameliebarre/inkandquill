import { getCategoriesSection } from "@/data/loaders";
import { CategorySection } from "@/types/category";
import { BookCard } from "../_components/BookCard";
import { ButtonLink } from "../_components/ButtonLink";

export default async function CategoriesPage() {
  const categories: CategorySection = await getCategoriesSection();
  const bookCategories = categories.data.blocks[0].bookcategory;

  const filteredCategories = bookCategories.map((bookCategory) => {
    const filteredBooks = bookCategory.category.books
      ?.slice(0, 6)
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
          <div className="grid grid-cols-6 gap-3">
            {bookCategory.books?.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
          <ButtonLink source={`/categories/${bookCategory.slug}`}>
            View more {bookCategory.title}
          </ButtonLink>
        </div>
      ))}
    </div>
  );
}
