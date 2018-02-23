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
    this.addTask = this.addTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  addTask(name, description, duration) {
    if (duration === undefined) {
      duration = this.props.durations[0].seconds;
    }
    const task = { name, description, duration };
    this.props.onSubmit(task);
  }

  editTask(id, name, description, duration) {
    const task = { id, name, description, duration };

    this.props.onEdit(task);
  }

  deleteTask(id) {
    this.props.onDelete(id);
  }
  render() {
    const { tasks, editedTask, durations } = this.props;

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
            <TaskList
              tasks={tasks}
              onEditSelect={this.props.onEditSelect}
              onDeleteTask={this.deleteTask}
            />
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}

const withRedux = connect(
  state => ({
    tasks: selectors.getTaskList(state),
    editedTask: selectors.getEditedTask(state),
    durations: selectors.getDurationList(state)
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
      },
      onDelete: id => {
        dispatch(action.deleteTask(id));
      }
    };
  }
);

export default withRedux(App);
