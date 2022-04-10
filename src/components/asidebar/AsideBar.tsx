import React from "react";
import MenuItem from "../menuitem/MenuItem";
import "./style.scss";
function AsideBar() {
  const menuElements = [
    { name: "Dashboard", isActive: true },
    { name: "Tables", isActive: false },
    { name: "Billing",isActive: false },
    { name: "RTL",isActive: false },
    { name: "Profile" ,isActive: false},
    { name: "Sign In" ,isActive: false},
    { name: "Sign up" ,isActive: false},
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
              <MenuItem label={obj.name} status={obj.isActive} />
            </div>
          );
        })}
      </div>
    </aside>
  );
}

export default AsideBar;
