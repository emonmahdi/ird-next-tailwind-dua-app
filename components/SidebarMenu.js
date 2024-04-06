import Image from "next/image";
import logo from "@/assets/logo.png";
import home from "@/assets/home.png";
import allDuas from "@/assets/all-duas.png";
import memorize from "@/assets/memorize.png";
import bookmark from "@/assets/bookmark.png";
import ruqyah from "@/assets/ruqyah.png";
import duaqna from "@/assets/duaqna.png";
import bottomLogo from "@/assets/bottom-logo.png";

const SidebarMenu = () => {
  return (
    <div className="w-[100px] bg-[#fff] h-screen rounded-lg">
      <ul>
        <li>
          <Image src={logo} alt="logo image" className="cursor-pointer" />
        </li>
        <li className="mt-[60px] cursor-pointer">
          <Image src={home} alt="home image" className="mx-auto" />
        </li>
        <li className="mt-3 cursor-pointer">
          <Image src={allDuas} alt="allDuas image" className="mx-auto" />
        </li>
        <li className="mt-3 cursor-pointer">
          <Image src={memorize} alt="logo image" className="mx-auto" />
        </li>
        <li className="mt-3 cursor-pointer">
          <Image src={bookmark} alt="bookmark" className="mx-auto" />
        </li>
        <li className="mt-3 cursor-pointer">
          <Image src={ruqyah} alt="ruqyah" className="mx-auto" />
        </li>
        <li className="mt-3 cursor-pointer">
          <Image src={duaqna} alt="duaqna" className="mx-auto" />
        </li>
        <li className="mt-[50px] cursor-pointer">
          <Image src={bottomLogo} alt="bottomLogo" />
        </li>
      </ul>
    </div>
  );
};

export default SidebarMenu;
