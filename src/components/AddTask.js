import { useState } from "react";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import moment from "moment";

const AddTask = (props) => {
  const { onAdd } = props;

  const [title, setTitle] = useState("");
  const [dateTime, setDateTime] = useState(new Date());
  const [reminder, setReminder] = useState(false);

  let handleColor = (time) => {
    return time.getHours() > 12 ? "text-success" : "text-error";
  };

  const onSubmit = (e) => {
    // prevent default behavior of form
    e.preventDefault();

    let formatedDateTime = moment(dateTime).format("MMM Do YYYY h:mm a");

    if (title.trim() === "") {
      alert("Please enter a task");
      return;
    }

    onAdd({
      title,
      formatedDateTime,
      reminder,
    });

    // reset form
    setTitle("");
    setDateTime(new Date());
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Add a task title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            // console.log(`title: ${e.target.value}`);
          }}
        />
      </div>

      {/*
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
      */}

      <DatePicker
        selected={dateTime}
        onChange={(date) => {
          setDateTime(date);

          // console.log(`dateTime: ${date}`);
        }}
        showTimeSelect
        timeClassName={handleColor}
        dateFormat="yyyy/MM/dd hh:mm aa"
        timeFormat="hh:mm aa"
        minDate={new Date()}
      />

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
