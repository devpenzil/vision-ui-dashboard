import React from "react";
import "./style.scss";
function SatisfactionRate() {
  return (
    <div className="w-[350px] h-full rounded-3xl bg-white p-6 satisfacion-card">
      <div className="text-lg font-bold">Satisfaction Rate</div>
      <div className="text-sm font-semibold text-gray-400">
        From all projects
      </div>
      <div className="w-full h-full flex justify-center items-center relative ">
        <div className="radial-progress"></div>
        <div className="absolute bottom-12 bgcard w-[293px] h-[82px] rounded-2xl p-4 flex justify-between text-xs text-gray-400">
          <div>0%</div>
          <div>
            <div className="text-center text-3xl font-bold text-white">95%</div>
            <div className="text-center mt-1">Based on likes</div>
          </div>
          <div>100%</div>
        </div>
      </div>
    </div>
  );
}

export default SatisfactionRate;
