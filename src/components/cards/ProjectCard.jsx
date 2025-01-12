/* eslint-disable react/prop-types */
import {
  CalendarDaysIcon,
  FolderIcon,
  PaperClipIcon,
} from "@heroicons/react/24/outline";
import IMG from "../../assets/img/user.png";

const ProjectCard = ({ ele }) => {
  const { id, name, progress, startDate, endDate, team, files } = ele;
  return (
    <div key={id} className="card">
      <div className="card-header">
        <div className="card-title">
          <FolderIcon className="icon" />
          <h1>{name}</h1>
        </div>
        <div className="card-id">ID: {id}</div>
      </div>
      <div className="card-progress">
        <div className="progress-bar">
          <div
            className="progress"
            style={{
              width: `${progress}%`,
              backgroundColor: "green",
            }}
          >
            {progress}%
          </div>
        </div>
      </div>
      <div className="card-dates">
        <CalendarDaysIcon className="icon" />
        <p>{`${startDate} - ${endDate}`}</p>
      </div>
      <div className="card-team">
        <div style={{ display: "flex", gap: "10px" }}>
          <div className="team-members">
            <img src={IMG} alt="user" className="team-member" />
            <img src={IMG} alt="user" className="team-member" />
            <img src={IMG} alt="user" className="team-member" />
          </div>
          <p>{team}</p>
        </div>

        <div className="card-files">
          <PaperClipIcon className="icon" />
          <p className="file-count">{files}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
