import React from 'react'
import Task from './Task'
import './TaskList.css'


const TaskList = ({tasks = [], status, onChangeStatus}) =>
  <div className="task-list">
    <div className="task-list-title">
      <strong>{status}</strong>
    </div>
    {tasks.map((task) =>
      <Task key={task.id} task={task} onChangeStatus={onChangeStatus} />
    )}
  </div>
  

export default TaskList
