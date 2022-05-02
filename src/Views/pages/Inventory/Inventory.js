import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { Table } from "../../components/common/Table";
import {
  IoMdArrowDropdown,
  IoIosArrowBack,
  IoIosArrowForward,
} from "react-icons/io";

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
          <table className="table w-full">
            <thead className="text-left">
              <tr className="bg-yellow-50">
                <th className="p-2 hidden sm:block">
                  <input type="checkbox" name="" id="" />
                </th>
                <th className="p-2 hidden sm:inline-block">Date Updated</th>
                <th className="p-2">Title</th>
                <th className="p-2 hidden lg:block">Details</th>
                <th className="p-2">Status</th>
                <th className="p-2">Quantity</th>
                <th className="p-2 hidden lg:block">Unit Price</th>
                <th className="p-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              {submitData.map((data) => (
                <Table key={data.id} data={data} />
              ))}
            </tbody>
          </table>
          {/* Pagination area */}
          <div className="my-5 flex justify-between p-2">
            <div className="hidden sm:block">
              <span className="secondary-btn">
                10 Items per page <IoMdArrowDropdown className="inline-block" />
              </span>
            </div>
            <div className="flex justify-between gap-3">
              <div>
                <select name="" id="" className="secondary-btn">
                  <option value="">Page 1 of 5</option>
                  <option value="">Page 2 of 5</option>
                  <option value="">Page 3 of 5</option>
                  <option value="">Page 4 of 5</option>
                  <option value="">Page 5 of 5</option>
                </select>
              </div>
              <div>
                <button className="secondary-btn p-2">
                  <IoIosArrowBack />
                </button>
              </div>
              <div>
                <button className="secondary-btn p-2">
                  <IoIosArrowForward />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
