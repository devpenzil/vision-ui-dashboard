import { useLocation } from "react-router-dom";
import CardIcon from "../../assets/icons/CardIcon";
import ChartIcon from "../../assets/icons/ChartIcon";
import HomeIcon from "../../assets/icons/HomeIcon";
import ProfileIcon from "../../assets/icons/ProfileIcon";
import RocketIcon from "../../assets/icons/RocketIcon";
import SignInIcon from "../../assets/icons/SignInIcon";
import WrenchIcon from "../../assets/icons/WrenchIcon";
import MenuItem from "../menuitem/MenuItem";
import "./style.scss";
function AsideBar() {
  const location = useLocation();
  console.log(location.pathname);

  const menuElements = [
    {
      name: "Dashboard",
      isActive: location.pathname === "/dashboard" ? true : false,
      icon: <HomeIcon />,
      title: "Dashboard",
    },
    {
      name: "Tables",
      isActive: location.pathname === "/tables" ? true : false,
      icon: <ChartIcon />,
      title: "Tables",
    },
    {
      name: "Billing",
      isActive: location.pathname === "/billing" ? true : false,
      icon: <CardIcon />,
      title: "Billing",
    },
    {
      name: "RTL",
      isActive: false,
      icon: <WrenchIcon />,
      title: "Not available",
    },
    {
      name: "Profile",
      isActive: location.pathname === "/profile" ? true : false,
      icon: <ProfileIcon />,
      title: "Profile",
    },
    {
      name: "Sign In",
      isActive: false,
      icon: <SignInIcon />,
      title: "Not available",
    },
    {
      name: "Sign up",
      isActive: false,
      icon: <RocketIcon />,
      title: "Not available",
    },
  ];
  return (
    <aside className="w-[264px] h-screen aside p-3 flex flex-col justify-between ">
      <div>
        <div className="text-white font-semibold text-sm text-center py-4 heading">
          VISION UI FREE
        </div>
        <div className="w-full flex flex-col mt-6">
          {menuElements.map((obj, index) => {
            return (
              <div key={index}>
                <MenuItem
                  label={obj.name}
                  status={obj.isActive}
                  icon={obj.icon}
                  title={obj.title}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-[217px] h-[168px] bg-blue-200 mx-auto rounded-2xl ad bg-cover p-3 flex flex-col justify-between  text-white">
        <div className="w-[35px] h-[35px] bg-white rounded-xl flex justify-center items-center">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 3.49994C7.03125 3.49994 3 7.53119 3 12.4999C3 17.4687 7.03125 21.4999 12 21.4999C16.9687 21.4999 21 17.4687 21 12.4999C21 7.53119 16.9687 3.49994 12 3.49994ZM11.7187 17.7499C11.5333 17.7499 11.3521 17.695 11.1979 17.5919C11.0437 17.4889 10.9236 17.3425 10.8526 17.1712C10.7817 16.9999 10.7631 16.8114 10.7993 16.6295C10.8354 16.4477 10.9247 16.2806 11.0558 16.1495C11.1869 16.0184 11.354 15.9291 11.5359 15.893C11.7177 15.8568 11.9062 15.8753 12.0775 15.9463C12.2488 16.0173 12.3952 16.1374 12.4983 16.2916C12.6013 16.4458 12.6562 16.627 12.6562 16.8124C12.6562 17.0611 12.5575 17.2995 12.3817 17.4754C12.2058 17.6512 11.9674 17.7499 11.7187 17.7499V17.7499ZM13.2862 12.9687C12.5264 13.4787 12.4219 13.946 12.4219 14.3749C12.4219 14.549 12.3527 14.7159 12.2297 14.839C12.1066 14.962 11.9397 15.0312 11.7656 15.0312C11.5916 15.0312 11.4247 14.962 11.3016 14.839C11.1785 14.7159 11.1094 14.549 11.1094 14.3749C11.1094 13.3479 11.5819 12.5313 12.5541 11.8784C13.4578 11.2718 13.9687 10.8874 13.9687 10.0423C13.9687 9.4676 13.6406 9.03119 12.9614 8.70822C12.8016 8.63228 12.4458 8.55822 12.008 8.56338C11.4586 8.57041 11.032 8.70166 10.7034 8.96603C10.0837 9.46478 10.0312 10.0076 10.0312 10.0156C10.0271 10.1017 10.006 10.1863 9.96919 10.2643C9.93237 10.3423 9.88054 10.4123 9.81666 10.4703C9.75279 10.5283 9.67811 10.5732 9.5969 10.6023C9.51569 10.6315 9.42954 10.6443 9.34336 10.6402C9.25718 10.636 9.17266 10.6149 9.09463 10.5781C9.0166 10.5413 8.94659 10.4895 8.88859 10.4256C8.83059 10.3617 8.78574 10.287 8.75659 10.2058C8.72745 10.1246 8.71459 10.0385 8.71875 9.95228C8.7239 9.83838 8.80312 8.81228 9.87984 7.94603C10.4381 7.49697 11.1483 7.26353 11.9892 7.25322C12.5845 7.24619 13.1437 7.34697 13.523 7.52603C14.6578 8.06275 15.2812 8.9576 15.2812 10.0423C15.2812 11.6281 14.2214 12.3401 13.2862 12.9687Z"
              fill="#0075FF"
            />
          </svg>
        </div>
        <div>
          <div className="text-sm font-bold">Need help?</div>
          <div className="text-xs mt-1">Please check our docs</div>
          <div className="w-full mt-1 text-[10px] text-center font-semibold bg-[#060B28] p-3 rounded-xl cursor-pointer">
            DOCUMENTATION
          </div>
        </div>
      </div>
    </aside>
  );
}

export default AsideBar;
