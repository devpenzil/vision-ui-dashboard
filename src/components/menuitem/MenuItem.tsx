import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
interface props {
  label: string;
  status: boolean;
  icon: React.ReactNode;
  title: string;
}
function MenuItem({ label, status, icon, title }: props) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        if (title !== "Not available") {
          const route = title.toLowerCase();
          navigate(`/${route}`);
        } else {
          toast.error("This page is not available");
        }
      }}
      title={title}
      className={
        "w-[200px] h-[54px] hover:bg-[#1A1F37] cursor-pointer mx-auto mt-1 rounded-2xl text-white flex justify-start items-center px-3 text-sm font-medium group " +
        (status && "bg-[#1A1F37]")
      }
    >
      <div
        className={
          "w-[30px] h-[30px] bg-[#1A1F37] rounded-lg group-hover:bg-[#0075FF] flex justify-center items-center " +
          (status && "bg-[#0075FF]")
        }
      >
        {icon}
      </div>
      <div className="ml-6">{label}</div>
    </div>
  );
}

export default MenuItem;
