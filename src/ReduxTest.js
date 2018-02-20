import React from "react";
import { connect } from "react-redux";
import * as actions from "./reducers/tasks/actions";

const ReduxTest = ({
  state,
  addTask,
  deleteTask,
  updateTask,
  taskCompleted,
  moveToTop
}) => (
  <div>
    <pre>{JSON.stringify(state, null, 2)}</pre>
    <button onClick={addTask}>agregar</button>
    <button onClick={deleteTask}>Borrar</button>
    <button onClick={updateTask}>Editar</button>
    <button onClick={taskCompleted}>Completado </button>
    <button
      onClick={() => moveToTop(state.taskList[state.taskList.length - 1])}
    >
      Mover{" "}
    </button>
  </div>
);

// esta función regresa una función
const withReduxConnect = connect(
  state => ({ state }),
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
    },
    updateTask: () => {
      dispatch(
        actions.updateTask({
          id: 1,
          name: "t1",
          description: "nueva descripcion",
          duration: 3600,
          timeElapsed: 0
        })
      );
    },
    taskCompleted: () => {
      dispatch(actions.taskCompleted(1));
    },
    moveToTop: id => {
      dispatch(actions.moveTask(0, id));
    }
  })
);

export default withReduxConnect(ReduxTest);
