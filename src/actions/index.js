import C from '../constants'


let _id = 1


export function uniqueId() {
  return _id++
}


export function createTask({ title, description }) {
  return {
    type: C.CREATE_TASK,
    payload: {
      id: uniqueId(),
      title,
      description,
      status: 'Unstarted'
    }
  }
}


export function updateTask({ id, params }) {
  return {
    type: C.EDIT_TASK,
    payload: {
      id,
      params
    }
  }
}
