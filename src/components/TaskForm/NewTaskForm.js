import React from 'react'
import './NewTaskForm.css'


const NewTaskForm = ({onCreateTask=f=>f, onDescriptionChange=f=>f, onTitleChange=f=>f}) =>
  <form className="task-list-form" onSubmit={onCreateTask}>
    <input className="full-width-input" onChange={onTitleChange} type="text" placeholder="Title" />
    <input className="full-width-input" onChange={onDescriptionChange} type="text" placeholder="Description" />
    <button type="submit" className="button"> Save the task </button>
  </form>


export default NewTaskForm
