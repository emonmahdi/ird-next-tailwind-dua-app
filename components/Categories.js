import React from "react";
import SearchInput from "./ui/SearchInput";

const Categories = () => {
  return (
    <>
      <div className="w-[429px]">
        <h2 className="font-bold mb-3">Dua Page</h2>
        <div className="bg-white h-[837px] rounded-lg">
          <h2 className="text-center text-white py-2 bg-[#1EA55E] rounded-t-lg">
            Category
          </h2>
          <div className="px-2">
            <SearchInput />
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;