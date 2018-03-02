import React, { Component } from "react";
import logo from "./todocheck.png";
import "./App.css";
import TaskList from "./TaskList";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AddForm from "./AddForm";
import { connect } from "react-redux";
import { selectors } from "./reducers/tasks";
import * as action from "./reducers/tasks/actions";
import CompletedTask from "./CompletedTask";
import Filter from "./Filter";

class App extends Component {
  constructor(props) {
    super(props);
    this.addTask = this.addTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.taskCompleted = this.taskCompleted.bind(this);
  }

  addTask(name, description, duration) {
    if (duration === undefined) {
      duration = this.props.durations[0].seconds;
    }
    const completed = false;
    const elapsedTime = 0;
    const task = { name, description, duration, elapsedTime, completed };
    this.props.onSubmit(task);
  }

  editTask(id, name, description, duration) {
    const task = { id, name, description, duration };

    this.props.onEdit(task);
  }

  deleteTask(id) {
    this.props.onDelete(id);
  }

  taskCompleted = (id, elapsedTime) => {
    console.log(elapsedTime);
    this.props.onTaskCompleted(id, elapsedTime);
  };

  render() {
    const { tasks, editedTask, durations, completedTasks } = this.props;

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
          <div className="tasksListContainer">
            <MuiThemeProvider>
              <TaskList
                tasks={tasks}
                onEditSelect={this.props.onEditSelect}
                onDeleteTask={this.deleteTask}
                onTaskCompleted={this.taskCompleted}
                onMoveTask={this.props.onMoveTask}
              />
            </MuiThemeProvider>
          </div>
          <div className="completedContainer">
            <MuiThemeProvider>
              <CompletedTask completedTasks={completedTasks} />
            </MuiThemeProvider>
          </div>
        </div>

        {/* <pre>completed{JSON.stringify(completedTasks, null, 2)}</pre> */}
      </div>
    );
  }
}

const withRedux = connect(
  state => ({
    tasks: selectors.getTaskList(state),
    editedTask: selectors.getEditedTask(state),
    durations: selectors.getDurationList(state),
    completedTasks: selectors.getCompletedTaskList(state)
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
      },
      onTaskCompleted: (id, elapsedTime) => {
        dispatch(action.taskCompleted(id, elapsedTime));
      },
      onMoveTask: (index, id) => {
        dispatch(action.moveTask(index, id));
      }
    };
  }
);

export default withRedux(App);
