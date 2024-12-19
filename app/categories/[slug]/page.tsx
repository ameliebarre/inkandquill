import { dm_serif_text } from "@/app/fonts";
import { getCategories, getCategoryBySlug } from "@/data/loaders";
import { RichTextRenderer } from "@/app/_components/RichTextRenderer";
import { BookCard } from "@/app/_components/BookCard";
import { ButtonLink } from "@/app/_components/ButtonLink";

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

  console.log("DATA : ", data);

  const newReleasedBooks = data.books
    ?.filter((book) => book.isNewRelease)
    .slice(0, 12);

  const otherBooks = data.books
    ?.filter((book) => !book.isNewRelease)
    .slice(0, 12);

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
            <div className="grid grid-cols-6 gap-2">
              {newReleasedBooks?.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
            <ButtonLink source={`/categories/${data.slug}/new-releases`}>
              More new releases tagged {data.title.toLowerCase()}...
            </ButtonLink>
          </div>
        ) : null}
        {otherBooks?.length ? (
          <div className="flex flex-col gap-2">
            <h3 className="text-md font-bold">{data.title} Books</h3>
            <div className="grid grid-cols-6 gap-2">
              {otherBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
            <ButtonLink source={`/categories/${data.slug}/books`}>
              More {data.title.toLowerCase()} books...
            </ButtonLink>
          </div>
        ) : null}
      </div>
    </>
  );
}
