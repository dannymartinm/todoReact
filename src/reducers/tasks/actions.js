import * as types from "./types";

export const addTask = task => ({
  type: types.ADD_TASK,
  payload: {
    task
  }
});

export const updateTask = task => ({
  type: types.UPDATE_TASK,
  payload: {
    task
  }
});

export const deleteTask = id => ({
  type: types.DELETE_TASK,
  payload: {
    id
  }
});

export const moveTask = (index, id) => ({
  type: types.MOVE_TASK,
  payload: {
    index,
    id
  }
});

export const taskCompleted = id => ({
  type: types.TASK_COMPLETED,
  payload: {
    id
  }
});
