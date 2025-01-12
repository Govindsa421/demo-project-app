import { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import {
  AdjustmentsHorizontalIcon,
  BellAlertIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  SpeakerWaveIcon,
} from "@heroicons/react/24/outline";
import userImg from "../../assets/img/user.png";
import Cards from "../cards";
import Tasks from "../task";
import Home from ".";
import dashboardStyles from "./dashboard.module.scss"; // Import SCSS

const DashboardComponent = () => {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <div className={dashboardStyles.dashboard}>
      <Sidebar
        handleActiveTab={setActiveTab}
        isActive={activeTab}
        className={dashboardStyles.sidebar}
      />
      <div className={dashboardStyles.content}>
        {/* Header */}
        <div className={dashboardStyles.header}>
          <div className={dashboardStyles.logo}>Techyon</div>
          <div className={dashboardStyles.actions}>
            <MagnifyingGlassIcon className={dashboardStyles.icon} />
            <AdjustmentsHorizontalIcon className={dashboardStyles.icon} />
            <SpeakerWaveIcon className={dashboardStyles.icon} />
            <div className={dashboardStyles.notification}>
              <div className={dashboardStyles.bell}>
                <BellAlertIcon
                  className={dashboardStyles.icon}
                  style={{ color: "white" }}
                />
              </div>
              <div className={dashboardStyles.count}>+99</div>
            </div>
            <div className={dashboardStyles.profile}>
              <img src={userImg} alt="user" className={dashboardStyles.image} />
              <ChevronDownIcon className={dashboardStyles.dropdown} />
            </div>
          </div>
        </div>
        {/* Main Content */}
        <div className={dashboardStyles.main}>
          {activeTab === "Home" && <Home />}
          {activeTab === "Projects" && <Cards />}
          {activeTab === "Tasks" && <Tasks />}
        </div>
      </div>
    </div>
  );
};

export default DashboardComponent;
