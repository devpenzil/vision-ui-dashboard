import React from "react";
import ActiveUsers from "./ActiveUsers";
import OrdersOverview from "./OrdersOverview";
import Projects from "./Projects";
import ReferralTracking from "./ReferralTracking";
import SalesOverview from "./SalesOverview";
import SatisfactionRate from "./SatisfactionRate";
import TopStatus from "./TopStatus";
import Welcomecard from "./Welcomecard";

function Home() {
  return (
    <div className="mt-6">
      <TopStatus />
      <div className="mt-6 flex flex-col space-y-6">
        <div className="flex flex-row space-x-6 h-[384px]">
          <Welcomecard />
          <SatisfactionRate />
          <ReferralTracking />
        </div>
        <div className="flex flex-row space-x-6 h-[384px] ">
          <SalesOverview />
          <ActiveUsers />
        </div>
        <div className="flex flex-row space-x-6 h-[384px]">
          <Projects />
          <OrdersOverview />
        </div>
      </div>
    </div>
  );
}

export default Home;
