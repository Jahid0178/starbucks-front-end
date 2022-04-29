import React from "react";
import { Header } from "./pages/common/Header";
import { Main } from "./pages/common/Main";

export const TheLayout = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <main className="bg-slate-200">
        <Main />
      </main>
    </div>
  );
};
