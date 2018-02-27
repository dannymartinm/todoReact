import React from "react";
import play from "./play.png";
import pause from "./pause.png";
import stop from "./stop.png";
import restart from "./restart.png";

class Timer extends React.Component {
  state = {
    currentT: 0,
    interval: null,
    initialTime: null
  };

  componentDidMount() {}

  startTimer = () => {
    if (
      this.state.interval === null &&
      this.state.currentT < this.props.duration
    ) {
      const interval = setInterval(() => {
        this.setState({ currentT: this.state.currentT + 1 });
      }, 1000);

      this.setState({ interval });
    }
  };

  stopTimer = () => {
    clearInterval(this.state.interval);
    this.setState({ interval: null, currentT: this.props.duration });
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
    const counter = this.props.duration - this.state.currentT;

    const hours = Math.floor(counter / 3600);
    const minutes = Math.floor((counter % 3600) / 60);
    const seconds = Math.floor((counter % 3600) % 60);

    const formatTime = num => {
      return `${num < 10 ? `0${num}` : num}`;
    };

    return `${formatTime(hours)} : ${formatTime(minutes)}: ${formatTime(
      seconds
    )}`;
  };
  handleTime = () => {
    var time = this.getTime();
    this.props.onElapsedTime(time);
  };

  render() {
    const time = this.getTime();
    return (
      <div className="clock">
        <div>{time}</div>
        <div>
          <button onClick={this.startTimer}>
            {" "}
            <img src={play} alt="play" height="15" width="15" />
          </button>
          <button onClick={this.stopTimer}>
            <img src={stop} alt="play" height="15" width="15" />
          </button>

          <button onClick={this.pauseTimer}>
            <img src={pause} alt="play" height="15" width="15" />
          </button>
          <button onClick={this.handleTime}>
            <img src={restart} alt="play" height="15" width="15" />
          </button>
        </div>
      </div>
    );
  }
}

export default Timer;
