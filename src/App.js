import React, { Component } from "react";
import logo from "./todocheck.png";
import "./App.css";
import TaskList from "./TaskList";
import ExampleList from "./ExampleList";
import Task from "./Task";
import NestedList from "./NestedList";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AddForm from "./AddForm";

const style = {
  margin: 12
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          id: 1,
          name: "Task 1",
          description: "Read React Documentation",
          duration: 3600,
          timeElapsed: 0
        },
        {
          id: 2,
          name: "Task 2",
          description: "Do Use Cases Diagrams",
          duration: 3600,
          timeElapsed: 0
        },
        {
          id: 3,
          name: "Task 3",
          description: "Identify Components",
          duration: 1800,
          timeElapsed: 0
        },
        {
          id: 4,
          name: "Task 4",
          description: "Add material-ui",
          duration: 1200,
          timeElapsed: 0
        }
      ]
    };

    this.addTask = this.addTask.bind(this);
  }

  addTask(name, description, duration) {
    const id = this.state.tasks.length + 1;
    const timeElapsed = 0;

    const tasks = [
      ...this.state.tasks,
      { id, name, description, duration, timeElapsed }
    ];
    this.setState({ tasks });
  }
  render() {
    const { tasks } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to To Do App</h1>
        </header>
        <div className="formContainer">
          <MuiThemeProvider>
            <AddForm onNewTask={this.addTask} />
          </MuiThemeProvider>
        </div>
        <div className="listContainer">
          <MuiThemeProvider>
            <NestedList tasks={tasks} />
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}

export default App;
