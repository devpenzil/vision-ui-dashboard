import React from "react";
interface props {
  label: string;
  status: boolean;
}
function MenuItem({ label, status }: props) {
  return (
    <div
      className={
        "w-[200px] h-[54px] hover:bg-[#1A1F37] cursor-pointer mx-auto mt-1 rounded-2xl text-white flex justify-start items-center px-3 text-sm font-medium group " +
        (status && "bg-[#1A1F37]")
      }
    >
      <div
        className={
          "w-[30px] h-[30px] bg-[#1A1F37] rounded-lg group-hover:bg-[#0075FF] " +
          (status && "bg-[#0075FF]")
        }
      ></div>
      <div className="ml-6">{label}</div>
    </div>
  );
}

export default MenuItem;
