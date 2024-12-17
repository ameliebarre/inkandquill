import Sidebar from "@/app/_components/Sidebar";

export default async function CategoryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-row mt-[74px] mb-[32px] px-[52px] flex-nowrap">
      <Sidebar />
      {children}
    </div>
  );
}
