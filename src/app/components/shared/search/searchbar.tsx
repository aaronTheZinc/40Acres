"use client";

import { SearchIcon } from "lucide-react";

export const SearchBar = () => {
  return (
    <div className="flex justify-between rounded-lg bg-[#f2f2f2] p-3 px-6">
      <input
        className="w-full bg-transparent outline-none"
        placeholder="Search Properties"
        onChange={() => {}}
      />
      <div>
        <button className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black">
          <SearchIcon className="text-white" />
        </button>
      </div>
    </div>
  );
};
