import Breadcrumb from "@/app/_components/Breadcrumb";
import { dm_serif_text } from "@/app/fonts";
import { getCategories, getCategoryBySlug } from "@/data/loaders";
import { Category } from "@/types/category";
import { Meta } from "@/types/common";

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
  const { data }: { data: Category; meta: Meta } = await getCategoryBySlug(
    slug
  );

  return (
    <div className="px-[52px] min-w-[84%]">
      <Breadcrumb />
      <h2 className={`${dm_serif_text.className} text-2xl`}>{data.title}</h2>
    </div>
  );
}
