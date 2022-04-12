import React from "react";
import ThreeDotIcon from "../../../../assets/icons/ThreeDotIcon";

function ReferralTracking() {
  return (
    <div className="w-[551px] h-full satisfacion-card rounded-3xl p-6 ">
      <div className="flex justify-between items-center">
        <div className="text-lg font-bold">Referral Tracking</div>
        <div className="w-[37px] h-[37px] rounded-xl bg-[#7551FF50] flex justify-center items-center cursor-pointer">
          <ThreeDotIcon fill="#7551FF" />
        </div>
      </div>
      <div className="w-full flex justify-between items-center mt-8">
        <div className="w-1/2 space-y-6">
          <div className="h-[93px] w-[217px] bg-[#060C29] rounded-2xl flex flex-col justify-center p-4">
            <div className="text-gray text-xs font-semibold">invited</div>
            <div className="text-2xl font-bold">145 people</div>
          </div>
          <div className="h-[93px] w-[217px] bg-[#060C29] rounded-2xl flex flex-col justify-center p-4">
            <div className="text-gray text-xs font-semibold">Bonus</div>
            <div className="text-2xl font-bold">1,465</div>
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <div className="referral-progress flex justify-center flex-col items-center text-gray-400 text-xs space-y-2">
            <div>safety</div>
            <div className="text-5xl font-bold text-white">93%</div>
            <div>Total score</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReferralTracking;
