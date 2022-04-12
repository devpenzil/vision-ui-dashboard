import "./style.scss";
import ReactECharts from "echarts-for-react";

function SalesOverview() {
  const option = {
    color: ["#0075FF", "#2CD9FF"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985",
        },
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
    ],
    yAxis: [
      {
        type: "value",
        splitLine: false,
      },
    ],
    series: [
      {
        name: "Email",
        type: "line",
        stack: "Total",
        areaStyle: {
          opacity: 0.6,
        },
        emphasis: {
          focus: "series",
        },
        data: [120, 132, 101, 230, 210, 120, 132, 101, 134, 90, 134, 90],
        smooth: true,
        showSymbol: false,
      },
      {
        name: "Union Ads",
        type: "line",
        stack: "Total",
        areaStyle: {
          opacity: 0.6,
        },
        emphasis: {
          focus: "series",
        },
        data: [234, 290, 220, 182, 191, 234, 290, 330, 310, 220, 182, 191],
        smooth: true,
        showSymbol: false,
      },
    ],
  };
  return (
    <div className="h-full min-w-[924px]  rounded-2xl topstatus p-4">
      <div>
        <div className="text-xl font-bold">Sales overview</div>
        <div className="text-xs font-semibold text-gray-400">
          <span className="text-green-500">(+5) more</span> in 2021
        </div>
      </div>
      <div className="h-[300px] w-full">
        <ReactECharts option={option} />
      </div>
    </div>
  );
}

export default SalesOverview;
