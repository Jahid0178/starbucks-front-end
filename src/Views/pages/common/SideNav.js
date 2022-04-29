import React from "react";
import { Link } from "react-router-dom";
import { RiHome2Line } from "react-icons/ri";
import { IoDocumentTextOutline } from "react-icons/io5";
import { TiDocumentText } from "react-icons/ti";
import { BsGear } from "react-icons/bs";

export const SideNav = () => {
  return (
    <div>
      <div>
        <Link
          to="/dashboard"
          className="block px-3 py-2 my-2 bg-white text-gray-600 rounded font-semibold hover:shadow hover:text-green-500"
        >
          <RiHome2Line className="inline-block text-2xl mr-1" /> Dashboard
        </Link>
        <Link
          to="/inventory"
          className="block px-3 py-2 my-2 bg-white text-gray-600 rounded font-semibold hover:shadow hover:text-green-500"
        >
          <IoDocumentTextOutline className="inline-block text-2xl mr-1" />{" "}
          Inventory
        </Link>
        <Link
          to="/documents"
          className="block px-3 py-2 my-2 bg-white text-gray-600 rounded font-semibold hover:shadow hover:text-green-500"
        >
          <TiDocumentText className="inline-block text-2xl mr-1" /> Documents
        </Link>
        <Link
          to="/settings"
          className="block px-3 py-2 my-2 bg-white text-gray-600 rounded font-semibold hover:shadow hover:text-green-500"
        >
          <BsGear className="inline-block text-2xl mr-1" /> Setting
        </Link>
      </div>
    </div>
  );
};
