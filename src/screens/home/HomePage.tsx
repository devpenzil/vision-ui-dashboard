import { useLocation } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import AsideBar from "../../components/asidebar/AsideBar";
import TopBar from "../../components/topbar/TopBar";
import "./index.scss";
import Billing from "./routes/billingelements/Billing";
import Home from "./routes/homeElements/Home";
import Profile from "./routes/profileelemnets/Profile";
import Tables from "./routes/tableelements/Tables";

function HomePage() {
  const location = useLocation();
  return (
    <div className="flex w-full h-screen home">
      <div>
        <AsideBar location={location.pathname} />
      </div>
      <div className="container mx-auto p-4 h-screen overflow-y-scroll no-scroll">
        <TopBar location={location.pathname} />
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
