/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  HomeIcon,
  CogIcon,
  Bars3Icon,
  FolderOpenIcon,
} from "@heroicons/react/24/outline";
import { ListBulletIcon } from "@heroicons/react/20/solid";
import "./sidebar.scss"; // Import the CSS file

const Sidebar = ({ handleActiveTab, isActive }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const menuItems = [
    {
      id: 1,
      name: "Home",
      icon: <HomeIcon className="icon" />,
    },
    {
      id: 2,
      name: "Projects",
      icon: <FolderOpenIcon className="icon" />,
    },
    {
      id: 3,
      name: "Tasks",
      icon: <ListBulletIcon className="icon" />,
    },
    {
      id: 4,
      name: "Settings",
      icon: <CogIcon className="icon" />,
    },
  ];

  return (
    <div className={`sidebar ${isExpanded ? "expanded" : "collapsed"}`}>
      <div className="toggle-button" onClick={() => setIsExpanded(!isExpanded)}>
        <Bars3Icon className="icon" />
      </div>

      <div className="menu">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`menu-item ${isActive === item.name ? "active" : ""}`}
            onClick={() => handleActiveTab(item.name)}
          >
            {item.icon}
            {isExpanded && <span className="label">{item.name}</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
