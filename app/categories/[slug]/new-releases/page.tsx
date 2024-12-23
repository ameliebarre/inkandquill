import { BookCard } from "@/app/_components/BookCard";
import { PaginationWithLinks } from "@/app/_components/PaginationWithLinks";
import { dm_serif_text } from "@/app/fonts";
import { getCategories, getPaginatedBooksByCategory } from "@/data/loaders";

export async function generateStaticParams() {
  const { data } = await getCategories();

  const categories = data.filter((category) => category.slug);

  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export default async function CategoryBooksPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { page: number };
}) {
  const { slug } = await params;
  const { page } = await searchParams;
  const currentPage = page || 1;
  const pageSize = 21;
  const { data: books, meta } = await getPaginatedBooksByCategory(
    slug,
    currentPage,
    pageSize
  );

  const newReleasedBooks = books?.filter((book) => book.isNewRelease);

  const PAGE_SIZE = 28;

  return (
    <>
      <h2 className={`${dm_serif_text.className} text-2xl`}>
        <span className="capitalize">{slug}</span> New Releases
      </h2>
      <div className="mt-6 mb-12 grid grid-cols-6 gap-3">
        {newReleasedBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
      <PaginationWithLinks
        totalCount={meta.pagination.total}
        page={meta.pagination.page}
        pageSize={PAGE_SIZE}
      />
    </>
  );
}
