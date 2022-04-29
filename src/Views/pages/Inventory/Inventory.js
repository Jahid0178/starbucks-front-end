import React from "react";
import { BiSearch } from "react-icons/bi";

export const Inventory = () => {
  return (
    <div>
      <div className="border-b-2 border-slate-300">
        <h2 className="text-2xl font-semibold px-5 py-3">Inventory</h2>
      </div>

      <div className="mx-5 my-4 border-2 border-slate-300 bg-white shadow rounded-lg">
        {/* Search input field */}
        <div className="relative hidden sm:block px-6 py-4">
          <span className="absolute top-6 left-8">
            <BiSearch className="text-2xl text-gray-400" />
          </span>
          <input
            type="text"
            placeholder="Search"
            className="search-input pl-12 sm:w-3/5 md:w-2/5 "
          />
        </div>
        <div>Result</div>
      </div>
    </div>
  );
};
