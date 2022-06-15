import { useState } from "react";

const AddTask = (props) => {
  const { onAdd } = props;

  const [title, setTask] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [reminder, setReminder] = useState(false);

  return (
    <form
      className="add-form"
      onSubmit={(e) => onAdd({ title, dateTime, reminder })}
    >
      <div className="form-control">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Add a task title"
          value={title}
          onChange={(e) => {
            setTask(e.target.value);
            // console.log(`title: ${e.target.value}`);
          }}
        />
      </div>

      <div className="form-control">
        <label htmlFor="day-and-time">Day & Time</label>
        <input
          type="text"
          id="date-time"
          name="dateTime"
          placeholder="Add a task day & time"
          value={dateTime}
          onChange={(e) => {
            setDateTime(e.target.value);
            // console.log(`dayTime: ${e.target.value}`);
          }}
        />
      </div>

      <div className="form-control form-control-check">
        <label htmlFor="reminder">Set Reminder</label>
        <input
          type="checkbox"
          id="reminder"
          name="reminder"
          checked={reminder}
          onChange={(e) => {
            setReminder(e.target.checked);
            // console.log(`reminder: ${e.target.checked}`);
          }}
        />
      </div>

      <input
        type="submit"
        id="submit"
        value="Add Task"
        className="btn btn-block"
      />
    </form>
  );
};

export default AddTask;
