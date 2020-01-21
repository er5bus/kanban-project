import React from 'react'
import TaskList from './TaskList'
import './TasksPage.css'


const TasksPage = ({ tasks = [], task_statuses = [], onChangeStatus }) =>
  <div className="tasks">
    <div className="task-lists">
      { task_statuses.map((status) =>
        <TaskList key={status} status={status} tasks={tasks.filter(task => task.status === status)} onChangeStatus={onChangeStatus} />
      )}
    </div>
  </div>


export default TasksPage
