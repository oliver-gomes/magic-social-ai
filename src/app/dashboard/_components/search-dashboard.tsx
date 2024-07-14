import { Auth } from "@/components/auth";
import { SearchIcon } from "lucide-react";
import React from "react";
import { Categories } from "./categories";

const categories = [
  {
    name: "All",
    value: "All",
  },
  {
    name: "Youtube",
    value: "Youtube",
  },
  {
    name: "Instagram",
    value: "Instagram",
  },
  {
    name: "Tiktok",
    value: "Tiktok",
  },
  {
    name: "Linkedin",
    value: "Linkedin",
  },
  {
    name: "Tweet",
    value: "Tweet",
  },
];

export const SearchDashboard = ({
  onSearchInput,
}: {
  onSearchInput: React.Dispatch<React.SetStateAction<string | undefined>>;
}) => {
  return (
    <div className="mx-5 py-2">
      <div className="flex  md:flew-row gap-2 mt-5 py-6 px-4 bg-white rounded">
        <div className="flex gap-2 items-center p-2 border rounded-full bg-white w-full md:w-[20%]">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-black"
            onChange={(e) => onSearchInput(e.target.value)}
          />
        </div>
        <Categories items={categories} />
        <div className="ml-auto">
          <Auth />
        </div>
      </div>
    </div>
  );
};
