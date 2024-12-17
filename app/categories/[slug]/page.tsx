import Link from "next/link";
import { StrapiImage } from "@/app/_components/StrapiImage";
import { dm_serif_text } from "@/app/fonts";
import { getCategories, getCategoryBySlug } from "@/data/loaders";
import { getStrapiMedia } from "@/lib/utils";
import { RichTextRenderer } from "@/app/_components/RichTextRenderer";

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
    <>
      <h2 className={`${dm_serif_text.className} text-2xl mb-2`}>
        {data.title}
      </h2>
      {data.text ? (
        <RichTextRenderer content={data.text} classNames="text-sm mb-2" />
      ) : null}
      <div className="mt-6 flex flex-col gap-12">
        {newReleasedBooks?.length ? (
          <div className="flex flex-col gap-2">
            <h3 className="text-md font-bold">
              New Releases Tagged {data.title}
            </h3>
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
                    <h4 className="text-sm font-semibold line-clamp-1">
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
          <h3 className="text-md font-bold">{data.title} Books</h3>
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
                    <h4 className="text-sm font-semibold line-clamp-1">
                      {book.title}
                    </h4>
                    <h5 className="text-sm line-clamp-1">{book.author}</h5>
                  </div>
                </div>
              ))}
          </div>
          <Link
            href={`/categories/${data.slug}/books`}
            className="underline text-sm font-semibold mt-2"
          >
            More {data.title.toLowerCase()} books...
          </Link>
        </div>
      </div>
    </>
  );
}
