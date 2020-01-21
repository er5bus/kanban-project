import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TasksPage } from '../Task'
import { NewTaskForm } from '../TaskForm'
import { createTask, updateTask } from '../../actions'
import C from '../../constants'


class Kanban extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      showNewCardForm: false,
      title: '',
      description: ''
    }
  }

  onTitleChange = e => {
    this.setState({ title: e.target.value })
  }

  onDescriptionChange = e => {
    this.setState({ description: e.target.value })
  }

  resetForm() {
    this.setState({
      showNewCardForm: false,
      title: '',
      description: ''
    })
  }
  
  onCreateTask = (e) => {
    e.preventDefault();
    this.props.dispatch( createTask(this.state) )
    this.resetForm()
  }

  onChangeStatus = (id, props) => {
    e.preventDefault()
    this.props.dispatch( updateTask({id, props}) )
  }

  toggleForm = () => {
    this.setState({ showNewCardForm: !this.state.showNewCardForm })
  }

  render() {
    const { tasks } = this.props

    return (
      <div className="main-content">
        <div className="task-new">
          <button className="button button-default" onClick={this.toggleForm}>
            + New Task
          </button>
          {this.state.showNewCardForm && (<NewTaskForm onCreateTask={this.onCreateTask} onTitleChange={this.onTitleChange} onDescriptionChange={this.onDescriptionChange} />)}
        </div>
        <TasksPage tasks={tasks} task_statuses={C.TASK_STATUSES} onChangeStatus={onChangeStatus} />
      </div>
    )
  }
}


const mapStateToProps = state => { 
  return { tasks: state.tasks }
}


export default connect(mapStateToProps)(Kanban)
