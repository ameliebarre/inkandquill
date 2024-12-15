import Link from "next/link";
import Breadcrumb from "@/app/_components/Breadcrumb";
import { StrapiImage } from "@/app/_components/StrapiImage";
import { dm_serif_text } from "@/app/fonts";
import { getCategories, getCategoryBySlug } from "@/data/loaders";
import { getStrapiMedia } from "@/lib/utils";

export async function generateStaticParams() {
  const { data } = await getCategories();

  const categories = data.filter((category) => category.slug);

  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export default async function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const { data } = await getCategoryBySlug(slug);

  const newReleasedBooks = data.books
    ?.filter((book) => book.isNewRelease)
    .slice(0, 14);

  const fictionBooks = data.books
    ?.filter((book) => !book.isNewRelease)
    .slice(0, 14);

  return (
    <div className="px-[52px] min-w-[84%] border-l border-solid">
      <Breadcrumb />
      <h2 className={`${dm_serif_text.className} text-2xl`}>{data.title}</h2>
      <div className="mt-6 flex flex-col gap-4">
        {newReleasedBooks?.length ? (
          <div className="flex flex-col gap-2">
            <h3 className="text-sm">New Releases Tagged {data.title}</h3>
            <div className="grid grid-cols-7 gap-2">
              {newReleasedBooks?.map((book) => (
                <div className="flex flex-col gap-3" key={book.id}>
                  <div className="relative w-full aspect-[3/4]">
                    <StrapiImage
                      alt={book.image.alternativeText ?? "no alternative text"}
                      src={getStrapiMedia(book.image.url)}
                      fill
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold line-clamp-2">
                      {book.title}
                    </h4>
                    <h5 className="text-sm line-clamp-1">{book.author}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}
        <div className="flex flex-col gap-2">
          <h3 className="text-sm">{data.title} Books</h3>
          <div className="grid grid-cols-7 gap-2">
            {fictionBooks?.length &&
              fictionBooks.map((book) => (
                <div className="flex flex-col gap-3" key={book.id}>
                  <div className="relative w-full aspect-[3/4]">
                    <StrapiImage
                      alt={book.image.alternativeText ?? "no alternative text"}
                      src={getStrapiMedia(book.image.url)}
                      fill
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold line-clamp-2">
                      {book.title}
                    </h4>
                    <h5 className="text-sm line-clamp-1">{book.author}</h5>
                  </div>
                </div>
              ))}
          </div>
          <Link
            href={`/categories/${data.slug}/books`}
            className="underline text-sm"
          >
            More {data.title.toLowerCase()} books...
          </Link>
        </div>
      </div>
    </div>
  );
}
