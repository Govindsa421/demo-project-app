import { useState } from "react";
import { taskStatusData, userData } from "../../data/user";
import {
  EllipsisVerticalIcon,
  ListBulletIcon,
  PlusIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";

import "./tasks.scss";
import TaskList from "./TaskList";
import TaskCard from "./TaskCard";

const Tasks = () => {
  const [isMode, setIsMode] = useState(true);

  const tableHeader = [
    "ID",
    "Task Name",
    "Associated Team",
    "Owner",
    "Status",
    "Start Date",
    "End Date",
  ];

  return (
    <div>
      <div className="tasks-header">
        <div className="tasks-title">
          <h1 className="title">Tasks</h1>
          <button className="add-project-button">
            <PlusIcon className="icon" /> Tasks
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
      <div className="tasks-subheader">
        <h1>All Tasks</h1>
      </div>

      {isMode ? (
        <>
          <div className="project-status">
            <div className="status-container">
              {taskStatusData.map((ele) => (
                <div
                  key={ele.name}
                  className={`status ${
                    ele.name === "In Progress 2"
                      ? "not-started"
                      : ele.name === "In Review 2"
                      ? "in-progress"
                      : ele.name === "In Revision 2"
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

          <div className="tasks-grid">
            {userData.map((ele) => (
              <TaskCard key={ele.id} ele={ele} {...ele} />
            ))}
          </div>
        </>
      ) : (
        <div className="tasks-list">
          <div className="tasks-table">
            <table>
              <thead>
                <tr>
                  {tableHeader.map((itm) => (
                    <th key={itm}>{itm}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {userData.map((itm) => (
                  <TaskList key={itm.id} itm={itm} {...itm} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tasks;
