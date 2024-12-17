import { getCategories, getPaginatedBooksByCategory } from "@/data/loaders";
import { dm_serif_text } from "@/app/fonts";
import { StrapiImage } from "@/app/_components/StrapiImage";
import { getStrapiMedia } from "@/lib/utils";
import { PaginationWithLinks } from "@/app/_components/PaginationWithLinks";

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

  const PAGE_SIZE = 28;

  return (
    <>
      <h2 className={`${dm_serif_text.className} text-2xl`}>
        <span className="capitalize">{slug}</span> Books
      </h2>
      <div className="mt-6 mb-12 grid grid-cols-7 gap-2">
        {books?.map((book) => (
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
      <PaginationWithLinks
        totalCount={meta.pagination.total}
        page={meta.pagination.page}
        pageSize={PAGE_SIZE}
      />
    </>
  );
}
