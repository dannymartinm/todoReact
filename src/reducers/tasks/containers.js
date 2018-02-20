import * as action from "./actions";

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: task => {
      dispatch(action.addTask(task));
    }
  };
};

export default {
  mapDispatchToProps
};
