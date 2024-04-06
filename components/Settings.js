import Image from "next/image";
import ProfilePicture from "./ui/ProfilePicture";
import language from "@/assets/language.png";
import general from "@/assets/general.png";
import font from "@/assets/font.png";
import nightMode from "@/assets/night.png";
import appearance from "@/assets/appearance.png";

const Settings = () => {
  return (
    <div>
      <ProfilePicture />
      <div className="bg-white rounded-lg p-4 mt-2">
        <h2 className="text-center font-bold mb-5">Settings</h2>
        <div className="all-settings-options">
          <div className="single-setting flex items-center gap-3 bg-[#F7F8FA] p-3 mb-3 rounded-lg">
            <Image src={language} alt="setting" />
            <p className="text-[14px]">Language Setting</p>
          </div>
          <div className="single-setting flex items-center gap-3 bg-[#F7F8FA] p-3 mb-3 rounded-lg">
            <Image src={general} alt="setting" />
            <p className="text-[14px]">General Setting</p>
          </div>
          <div className="single-setting flex items-center gap-3 bg-[#F7F8FA] p-3 mb-3 rounded-lg">
            <Image src={font} alt="setting" />
            <p className="text-[14px]">Font Setting</p>
          </div>
          <div className="single-setting flex items-center gap-3 bg-[#F7F8FA] p-3 mb-3 rounded-md border-l-4 border-[#1FA45B]">
            <Image src={appearance} alt="setting" />
            <p className="text-[14px] text-[#1FA45B]">Appearance Setting</p>
          </div>
          <div className="single-setting flex justify-between items-center gap-3 p-3 mb-3 rounded-lg">
            <p className="text-[14px]">Night Mode</p>
            <Image src={nightMode} alt="nightMode" className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
