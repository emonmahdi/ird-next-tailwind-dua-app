import Categories from "@/components/Categories";
import DynamicContent from "@/components/DynamicContent";
import SidebarMenu from "@/components/SidebarMenu";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dashboard",
  description: "This is Dashboard",
};

export default function DashboardLayout({ children }) {
  return (
    <>
      <div className="flex gap-3">
        <SidebarMenu />
        <Categories />
        <DynamicContent>{children}</DynamicContent>
        <div className="w-[330px] bg-red-100 h-[834px]">
          <p>Setting</p>
        </div>
      </div>
    </>
  );
}
