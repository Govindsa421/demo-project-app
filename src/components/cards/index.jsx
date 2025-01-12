import { useState } from "react";
import { projectStatusData, userData } from "../../data/user";
import {
  EllipsisVerticalIcon,
  ListBulletIcon,
  PlusIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";
import "./cards.scss";
import ProjectList from "./ProjectList";
import ProjectCard from "./ProjectCard";

const Cards = () => {
  const [isMode, setIsMode] = useState(true);

  const tableHeader = [
    "ID",
    "Project Name",
    "%",
    "Owner",
    "Tasks",
    "Status",
    "Start Date",
    "End Date",
  ];

  return (
    <div>
      <div className="cards-header">
        <div className="cards-title">
          <h1 className="title">Projects</h1>
          <button className="add-project-button">
            <PlusIcon className="icon" /> Projects
          </button>
        </div>
        <div className="view-toggle">
          <ListBulletIcon
            className={`icon ${!isMode && "active"}`}
            onClick={() => setIsMode(false)}
          />
          <SquaresPlusIcon
            className={`icon ${isMode && "active"}`}
            onClick={() => setIsMode(true)}
          />
          <EllipsisVerticalIcon className="icon" />
        </div>
      </div>
      <div className="cards-subheader">
        <h1>All Projects</h1>
      </div>

      {isMode ? (
        <>
          <div className="project-status">
            <div className="status-container">
              {projectStatusData.map((ele) => (
                <div
                  key={ele.name}
                  className={`status ${
                    ele.name === "Not started 2"
                      ? "not-started"
                      : ele.name === "In Progress 2"
                      ? "in-progress"
                      : ele.name === "Archived 2"
                      ? "archived"
                      : ele.name === "Completed 2"
                      ? "completed"
                      : ""
                  }`}
                >
                  {ele.name}
                </div>
              ))}
            </div>
          </div>

          <div className="cards-grid">
            {userData.map((ele) => (
              <ProjectCard key={ele.id} ele={ele} {...ele} />
            ))}
          </div>
        </>
      ) : (
        <div className="cards-list">
          <div className="cards-table">
            <table>
              <thead>
                <tr>
                  {tableHeader.map((itm) => (
                    <th key={itm}>{itm}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {userData.map((ele) => (
                  <ProjectList key={ele.id} ele={ele} {...ele} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cards;
