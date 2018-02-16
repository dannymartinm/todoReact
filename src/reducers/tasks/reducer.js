import * as types from "./types";
import simpleId from "simple-id";
import _ from "lodash";

const initialState = {
  taskList: [1],
  tasks: {
    1: {
      name: "Task Redux",
      description: "Learning Redux",
      duration: 3600,
      elapsedTime: 0,
      completed: false
    }
  }
};

const handleAddTask = (state, { task }) => {
  const id = simpleId();

  return {
    ...state,
    taskList: [...state.taskList, id],
    tasks: {
      ...state.tasks,
      [id]: task
    }
  };
};

const handleDeleteTask = (state, { id }) => {
  const deleteTask = (arrayList, id) => {
    const newTasksList = _.filter(arrayList, function(task) {
      return task !== id;
    });
    return newTasksList;
  };

  return {
    ...state,
    taskList: deleteTask(state.taskList, id),
    tasks: _.omit(state.tasks, id)
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TASK:
      return handleAddTask(state, action.payload);
    case types.DELETE_TASK:
      return handleDeleteTask(state, action.payload);
    default:
      return state;
  }
};

export default reducer;
