import _ from "lodash";

// selectores

// ayudan a obtener información del state con el formato que necesitan los componentes

// returns a list with all the task objects
const getTaskList = state => {
  return _.map(state.taskList, id => ({
    id,
    ...state.tasks[id]
  }));
};

export default {
  getTaskList
};
