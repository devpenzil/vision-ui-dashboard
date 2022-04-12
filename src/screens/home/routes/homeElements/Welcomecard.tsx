import React from "react";
import "./style.scss";
function Welcomecard() {
  return (
    <div className="h-full w-full bg-gray-100 rounded-3xl p-6 w-card bg-cover flex flex-col justify-between cursor-pointer">
      <div>
        <div className="text-sm font-semibold text-gray-400">Welcome Back,</div>
        <div className="text-2xl font-black mt-3">Mark Johnson</div>
        <div className="text-base text-gray-300 font-semibold mt-5">
          Glad to see you again! <br /> Ask me anything.
        </div>
      </div>
      <div className="text-xs font-semibold">Tap to Record</div>
    </div>
  );
}

export default Welcomecard;
