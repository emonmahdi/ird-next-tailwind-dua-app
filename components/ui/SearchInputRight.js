import React from "react";

const SearchInputRight = () => {
  return (
    <form className="my-4">
      <div className="relative text-gray-600 focus-within:text-gray-400">
        <span className="absolute inset-y-0 bg-gray-300 rounded-lg right-0 flex items-center pl-2">
          <button
            type="submit"
            className="p-1 focus:outline-none focus:shadow-outline"
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
        </span>
        <input
          type="search"
          name="q"
          className="w-[371px] border-2 py-2 text-sm text-black  rounded-md focus:outline-none focus:bg-white pl-3"
          placeholder="Search by category"
          autocomplete="off"
        />
      </div>
    </form>
  );
};

export default SearchInputRight;
