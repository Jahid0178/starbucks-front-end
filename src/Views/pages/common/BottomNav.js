import React from "react";
import { Link } from "react-router-dom";
import { IoDocumentTextOutline } from "react-icons/io5";
import { TiDocumentText } from "react-icons/ti";
import { BsGear } from "react-icons/bs";
import { RiHome2Line } from "react-icons/ri";

export const BottomNav = () => {
  return (
    <div className="flex justify-around bg-white">
      <Link
        to="/dashboard"
        className="block px-3 py-2 my-2  text-gray-600 rounded font-semibold hover:shadow hover:text-green-500 hover:bg-white"
      >
        <RiHome2Line className="inline-block text-2xl mr-1" />{" "}
        <span className="hidden md:inline-block">Dashboard</span>
      </Link>
      <Link
        to="/inventory"
        className="block px-3 py-2 my-2  text-gray-600 rounded font-semibold hover:shadow hover:text-green-500 hover:bg-white"
      >
        <IoDocumentTextOutline className="inline-block text-2xl mr-1" />{" "}
        <span className="hidden md:inline-block">Inventory</span>
      </Link>
      <Link
        to="/documents"
        className="block px-3 py-2 my-2  text-gray-600 rounded font-semibold hover:shadow hover:text-green-500 hover:bg-white"
      >
        <TiDocumentText className="inline-block text-2xl mr-1" />{" "}
        <span className="hidden md:inline-block">Documents</span>
      </Link>
      <Link
        to="/settings"
        className="block px-3 py-2 my-2  text-gray-600 rounded font-semibold hover:shadow hover:text-green-500 hover:bg-white"
      >
        <BsGear className="inline-block text-2xl mr-1" />{" "}
        <span className="hidden md:inline-block">Setting</span>
      </Link>
    </div>
  );
};
