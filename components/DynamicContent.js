import React from "react";
import SearchInput from "./ui/SearchInput";
import SearchInputRight from "./ui/SearchInputRight";

const DynamicContent = () => {
  return (
    <>
      <div className="w-[889px]  h-[1123px]">
        <div className="text-end">
          <SearchInputRight />
        </div>
        <div className="main-content bg-white p-2">
          <p>search content.....</p>
        </div>
      </div>
    </>
  );
};

export default DynamicContent;
