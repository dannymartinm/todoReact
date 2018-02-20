import React, { Component } from "react";
import logo from "./todocheck.png";
import "./App.css";
import TaskList from "./TaskList";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AddForm from "./AddForm";
import { connect } from "react-redux";
import { selectors } from "./reducers/tasks";
import * as action from "./reducers/tasks/actions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // tasks: [
      //   {
      //     id: 1,
      //     name: "Task 1",
      //     description: "Read React Documentation",
      //     duration: 1200
      //   },
      //   {
      //     id: 2,
      //     name: "Task 2",
      //     description: "Do Use Cases Diagrams",
      //     duration: 5400
      //   },
      //   {
      //     id: 3,
      //     name: "Task 3",
      //     description: "Identify Components",
      //     duration: 2700
      //   }
      // ],
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

    this.addTask = this.addTask.bind(this);
    this.editTask = this.editTask.bind(this);
  }

  addTask(name, description, duration) {
    if (duration === undefined) {
      duration = this.state.durations[0].seconds;
    }
    const task = { name, description, duration };
    this.props.onSubmit(task);
  }

  editTask(id, name, description, duration) {
    const task = { id, name, description, duration };
    console.log(task);
    this.props.onEdit(task);
  }
  render() {
    const { tasks, editedTask } = this.props;
    const { durations } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to To Do App</h1>
        </header>
        <div className="formContainer">
          <MuiThemeProvider>
            <AddForm
              editing={editedTask}
              onNewTask={this.addTask}
              durations={durations}
              onEditTask={this.editTask}
            />
          </MuiThemeProvider>
        </div>

        <div className="listContainer">
          <MuiThemeProvider>
            <TaskList tasks={tasks} onEditSelect={this.props.onEditSelect} />
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}

/**
 * - importar action creators del reducer a éste componente
 * - escribir mapDispatchToProps para que emita acciones con 'addTask'
 * - en onNewTask, llamar a props.addTask para despachar la acción
 */

const withRedux = connect(
  state => ({
    tasks: selectors.getTaskList(state),
    editedTask: selectors.getEditedTask(state)
  }),
  dispatch => {
    return {
      onSubmit: task => {
        dispatch(action.addTask(task));
      },
      onEdit: task => {
        dispatch(action.updateTask(task));
      },
      onEditSelect: id => {
        dispatch(action.editTask(id));
      }
    };
  }
);

export default withRedux(App);
