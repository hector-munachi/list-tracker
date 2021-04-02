import React, { useState } from 'react';

const AddTask = ({onAdd}) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if(!text) {
    alert("Please add a list")
    return
    }
    onAdd({text, day, reminder})
    setText("")
    setDay("")
    setReminder(false)
  }

  return (
    <div>
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label>List</label>
          <input type="text" placeholder="Add list" value={text} onChange={(e) => setText(
            e.target.value)}/>
        </div>
        <div className="form-control">
          <label>Day & Time</label>
          <input type="text"  placeholder="Add day & time" value={day} onChange={(e) => setDay(
            e.target.value)}/>
        </div>
        <div className="form-control form-control-check">
          <label>Set Reminder</label>
          <input type="checkbox" value={reminder} checked={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}/>
        </div>
        <input type="submit" value="Save List" className="btn btn-block"/>
      </form>
    </div>
  )
}

export default AddTask
