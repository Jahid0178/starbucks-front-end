import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { Table } from "../../components/common/Table";

export const Inventory = () => {
  const [submitData, setSubmitData] = useState([]);
  useEffect(() => {
    const url = "/fakeData.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSubmitData(data));
  }, []);

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
        <div>
          <ul className="grid grid-cols-[auto_1fr_1fr_2fr_1fr_1fr_1fr_1fr] bg-orange-50">
            <li className="p-3">
              <input type="checkbox" name="" id="" />
            </li>
            <li className="p-2">Date Update</li>
            <li className="p-2">Title</li>
            <li className="p-2">Details</li>
            <li className="p-2">Status</li>
            <li className="p-2">Quantity</li>
            <li className="p-2">Unit Price</li>
            <li className="p-2">Amount</li>
          </ul>
          {submitData.map((data) => (
            <Table key={data.id} data={data} />
          ))}
          {/* Pagination area */}
          <div>
            <div>1</div>
            <div>2</div>
          </div>
        </div>
      </div>
    </div>
  );
};
