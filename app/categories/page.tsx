import Image from "next/image";
import Link from "next/link";
import { getCategoriesQuery } from "@/queries/categories";
import { getCategoriesSection } from "@/services/category";
import Breadcrumb from "@/app/_components/Breadcrumb";
import { CategorySection } from "@/types/Category";
import { getImageURL } from "@/services/utils";

export default async function CategoriesPage() {
  const query = getCategoriesQuery();
  const categories: CategorySection = await getCategoriesSection(query);
  const categoriesSection = categories.blocks[0].bookcategory;

  const filteredCategories = categoriesSection.map((section) => {
    const filteredBooks = section.category.books
      ?.filter((book) => book.isNewRelease)
      .slice(0, 7);

    return {
      ...section,
      category: {
        ...section.category,
        books: filteredBooks,
      },
    };
  });

  return (
    <div className="px-[52px] w-full lg:w-[84%] border-l-[#dcdcdc]">
      <Breadcrumb />
      <div className="mt-6 flex flex-col gap-6">
        {filteredCategories.map((section) => (
          <div key={section.category.id} className="flex flex-col gap-1">
            <h3 className="text-sm font-semibold">{section.category.title}</h3>
            <div className="grid grid-cols-7 gap-2">
              {section.category.books?.map((book) => (
                <div className="flex flex-col gap-3" key={book.id}>
                  <div className="relative w-full aspect-[3/4]">
                    <Image
                      src={getImageURL(book.image.url)}
                      alt="Picture of the author"
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
              href={`/categories/${section.category.slug}`}
              className="text-xs underline"
            >
              View more {section.category.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
