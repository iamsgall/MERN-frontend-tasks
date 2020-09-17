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
  hasEditing: false,
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
      console.log('get task');
      return {
        ...state,
        task: payload.task,
        loading: false,
        hasEditing: !state.hasEditing,
      };
    case UPDATE_TASK:
      console.log('update');
      return {
        ...state,
        tasks: payload.allTasks,
        task: [],
        loading: false,
        hasEditing: false,
      };

    default:
      return state;
  }
  // return state;
};
