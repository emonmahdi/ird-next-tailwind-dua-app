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
        <div className="w-[429px] bg-green-200 h-[837px]">
          <h2>Category</h2>
        </div>
        <div className="w-[889px] bg-gray-400 h-[1123px]">{children}</div>
        <div className="w-[330px] bg-red-100 h-[834px]">
          <p>Setting</p>
        </div>
      </div>
    </>
  );
}
