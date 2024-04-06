import Image from "next/image";
import SearchInput from "./ui/SearchInput";
import SearchInputRight from "./ui/SearchInputRight";
import logoImg from "@/assets/allah-logo.png";
import copyImg from "@/assets/copy.png";
import detailsImg from "@/assets/details.png";
import valpImg from "@/assets/valp.png";
import shareImg from "@/assets/share.png";
import warningImg from "@/assets/warning.png";

const DynamicContent = () => {
  return (
    <>
      <div className="w-[889px]  h-[1123px]">
        <div className="text-end">
          <SearchInputRight />
        </div>
        <div className="main-content">
          <div className="top-section-title bg-white p-2 rounded-lg mt-5 mb-3">
            <p>
              {" "}
              <span className="text-[#1FA45B]">Section:</span> The servant is
              dependent on his Lord
            </p>
          </div>
          <div className="card-details p-4 rounded-lg bg-white">
            <div className="flex items-center gap-3 mb-4">
              <Image src={logoImg} alt="Allah Logo" />
              <h2 className="text-[#1FA45B] font-semibold">
                1. The servant is dependent on his Lord #1
              </h2>
            </div>
            <p>
              All human beings depend on Allah for their welfare and prevention
              of evil in various matters of their religion and world. Allah says
              (interpretation of the meaning): O mankind, you are those in need
              of Allah, while Allah is the Free of need, the Praiseworthy.
            </p>
            <div className="reference mt-4">
              <h3 className="text-[#1FA45B]">Reference: </h3>
              <p>Surah Al-Fatir 35:15</p>
            </div>
            <div className="shared-options flex justify-end items-center gap-8 mt-4">
              <Image
                src={copyImg}
                className="cursor-pointer"
                alt="share icon image"
              />
              <Image
                src={detailsImg}
                className="cursor-pointer"
                alt="share icon image"
              />
              <Image
                src={valpImg}
                className="cursor-pointer"
                alt="share icon image"
              />
              <Image
                src={shareImg}
                className="cursor-pointer"
                alt="share icon image"
              />
              <Image
                src={warningImg}
                className="cursor-pointer"
                alt="share icon image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DynamicContent;
