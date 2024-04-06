import Categories from "@/components/Categories";
import DynamicContent from "@/components/DynamicContent";
import Settings from "@/components/Settings";
import SidebarMenu from "@/components/SidebarMenu";
import ProfilePicture from "@/components/ui/ProfilePicture";
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
        <div className="w-[330px] h-[834px]">
          <Settings />
        </div>
      </div>
    </>
  );
}
