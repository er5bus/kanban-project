import { uniqueId } from '../actions'
import C from '../constants'


const mockTasks = [
  {
    id: uniqueId(),
    title: 'Learn Readux',
    description: 'The store, actions, and reducers, oh my!',
    status: 'In Progress'
  },
  {
    id: uniqueId(),
    title: 'Peace on Earth',
    description: 'No big deal',
    status: 'In Progress'
  }
]

const tasks = (state = { tasks: mockTasks }, action) => {
  
  const { type, payload } = action 
  if (type === C.CREATE_TASK) {
    return { tasks: state.tasks.concat(payload) }
  }else if (type === C.EDIT_TASK) {
    return { tasks: state.tasks.map((task) => (task.id !== payload.id) ? task : {...task, ...payload.params}) }
  }

  return state
}

export default tasks
