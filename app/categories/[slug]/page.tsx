import { getCategoryBySlug } from "@/data/loaders";

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const category = await getCategoryBySlug(params.slug);

  return (
    <div className="px-[52px] mt-[74px]">
      <h1>{category.title}</h1>
    </div>
  );
}
