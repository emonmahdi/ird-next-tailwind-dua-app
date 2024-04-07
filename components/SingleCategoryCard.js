import React from "react";
import cardImg from "@/assets/card-img.png";
import Image from "next/image";

const SingleCategoryCard = ({ category }) => {
  return (
    <>
      <div className="flex justify-between items-center bg-gray-300 rounded-lg p-2 mb-2">
        <div className="flex gap-3 items-center">
          <div>
            <Image src={cardImg} alt="card img" />
          </div>
          <div>
            <h6 className="text-[#1FA45B] text-[12px] font-bold">
              {category?.cat_name_en} - {category?.cat_name_bn}
            </h6>
            <p className="text-[11px]">Subcategory: 11</p>
          </div>
        </div>
        <div>
          <h4 className="text-[12px] text-center">
            <span className="font-bold">15</span> <br /> Duas
          </h4>
        </div>
      </div>
      <div className="dropdown-items">
        <ul className="ml-4 my-1 p-2 border-l-2 border-dotted border-green-400">
          <li className="relative">
            <span
              style={{ left: "-13px" }}
              className="absolute inset-y-0 left-0 top-2 w-2 h-2 rounded-full bg-[#1EA55E]"
            ></span>
            This is item One
          </li>
          <li className="relative">
            <span
              style={{ left: "-13px" }}
              className="absolute inset-y-0 left-0 top-2 w-2 h-2 rounded-full bg-[#1EA55E]"
            ></span>
            This is item Two
          </li>
          <li className="relative">
            <span
              style={{ left: "-13px" }}
              className="absolute inset-y-0 left-0 top-2 w-2 h-2 rounded-full bg-[#1EA55E]"
            ></span>
            This is item Three
          </li>
          <li className="relative">
            <span
              style={{ left: "-13px" }}
              className="absolute inset-y-0 left-0 top-2 w-2 h-2 rounded-full bg-[#1EA55E]"
            ></span>
            This is item Four
          </li>
        </ul>
      </div>
    </>
  );
};

export default SingleCategoryCard;
