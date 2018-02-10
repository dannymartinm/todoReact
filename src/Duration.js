import React, { Component } from "react";

class Duration extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, seconds } = this.props;
    return (
      <li>
        <span className="name">{name}</span>
        <span className="seconds">{seconds}</span>
      </li>
    );
  }
}

export default Duration;
