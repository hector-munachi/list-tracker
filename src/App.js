import React, { useState } from "react";
import './App.css';
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: "Kill Thanos",
        day: "3rd March at 10:00am",
        reminder: true
      },
      {
        id: 2,
        text: "Save the world",
        day: "7th January at 12:00am",
        reminder: true
      },
      {
        id: 3,
        text: "make a sandwich",
        day: "1st July at 9:00pm",
        reminder: false
      }
    ]
  )

    // Delete task
    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id))
    }


  return (
    <div className="container">
     <Header title="Task Tracker"/>
     {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete={deleteTask}/>
      ) : ( "No tasks to show." )
     }
    </div>
  );
}

export default App;
