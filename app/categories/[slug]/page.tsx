import Breadcrumb from "@/app/_components/Breadcrumb";
import { dm_serif_text } from "@/app/fonts";
import { getCategoryBySlug } from "@/data/loaders";
import { Category } from "@/types/Category";
import { fetchDataFromStrapi } from "@/utils/strapi.utils";

export async function generateStaticParams() {
  const categories: Category[] = await fetchDataFromStrapi("categories");

  const validCategories = categories.filter((category) => category.slug);

  return validCategories.map((category) => ({
    slug: category.slug,
  }));
}

export default async function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  console.log("PARAMS !! ", params);
  const category = await getCategoryBySlug(params.slug);

  return (
    <div className="px-[52px] min-w-[84%]">
      <div className="">
        <Breadcrumb
          homeElement={"Home"}
          separator={<span>{">"}</span>}
          activeClasses="text-amber-400"
          containerClasses="flex text-sm gap-x-2"
          listClasses="hover:underline"
          capitalizeLinks
        />
        <h2 className={`${dm_serif_text.className} text-2xl`}>
          {category.title}
        </h2>
      </div>
    </div>
  );
}
