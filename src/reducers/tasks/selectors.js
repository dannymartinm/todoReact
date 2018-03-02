import _ from "lodash";

// selectores

// ayudan a obtener información del state con el formato que necesitan los componentes

// returns a list with all the task objects

const getTaskList = state => {
  console.log("selector", state.taskList);
  return _.map(state.taskList, id => getTask(state, id));
};

const getTask = (state, id) => {
  // falta manjear cuándo no ése id no existe
  const foundTask = state.tasks[id];
  return foundTask ? { id, ...foundTask } : null;
};
const getDurationList = state => {
  return _.map(state.durations);
};

const getCompletedTaskList = state => {
  const completedTasks = _.filter(state.tasks, task => task.completed);
  return completedTasks;
};

const getEditedTask = state => {
  const { editing } = state;
  return editing ? getTask(state, editing) : null;
};

const getFilterList = state => {
  const filteredArray = _.filter(state.tasks, task => task.duration);
  return filteredArray;
};

export default {
  getTaskList,
  getEditedTask,
  getDurationList,
  getCompletedTaskList,
  getFilterList
};
