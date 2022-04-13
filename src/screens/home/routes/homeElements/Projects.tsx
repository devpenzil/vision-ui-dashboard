import React from "react";
import Xd from "../../../../assets/logos/Xd";
import avt1 from "../../../../assets/img/avt1.png";
import avt2 from "../../../../assets/img/avt2.png";
import avt3 from "../../../../assets/img/avt3.png";
import avt4 from "../../../../assets/img/avt4.png";
import avt5 from "../../../../assets/img/avt5.png";
import "./style.scss";
import Atlasian from "../../../../assets/logos/Atlasian";
import Slack from "../../../../assets/logos/Slack";
import Spotify from "../../../../assets/logos/Spotify";
import Jira from "../../../../assets/logos/Jira";
import Invision from "../../../../assets/logos/Invision";
function Projects() {
  const data = [
    {
      name: "Chakra Soft UI Version",
      icon: <Xd />,
      members: [avt1, avt2, avt3, avt4, avt5],
      budget: "	$ 14, 000",
      completion: 60,
    },
    {
      name: "Add Progress Track",
      icon: <Atlasian />,
      members: [avt2, avt4],
      budget: "	$ 3, 000",
      completion: 10,
    },
    {
      name: "Fix Platform Errors",
      icon: <Slack />,
      members: [avt1, avt5],
      budget: "	Not set",
      completion: 60,
    },
    {
      name: "Launch our Mobile App",
      icon: <Spotify />,
      members: [avt1, avt5, avt2, avt3],
      budget: "	$ 32, 000",
      completion: 100,
    },
    {
      name: "Add the New Pricing Page",
      icon: <Jira />,
      members: [avt5, avt4, avt3, avt2, avt1],
      budget: "	$ 4, 00",
      completion: 25,
    },
    {
      name: "Redesign New Online Shop",
      icon: <Invision />,
      members: [avt5, avt3],
      budget: "	$ 7, 600",
      completion: 40,
    },
  ];
  return (
    <div className="satisfacion-card h-full min-w-[1057px] rounded-2xl p-6 overflow-x-hidden no-scrollbar">
      <div>
        <div className="text-lg font-bold">Project</div>
        <div className="text-sm font-semibold text-gray-400 ">
          30 done this month
        </div>
      </div>
      <table className="w-full table-auto mt-4">
        <tr className=" text-[10px] text-gray-400 font-light ">
          <td className="py-2">COMPANIES</td>
          <td>MEMBERS</td>
          <td>BUDGET</td>
          <td>COMPLETEION</td>
        </tr>
        {data.map((obj) => {
          return (
            <tr className="border-t-[1px] border-[#56577A] text-sm">
              <td className="py-4 flex space-x-3    ">
                {obj.icon} <span>{obj.name}</span>
              </td>
              <td>
                <div className="flex">
                  {obj.members.map((obj, i) => {
                    return (
                      <img
                        src={obj}
                        alt=""
                        className={i !== 0 ? "-ml-3" : "m-0"}
                      />
                    );
                  })}
                </div>
              </td>
              <td className="font-bold">{obj.budget}</td>
              <td>
                <div className="font-bold">{obj.completion}</div>
                <div className="h-1 relative max-w-xl rounded-full overflow-hidden">
                  <div className="w-full h-full bg-[#060B28] absolute" />
                  <div
                    className="h-full bg-[#0075FF] absolute"
                    style={{ width: `${obj.completion}%` }}
                  />
                </div>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Projects;
