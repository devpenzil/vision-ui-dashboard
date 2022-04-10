import React from "react";
import { Route, Routes } from "react-router-dom";
import AsideBar from "../../components/asidebar/AsideBar";
import TopBar from "../../components/topbar/TopBar";
import "./index.scss";
import Billing from "./routes/Billing";
import Home from "./routes/Home";
import Profile from "./routes/Profile";
import Tables from "./routes/Tables";

function HomePage() {
  return (
    <div className="flex w-full h-screen home">
      <div>
        <AsideBar />
      </div>
      <div className="container mx-auto p-4 h-screen overflow-y-scroll no-scroll">
        <TopBar />
        <Routes>
          <Route path="dashboard" element={<Home />} />
          <Route path="tables" element={<Tables />} />
          <Route path="billing" element={<Billing />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default HomePage;
