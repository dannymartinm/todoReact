import _ from "lodash";

// selectores

// ayudan a obtener información del state con el formato que necesitan los componentes

// returns a list with all the task objects

const getTaskList = state => {
  return _.map(state.taskList, id => getTask(state, id));
};

const getTask = (state, id) => {
  // falta manjear cuándo no ése id no existe
  const foundTask = state.tasks[id];
  console.log("foundtask", foundTask);
  return foundTask ? { id, ...foundTask } : null;
};
const getDurationList = state => {
  return _.map(state.durations);
};

const getCompletedTaskList = state => {
  return _.filter(state.tasks, task => task.completed);
};

const getEditedTask = state => {
  const { editing } = state;
  return editing ? getTask(state, editing) : null;
};

export default {
  getTaskList,
  getEditedTask,
  getDurationList,
  getCompletedTaskList
};
