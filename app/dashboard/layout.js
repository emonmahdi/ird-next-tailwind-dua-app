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
        <div className="w-[300px] bg-blue-400 h-screen">
          <h2>sidebar content</h2>
        </div>
        <div className="w-[900px] bg-gray-400">{children}</div>
      </div>
    </>
  );
}
