import Sidebar from "@/app/_components/Sidebar";
import { fetchDataFromStrapi } from "@/services/utils";
import { Category } from "@/types/Category";

export default async function CategoryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const categories: Category[] = await fetchDataFromStrapi("categories");

  return (
    <div className="flex flex-row mt-[74px] mb-[32px] px-[52px] flex-nowrap">
      <Sidebar categories={categories} />
      {children}
    </div>
  );
}
