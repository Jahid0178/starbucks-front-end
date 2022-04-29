import React from "react";
import { FiBell } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { AiFillCaretDown } from "react-icons/ai";
import User from "../../../assets/images/person.jpg";

export const Header = () => {
  return (
    <div className="container mx-auto px-2 py-3">
      <div className="grid grid-cols-[1fr_1fr] sm:grid-cols-[1fr_4fr_1fr] items-center gap-1">
        <div>
          <NavLink to="#">
            <h3>Starbucks</h3>
          </NavLink>
        </div>
        <div className="relative hidden sm:block">
          <span className="absolute top-2 left-2.5">
            <BiSearch className="text-2xl text-gray-400" />
          </span>
          <input
            type="text"
            placeholder="Search"
            className="search-input pl-12 sm:w-3/5 md:w-2/5"
          />
        </div>
        <div>
          <ul>
            <li className="inline-block">
              <NavLink to="#">
                <FiBell className="text-2xl mr-2" />
              </NavLink>
            </li>
            <li className="inline-block">
              <NavLink to="#">
                <div className="flex items-center">
                  <img
                    src={User}
                    alt="user images"
                    className="w-7 h-7 object-cover rounded-full mr-2"
                  />
                  <div>
                    <span>John Doe</span>
                    <AiFillCaretDown className="inline-block ml-2" />
                  </div>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
