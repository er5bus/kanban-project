import React from 'react'
import C from '../../constants'
import './Task.css'


const Task = ({task, onChangeStatus}) => {
  
  let _status

  return (
    <div className="task">
      <div className="task-header">
        <div>{task.title}</div>
        <select value={task.status} ref={input => _status = input} onChange={(e) => onChangeStatus(task.id, { status: _status.value })}>
          {C.TASK_STATUSES.map((status, i) => <option value={status} key={i} >{status}</option>)}
        </select>
      </div>
      <div className="task-body">
        {task.description}
      </div>
    </div>
  )
}

export default Task
