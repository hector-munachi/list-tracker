import React, { useState, useEffect } from "react";
import './App.css';
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Route} from "react-router-dom";
import About from "./components/About";

function App() {
  const initialState = JSON.parse(window.localStorage.getItem("task"))
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState(initialState)

  useEffect(() => {
    window.localStorage.setItem("task", JSON.stringify(tasks));
  }, [tasks])
  

    // Add task

    const addTask = (task) => {
      const id = Math.floor(Math.random() * 10000) + 1
      const newTask = {id, ...task}
      setTasks([...tasks, newTask])
      if(newTask >= 10) {
        return;
      }
    }

      // Toggle task
      const toggleReminder = (id) => {
        setTasks(tasks.map((task) => task.id === id ?
        {...task, reminder: !task.reminder} : task))
      }
      


    // Delete task
    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id))
    }


  return (
    <Router>
    <div className="container">
     <Header title="List Tracker" onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      <Route path="/" exact render={(props) => (
        <>
        {showAddTask && <AddTask onAdd={addTask} />}
        {tasks.length > 0 ? (
          <Tasks tasks={tasks} onDelete={deleteTask} 
          onToggle={toggleReminder}/>
          ) : ( "No lists to show." )
        }
        </>
      )}/>
      <Route path='/about' component={About} />
     <Footer />
    </div>
    </Router>
  );
}

export default App;
