import Image from "next/image";
import { getCategoriesQuery } from "@/queries/categories";
import { getCategoriesSection } from "@/services/category";
import Breadcrumb from "@/app/_components/Breadcrumb";
import { CategorySection } from "@/types/Category";
import { getImageURL } from "@/services/utils";

export default async function CategoriesPage() {
  const query = getCategoriesQuery();
  const categories: CategorySection = await getCategoriesSection(query);
  const categoriesSection = categories.blocks[0].categories.categories;

  return (
    <div className="px-[52px] w-full lg:w-[84%] border-l-[#dcdcdc]">
      <Breadcrumb />
      <div className="mt-6 flex flex-col gap-6">
        {categoriesSection.map((section) => (
          <div key={section.id} className="flex flex-col gap-1">
            <h3 className="text-sm font-semibold">{section.title}</h3>
            <div className="grid grid-cols-7 gap-2">
              {section.books.map((book) => (
                <div
                  key={book.id}
                  className="relative w-full aspect-[3/4] bg-gray-200"
                >
                  <Image
                    src={getImageURL(book.image.url)}
                    alt="Picture of the author"
                    fill
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
