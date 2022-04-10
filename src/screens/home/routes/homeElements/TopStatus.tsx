import React from "react";
import WalletIcon from "../../../../assets/icons/WalletIcon";
import GlobeIcon from "../../../../assets/icons/GlobeIcon";
import "./style.scss";
import NoteIcon from "../../../../assets/icons/NoteIcon";
import CartIcon from "../../../../assets/icons/CartIcon";
function TopStatus() {
  const data = [
    {
      name: "Today's Money",
      amount: "$ 53,000",
      change: "+55 %",
      icon: <WalletIcon />,
      inc: true,
    },
    {
      name: "Today's User",
      amount: "2, 300",
      change: "+5 %",
      icon: <GlobeIcon />,
      inc: true,
    },
    {
      name: "New Clients",
      amount: "$ 3, 052",
      change: "-14 %",
      icon: <NoteIcon />,
      inc: false,
    },
    {
      name: "Total sales",
      amount: "$ 173,000",
      change: "+8 %",
      icon: <CartIcon />,
      inc: true,
    },
  ];
  return (
    <div className="flex space-x-8 ">
      {data.map((obj, index) => {
        return (
          <div
            className="w-full h-[20] topstatus p-4 rounded-2xl flex justify-between items-center cursor-pointer"
            key={index}
          >
            <div>
              <div className="text-xs font-medium text-gray-400">
                {obj.name}
              </div>
              <div className="text-sm font-bold mt-1">
                {obj.amount}{" "}
                <span
                  className={
                    "text-xs " + (obj.inc ? "text-green-500" : "text-red-500")
                  }
                >
                  {" "}
                  {obj.change}
                </span>
              </div>
            </div>
            <div className="h-[45px] w-[45px] bg-[#0075FF] rounded-2xl flex justify-center items-center">
              {obj.icon}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TopStatus;
