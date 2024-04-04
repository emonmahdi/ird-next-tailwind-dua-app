import React from "react";
import cardImg from "@/assets/card-img.png";
import Image from "next/image";

const SingleCategoryCard = () => {
  return (
    <div className="flex justify-between items-center bg-gray-300 rounded-lg p-2 mb-2">
      <div className="flex gap-3 items-center">
        <div>
          <Image src={cardImg} alt="card img" />
        </div>
        <div>
          <h6 className="text-[#1FA45B] text-[12px] font-bold">
            Introduction to Dua
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
  );
};

export default SingleCategoryCard;
