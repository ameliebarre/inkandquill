import Sidebar from "@/app/_components/Sidebar";
import { Category } from "@/types/Category";
import { fetchDataFromStrapi } from "@/utils/strapi.utils";

export default async function CategoryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const categories: Category[] = await fetchDataFromStrapi("categories");

  return (
    <section className="flex flex-row flex-wrap mt-[74px] mb-[32px] px-[52px]">
      <Sidebar categories={categories} />
      {children}
    </section>
  );
}
