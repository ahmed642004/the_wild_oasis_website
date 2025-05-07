import SideNavigation from "@/app/_components/SideNavigation";

export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-[5rem_1fr] xl:grid-cols-[16rem_1fr] h-[calc(100vh-232px)] xl:h-[calc(100vh-3rem)] gap-12">
      <SideNavigation />
      <div>{children}</div>
    </div>
  );
}
