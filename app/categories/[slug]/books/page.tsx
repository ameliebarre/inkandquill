import { getCategories, getPaginatedBooksByCategory } from "@/data/loaders";
import { dm_serif_text } from "@/app/fonts";
import { PaginationWithLinks } from "@/app/_components/PaginationWithLinks";
import { BookCard } from "@/app/_components/BookCard";

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
  const PAGE_SIZE = 24;
  const { data: books, meta } = await getPaginatedBooksByCategory(
    slug,
    currentPage,
    PAGE_SIZE
  );

  return (
    <div>
      <h2 className={`${dm_serif_text.className} text-2xl`}>
        <span className="capitalize">{slug}</span> Books
      </h2>
      <div className="mt-6 mb-12 grid grid-cols-6 gap-2">
        {books?.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
      {meta.pagination.total > meta.pagination.pageSize ? (
        <PaginationWithLinks
          totalCount={meta.pagination.total}
          page={meta.pagination.page}
          pageSize={PAGE_SIZE}
        />
      ) : null}
    </div>
  );
}
