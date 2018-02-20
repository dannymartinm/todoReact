import React, { Component } from "react";
import logo from "./todocheck.png";
import "./App.css";
import NestedList from "./NestedList";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AddForm from "./AddForm";
import { connect } from "react-redux";
import { selectors } from "./reducers/tasks";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          id: 1,
          name: "Task 1",
          description: "Read React Documentation",
          duration: 1200
        },
        {
          id: 2,
          name: "Task 2",
          description: "Do Use Cases Diagrams",
          duration: 5400
        },
        {
          id: 3,
          name: "Task 3",
          description: "Identify Components",
          duration: 2700
        }
      ],
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
  }

  addTask(name, description, duration) {
    const id = this.state.tasks.length + 1;

    if (duration === undefined) {
      duration = this.state.durations[0].seconds;
    }
    const tasks = [...this.state.tasks, { id, name, description, duration }];
    this.setState({ tasks });
  }
  render() {
    const { tasks } = this.props;
    const { durations } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to To Do App</h1>
        </header>
        <div className="formContainer">
          <MuiThemeProvider>
            <AddForm onNewTask={this.addTask} durations={durations} />
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

/**
 * - importar action creators del reducer a éste componetne
 * - escribir mapDispatchToProps para que emita acciones con 'addTask'
 * - en onNewTask, llamar a props.addTask para despachar la acción
 */

const withRedux = connect(state => ({ tasks: selectors.getTaskList(state) }));

export default withRedux(App);
