import * as types from "./types";
import simpleId from "simple-id";
import _ from "lodash";

const initialState = {
  editing: null,
  taskList: [1],
  tasks: {
    1: {
      name: "Task Redux",
      description: "Learning Redux",
      duration: 3600,
      elapsedTime: 2,
      completed: false
    }
  },
  durations: [
    {
      name: "Short",
      seconds: 1800
    },
    {
      name: "Medium",
      seconds: 3600
    },
    {
      name: "Long",
      seconds: 7200
    }
  ]
};

const deleteTask = (arrayList, id) => _.filter(arrayList, task => task !== id);

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

const handleUpdateTask = (state, { task }) => {
  const { id, ...rest } = task;
  return {
    ...state,
    taskList: [...state.taskList],
    tasks: {
      ...state.tasks,
      [id]: _.merge({}, state.tasks[id], rest)
    }
  };
};

const handleTaskCompleted = (state, { id, elapsedTime }) => {
  const task = {
    ..._.get(state.tasks, id),
    completed: true,
    elapsedTime: elapsedTime
  };

  return {
    ...state,
    taskList: deleteTask(state.taskList, id),
    tasks: {
      ...state.tasks,
      [id]: task
    }
  };
};

const handleMoveTask = (state, { index, id }) => {
  console.log("reducer", index, id);
  const i = state.taskList.indexOf(id);
  const item = state.taskList[index];

  const beforeItem = _.slice(state.taskList, 0, index);
  const afterItem = _.slice(state.taskList, index + 1, state.taskList.length);

  const withoutId = array => _.filter(array, e => e !== id);

  console.log("before =>", beforeItem, withoutId(beforeItem));
  console.log("after =>", afterItem, withoutId(afterItem));

  const newList = _.concat(
    withoutId(beforeItem),
    [id],
    [item],
    withoutId(afterItem)
  );

  console.log(newList);
  return {
    ...state,
    taskList: newList
  };
};

const handleDeleteTask = (state, { id }) => {
  return {
    ...state,
    taskList: deleteTask(state.taskList, id),
    tasks: _.omit(state.tasks, id)
  };
};

const handleEditTask = (state, { id }) => {
  return {
    ...state,
    editing: id
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TASK:
      return handleAddTask(state, action.payload);
    case types.DELETE_TASK:
      return handleDeleteTask(state, action.payload);
    case types.UPDATE_TASK:
      return handleUpdateTask(state, action.payload);
    case types.TASK_COMPLETED:
      return handleTaskCompleted(state, action.payload);
    case types.MOVE_TASK:
      return handleMoveTask(state, action.payload);
    case types.EDIT_TASK:
      return handleEditTask(state, action.payload);
    default:
      return state;
  }
};

export default reducer;
