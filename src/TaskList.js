import React from "react";
import Task from "./Task";

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.tasks;
  }

  render() {
    const { tasks } = this.props;
    return (
      <div className="list">
        <h1>Tasks</h1>
        <ul>
          {tasks.map((task, i) => <Task tasks={tasks} key={i} {...task} />)}
        </ul>
      </div>
    );
  }
}

export default TaskList;
