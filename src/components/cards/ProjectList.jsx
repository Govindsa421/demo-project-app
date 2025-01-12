/* eslint-disable react/prop-types */
import userImg from "../../assets/img/user.png";

const ProjectList = ({ ele }) => {
  const { id, name, progress, userName, status, startDate, endDate } = ele;
  return (
    <tr key={id}>
      <td>{parseInt(id.split("-")[1])}</td>
      <td>{name}</td>
      <td>{progress}%</td>
      <td>
        <div className="card-owner">
          <img src={userImg} alt="user" className="owner-img" />
          <p>{userName}</p>
        </div>
      </td>
      <td className="table-cell">
        <div className="progress-container">
          <div className="progress-bar-wrapper">
            <div
              className={`progress-bar ${
                progress === 100 ? "complete" : "in-progress"
              }`}
              style={{ width: `${progress}%` }}
            >
              {progress}%
            </div>
          </div>
        </div>
      </td>

      <td
        className={`table-cell ${
          status === "Delayed"
            ? "delayed"
            : status === "In Progress"
            ? "in-progress"
            : status === "In Review"
            ? "in-review"
            : status === "Completed"
            ? "completed"
            : status === "Not Started"
            ? "not-started"
            : status === "On Track"
            ? "on-track"
            : "default"
        }`}
      >
        {status}
      </td>

      <td>{startDate}</td>
      <td>{endDate}</td>
    </tr>
  );
};

export default ProjectList;
