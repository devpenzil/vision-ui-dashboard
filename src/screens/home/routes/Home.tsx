import React from "react";
import ReferralTracking from "./homeElements/ReferralTracking";
import SatisfactionRate from "./homeElements/SatisfactionRate";
import TopStatus from "./homeElements/TopStatus";
import Welcomecard from "./homeElements/Welcomecard";

function Home() {
  return (
    <div className="mt-6">
      <TopStatus />
      <div className="mt-6 grid grid-rows-3 gap-3">
        <div className="grid grid-flow-col gap-3 h-[384px]">
          <Welcomecard />
          <SatisfactionRate />
          <ReferralTracking />
        </div>
        <div className="grid grid-cols-2 gap-3 ">
          <div>skljhs</div>
          <div>ssfds</div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>skljhs</div>
          <div>ssfds</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
