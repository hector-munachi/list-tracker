import React from 'react';

const Tasks = () => {

  const tasks = [
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


  return (
    <div>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </div>
  )
}

export default Tasks
