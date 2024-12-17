import Sidebar from "@/app/_components/Sidebar";
import Breadcrumb from "../_components/Breadcrumb";

export default async function CategoryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-row mt-[74px] mb-[32px] px-[52px] flex-nowrap">
      <Sidebar />
      <div className="px-[52px] w-full lg:w-[84%] border-l-[#dcdcdc] border-l border-solid">
        <Breadcrumb />
        {children}
      </div>
    </div>
  );
}
