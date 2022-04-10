import React from "react";
import AsideBar from "../../components/asidebar/AsideBar";
import "./index.scss";
import Home from "./routes/Home";

function HomePage() {
  return (
    <div className="flex w-full h-screen home">
      <div>
        <AsideBar />
      </div>
      <div className="w-full p-4">
        <Home />
      </div>
    </div>
  );
}

export default HomePage;
