import React from "react";
import BellIcon from "../../../../assets/img/bellicon.png";
import CartIcon from "../../../../assets/img/carticon.png";
import HtmlIcon from "../../../../assets/img/htmlicon.png";
import CardIcon from "../../../../assets/img/cardicon.png";
import XDIcon from "../../../../assets/img/xdicon.png";
function OrdersOverview() {
  const data = [
    { icon: BellIcon, name: "$2400, Design changes", date: "22 DEC 7:20 PM" },
    { icon: HtmlIcon, name: "New order #4219423", date: "21 DEC 7:20 PM" },
    {
      icon: CartIcon,
      name: "Server Payments for April",
      date: "20 DEC 7:20 PM",
    },
    {
      icon: CardIcon,
      name: "New card added for order #3210145",
      date: "19 DEC 7:20 PM",
    },
    {
      icon: BellIcon,
      name: "Unlock packages for Development",
      date: "18 DEC 7:20 PM",
    },
    { icon: XDIcon, name: "New order #9851258", date: "17 DEC 7:20 PM" },
  ];
  return (
    <div className="satisfacion-card h-full w-full p-4 rounded-2xl overflow-scroll no-scrollbar">
      <div className="text-xl font-bold">Orders overview</div>
      {data.map((obj) => {
        return (
          <div className="mt-4 flex items-start">
            <div>
              <img src={obj.icon} alt="" className="mt-2" />
            </div>
            <div className="ml-6">
              <div className="text-sm font-bold">{obj.name}</div>
              <div className="text-xs font-light text-gray-400 mt-1">
                {obj.date}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default OrdersOverview;
