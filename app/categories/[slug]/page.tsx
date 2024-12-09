import Breadcrumb from "@/app/_components/Breadcrumb";
import { dm_serif_text } from "@/app/fonts";
import { getCategoryBySlug } from "@/services/category";
import { fetchDataFromStrapi } from "@/services/utils";
import { Category } from "@/types/Category";

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
  const category = await getCategoryBySlug(params.slug);

  return (
    <div className="px-[52px] min-w-[84%]">
      <Breadcrumb />
      <h2 className={`${dm_serif_text.className} text-2xl`}>
        {category.title}
      </h2>
    </div>
  );
}
