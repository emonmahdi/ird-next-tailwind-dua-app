import React from "react";
import cardImg from "@/assets/card-img.png";
import Image from "next/image";

const SingleCategoryCard = async ({ category }) => {
  const res = await fetch("http://localhost:5000/subcategories");
  const data = await res.json();
  console.log(data);

  const catId = category?.cat_id;

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
            <p className="text-[11px]">Subcategory: {data?.length}</p>
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
          {data?.map((sub) =>
            catId == sub?.cat_id ? (
              <li key={sub.id} className="relative py-1">
                <span
                  style={{ left: "-13px" }}
                  className="absolute inset-y-0 left-0 top-3 w-2 h-2 rounded-full bg-[#1EA55E]"
                ></span>
                {sub.subcat_name_bn}
              </li>
            ) : (
              ""
            )
          )}
        </ul>
      </div>
    </>
  );
};

export default SingleCategoryCard;
