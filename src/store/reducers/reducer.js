import {
  GET_TASKS,
  ADD_TASK,
  DELETE_TASK,
  GET_TASK,
  UPDATE_TASK,
} from '../constants/actionTypes';

const initialState = {
  tasks: [],
  task: [],
  loading: true,
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case GET_TASKS:
      return {...state, tasks: payload.tasks, loading: false};
    case ADD_TASK:
      return {...state, tasks: payload.tasks, loading: false};
    case DELETE_TASK:
      return {...state, tasks: payload.tasks, loading: false};
    case GET_TASK:
      return {...state, task: payload.task, loading: false};
    case UPDATE_TASK:
      return {...state, tasks: payload.tasks, loading: false};

    default:
      return state;
  }
  // return state;
};
