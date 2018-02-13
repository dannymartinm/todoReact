import React from "react";

class Timer extends React.Component {
  state = {
    currentT: 0,
    duration: 5400,
    interval: null,
    initialTime: null
  };

  componentDidMount() {}

  startTimer = () => {
    if (
      this.state.interval === null &&
      this.state.currentT < this.state.duration
    ) {
      const interval = setInterval(() => {
        this.setState({ currentT: this.state.currentT + 1 });
      }, 1000);

      this.setState({ interval });
    }
  };

  stopTimer = () => {
    clearInterval(this.state.interval);
    this.setState({
      interval: null,
      currentT: this.state.duration
    });
  };

  pauseTimer = () => {
    clearInterval(this.state.interval);
    this.setState({
      interval: null
    });
  };

  resetTimer = () => {
    clearInterval(this.state.interval);
    this.setState({
      currentT: 0,
      interval: null
    });
  };

  getTime = () => {
    const counter = this.state.duration - this.state.currentT;

    const hours = Math.floor(counter / 3600);
    const minutes = Math.floor((counter % 3600) / 60);
    const seconds = Math.floor((counter % 3600) % 60);

    return `${hours < 10 ? "0" + hours : hours} : ${
      minutes < 10 ? "0" + minutes : minutes
    } : ${seconds < 10 ? "0" + seconds : seconds}`;
  };

  render() {
    return (
      <div className="clock">
        <div>{this.getTime()}</div>
        <div>
          <button onClick={this.startTimer}>Start</button>
          <button onClick={this.stopTimer}>Stop</button>
          <button onClick={this.pauseTimer}>Pause</button>
          <button onClick={this.resetTimer}>Reset</button>
        </div>
      </div>
    );
  }
}

export default Timer;
