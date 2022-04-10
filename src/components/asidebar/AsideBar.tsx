import React from "react";
import CardIcon from "../../assets/icons/CardIcon";
import ChartIcon from "../../assets/icons/ChartIcon";
import HomeIcon from "../../assets/icons/HomeIcon";
import ProfileIcon from "../../assets/icons/ProfileIcon";
import RocketIcon from "../../assets/icons/RocketIcon";
import SignInIcon from "../../assets/icons/SignInIcon";
import WrenchIcon from "../../assets/icons/WrenchIcon";
import MenuItem from "../menuitem/MenuItem";
import "./style.scss";
function AsideBar() {
  const menuElements = [
    { name: "Dashboard", isActive: true, icon: <HomeIcon /> },
    { name: "Tables", isActive: false, icon: <ChartIcon /> },
    { name: "Billing", isActive: false, icon: <CardIcon /> },
    { name: "RTL", isActive: false, icon: <WrenchIcon /> },
    { name: "Profile", isActive: false, icon: <ProfileIcon /> },
    { name: "Sign In", isActive: false, icon: <SignInIcon /> },
    { name: "Sign up", isActive: false, icon: <RocketIcon /> },
  ];
  return (
    <aside className="w-[264px] h-screen aside p-3 ">
      <div className="text-white font-semibold text-sm text-center py-4 heading">
        VISION UI FREE
      </div>
      <div className="w-full flex flex-col mt-6">
        {menuElements.map((obj, index) => {
          return (
            <div>
              <MenuItem
                label={obj.name}
                status={obj.isActive}
                icon={obj.icon}
              />
            </div>
          );
        })}
      </div>
    </aside>
  );
}

export default AsideBar;
