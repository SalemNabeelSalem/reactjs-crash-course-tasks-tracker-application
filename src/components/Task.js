import { FaTimes } from "react-icons/fa";

const Task = (props) => {
  const { task, onDelete, onToggle } = props;

  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.title}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>

      <p>{task.dayTime}</p>

      <p>{task.reminder ? "Reminder" : "No Reminder"}</p>
    </div>
  );
};

export default Task;
