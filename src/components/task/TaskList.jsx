/* eslint-disable react/prop-types */
import IMG from "../../assets/img/user.png";

const TaskList = ({ itm }) => {
  const { id, name, userName, status, startDate, endDate, associateTeam } = itm;
  return (
    <tr key={id}>
      <td>{parseInt(id.split("-")[1])}</td>
      <td>{name}</td>
      <td>{associateTeam}</td>
      <td>
        <div className="card-owner">
          <img src={IMG} alt="user" className="owner-img" />
          <p>{userName}</p>
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

export default TaskList;
