import React from "react";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../Dashboard/Dashboard";
import { Documents } from "../Documents/Documents";
import { Inventory } from "../Inventory/Inventory";
import { Settings } from "../Settings/Settings";
import { BottomNav } from "./BottomNav";
import { SideNav } from "./SideNav";

export const Main = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-[1fr] sm:grid-cols-[auto_4fr] gap-3">
        <div className="py-2 hidden sm:block">
          <SideNav />
        </div>
        <div className="py-2 border-0 sm:border-l-2 border-slate-300">
          <Routes>
            <Route path="/" element={<Inventory />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
          <div className="block sm:hidden">
            <BottomNav />
          </div>
        </div>
      </div>
    </div>
  );
};
