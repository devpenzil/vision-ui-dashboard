import CartIcon from "../../../../assets/icons/CartIcon";
import RocketIcon from "../../../../assets/icons/RocketIcon";
import WalletIcon from "../../../../assets/icons/WalletIcon";
import WrenchIcon from "../../../../assets/icons/WrenchIcon";
import "./style.scss";
import ReactECharts from "echarts-for-react";
function ActiveUsers() {
  const data = [
    {
      icon: <WalletIcon height="12.5" width="12.5" />,
      name: "User",
      count: "32, 984",
      value: 80,
    },
    {
      icon: <RocketIcon height="12.5" width="12.5" />,
      name: "Clicks",
      count: "2, 42 m",
      value: 50,
    },
    {
      icon: <CartIcon height="12.5" width="12.5" />,
      name: "Sales",
      count: "2, 400$",
      value: 30,
    },
    {
      icon: <WrenchIcon height="12.5" width="12.5" />,
      name: "Items",
      count: "320",
      value: 90,
    },
  ];
  const option = {
    color: ["#fff"],
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      show: false,
    },
    yAxis: {
      type: "value",
      splitLine: false,
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "bar",
      },
    ],
  };
  return (
    <div className="satisfacion-card w-full h-full rounded-2xl p-6 flex-col flex justify-between">
      <div className="w-full max-h-52 bg-[#060C29] rounded-2xl p-0 overflow-hidden">
        <ReactECharts option={option} className="max-h-60" />
      </div>
      <div>
        <div className="text-xl font-bold mt-2">Active users</div>
        <div className="text-sm font-semibold text-gray-400">
          <span className="text-green-500">(+23)</span> than last week
        </div>
        <div className="flex flex-row justify-between items-center mt-6">
          {data.map((obj) => {
            return (
              <div>
                <div className="flex justify-between space-x-2">
                  <div className="w-[25px] h-[25px] bg-[#0075FF] rounded-md flex justify-center items-center">
                    {obj.icon}
                  </div>
                  <div className="text-sm font-semibold text-gray-400">
                    {obj.name}
                  </div>
                </div>
                <div className="text-xl font-black mt-1">{obj.count}</div>
                <div className="mt-1">
                  <div className="h-1 relative max-w-xl rounded-full overflow-hidden">
                    <div className="w-full h-full bg-[#060B28] absolute" />
                    <div
                      className="h-full bg-[#0075FF] absolute"
                      style={{ width: `${obj.value}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ActiveUsers;
