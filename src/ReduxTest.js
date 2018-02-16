import React from "react";
import { connect } from "react-redux";
import * as actions from "./reducers/tasks/actions";

const ReduxTest = ({ reduxProps, addTask, deleteTask }) => (
  <div>
    <pre>{JSON.stringify(reduxProps, null, 2)}</pre>
    <button onClick={addTask}>agregar</button>
    <button onClick={deleteTask}>Borrar</button>
  </div>
);

// esta función regresa una función
const withReduxConnect = connect(
  state => ({ reduxProps: state }),
  dispatch => ({
    addTask: () => {
      dispatch(
        actions.addTask({
          name: "t1",
          description: "d1",
          duration: 3600,
          timeElapsed: 0
        })
      );
    },
    deleteTask: () => {
      dispatch(actions.deleteTask(1));
    }
  })
);

export default withReduxConnect(ReduxTest);
