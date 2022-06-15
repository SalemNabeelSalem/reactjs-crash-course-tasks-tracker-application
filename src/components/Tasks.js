/**
const tasks = [
  {
    id: 1,
    title: "Doctor's Appointment",
    day: "Monday",
    reminder: true,
  },
  {
    id: 2,
    title: "Lunch with John",
    day: "Tuesday",
    reminder: false,
  },
  {
    id: 3,
    title: "Dinner with Jane",
    day: "Wednesday",
    reminder: true,
  },
  {
    id: 4,
    title: "Pick up kids from school",
    day: "Thursday",
    reminder: false,
  },
];

const Tasks = () => {
  return (
    <>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span>{task.title}</span>

            <span>{" - "}</span>

            <span>{task.day}</span>

            <span>{" - "}</span>

            <span style={task.reminder ? { color: "green" } : { color: "red" }}>
              {task.reminder ? "Reminder" : "No Reminder"}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};
*/

import Task from "./Task";

const Tasks = (props) => {
  const { tasks, onDelete, onToggle } = props;

  return (
    <>
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))}
      </ul>
    </>
  );
};

export default Tasks;
