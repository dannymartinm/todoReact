import React, { Component } from "react";

class Task extends Component {
  render() {
    const { name, description, duration } = this.props;
    return (
      <li>
        <button className="taskDeleteButton">Eliminar</button>
        <span className="name">{name}</span>
        <span className="description">{description}</span>
        <span className="duration">{duration}</span>
      </li>
    );
  }
}
export default Task;
