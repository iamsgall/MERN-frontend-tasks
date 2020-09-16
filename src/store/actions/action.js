import {
  ADD_TASK,
  DELETE_TASK,
  GET_TASK,
  GET_TASKS,
  UPDATE_TASK,
} from '../constants/actionTypes';
import API from '../../utils/API';

export const getTasks = () => async dispatch => {
  try {
    const res = await API.get('tasks');
    const tasks = res.data;
    dispatch({
      type: GET_TASKS,
      payload: {tasks},
    });
  } catch (error) {
    console.log(error);
  }
};

export const addTask = task => async dispatch => {
  try {
    await API.post('tasks', task);
    const res = await API.get('tasks');
    const tasks = res.data;
    dispatch({
      type: ADD_TASK,
      payload: {tasks},
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTask = id => async dispatch => {
  try {
    await API.delete(`tasks/${id}`);
    const res = await API.get('tasks');
    const tasks = res.data;
    dispatch({
      type: DELETE_TASK,
      payload: {tasks},
    });
  } catch (error) {
    console.log(error);
  }
};

export const getTask = id => async dispatch => {
  try {
    const res = await API.get(`tasks/${id}`);
    const task = res.data;
    dispatch({
      type: GET_TASK,
      payload: {task},
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateTask = (id, task) => async dispatch => {
  try {
    await API.put(`tasks/${id}`, task);
    const res = await API.get('tasks');
    const allTasks = res.data;
    dispatch({
      type: UPDATE_TASK,
      payload: {allTasks},
    });
  } catch (error) {
    console.log(error);
  }
};
