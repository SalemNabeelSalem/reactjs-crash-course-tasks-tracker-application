import React from "react";

import { useState, useEffect } from "react";

import Header from "./components/Header";

import Tasks from "./components/Tasks";

import AddTask from "./components/AddTask";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchAllTasksAndSetTasksState();
  });

  const fetchAllTasksAndSetTasksState = async () => {
    const tasks = await fetchAllTasks();

    setTasks(tasks);
  };

  const fetchAllTasks = async () => {
    const response = await fetch("http://localhost:5000/tasks");

    const data = await response.json();

    return data;
  };

  const addTask = async (task) => {
    // const id = Math.floor(Math.random() * 10000) + 1;

    task["dateTime"] = task["formatedDateTime"];

    delete task["formatedDateTime"];

    /**
    const newTask = {
      id,
      ...task,
    };
    */

    // console.log(newTask);

    // setTasks([...tasks, newTask]);

    await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then(() => {
        fetchAllTasksAndSetTasksState();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const deleteTask = async (id) => {
    /**
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
    */

    // delete task by id from database
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        fetchAllTasksAndSetTasksState();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // toggle task reminder
  const toggleTaskReminder = async (id) => {
    /**
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        task.reminder = !task.reminder;
      }
      return task;
    });
    
    setTasks(newTasks);
    */

    /**
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, reminder: !task.reminder } : task
    );

    setTasks(newTasks);
    */

    // update task reminder by id from database
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        reminder: !tasks.find((task) => task.id === id).reminder,
      }),
    })
      .then(() => {
        fetchAllTasksAndSetTasksState();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="app">
      <Header
        title="Tasks Tracker"
        onAddTask={() => setShowAddTask(!showAddTask)}
        showAddTask={showAddTask}
      />

      <h3 style={{ color: "blue" }}>
        Double click on a task to toggle its reminder status.
      </h3>

      {showAddTask && <AddTask onAdd={addTask} />}

      {/* <AddTask onAdd={addTask} /> */}

      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleTaskReminder}
        />
      ) : (
        <p style={{ color: "red", textAlign: "center", fontWeight: "bold" }}>
          No tasks to display.
        </p>
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
