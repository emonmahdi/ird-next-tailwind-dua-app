import React from "react";
import SearchInput from "./ui/SearchInput";
import SingleCategoryCard from "./SingleCategoryCard";

const Categories = () => {
  return (
    <>
      <div className="w-[429px]">
        <h2 className="font-bold mb-8">Dua Page</h2>
        <div className="bg-white h-auto rounded-lg">
          <h2 className="text-center text-white py-2 bg-[#1EA55E] rounded-t-lg">
            Category
          </h2>
          <div className="px-2">
            <SearchInput />
            <div className="single-cards">
              <SingleCategoryCard />
              <SingleCategoryCard />
              <SingleCategoryCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
