import React, { Component } from "react";

class CompletedTask extends Component {
  render() {
    const { tasks } = this.props.completedTasks;
    return (
      <pre>completed{JSON.stringify(tasks, null, 2)}</pre>
      // <li>
      //   <span className="name">{tasks.id}</span>
      //   <span className="seconds">{tasks.id}</span>
      // </li>
    );
  }
}

export default CompletedTask;
