import React from "react";

import { useState } from "react";

import Header from "./components/Header";

import Tasks from "./components/Tasks";

import AddTask from "./components/AddTask";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Doctor's Appointment",
      dayTime: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      title: "Lunch with John",
      dayTime: "Feb 6th at 12:30pm",
      reminder: false,
    },
    {
      id: 3,
      title: "Dinner with Jane",
      dayTime: "Feb 7th at 6:30pm",
      reminder: true,
    },
    {
      id: 4,
      title: "Pick up kids from school",
      dayTime: "Feb 8th at 10:30am",
      reminder: false,
    },
    {
      id: 5,
      title: "Play with kids",
      dayTime: "Feb 9th at 1:30pm",
      reminder: true,
    },
  ]);

  // add a new task
  const addTask = (task) => {
    console.log(task);
  }

  // delete task by id
  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  // toggle task reminder
  const toggleTaskReminder = (id) => {
    /**
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        task.reminder = !task.reminder;
      }
      return task;
    });
    
    setTasks(newTasks);
    */

    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, reminder: !task.reminder } : task
    );

    setTasks(newTasks);
  };

  return (
    <div className="app">
      <Header title="Tasks Tracker" />

      <h3 style={{ color: "blue" }}>
        Double click on a task to toggle its reminder status.
      </h3>

      <AddTask onAdd={addTask} />

      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleTaskReminder}
        />
      ) : (
        <p>No tasks to display</p>
      )}
    </div>
  );
};

/**
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header title="Tasks Tracker" />
      </div>
    );
  }
}
*/

export default App;
