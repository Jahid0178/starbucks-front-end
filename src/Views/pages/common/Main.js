import React from "react";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../Dashboard/Dashboard";
import { Documents } from "../Documents/Documents";
import { Inventory } from "../Inventory/Inventory";
import { Settings } from "../Settings/Settings";
import { SideNav } from "./SideNav";

export const Main = () => {
  return (
    <div className="container mx-auto px-2">
      <div className="grid grid-cols-[1fr_4fr] gap-3">
        <div className="py-2">
          <SideNav />
        </div>
        <div className="py-2 border-l-2 border-slate-300">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
