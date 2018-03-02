import React, { Component } from "react";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";

const durations = ["Short", "Medium", "Long"];

export default class DurationList extends Component {
  state = {
    value: null
  };

  handleChange = (event, index, value) => {
    const { seconds } = this.props.durations[index];
    this.props.onChange(seconds);
    this.setState({ value });
    // console.log(value);
  };

  componentDidMount() {
    this.setState({
      value: this.props.durations[0].name
    });
  }

  minutesConverter(seconds) {
    let minutes = 0;

    minutes = seconds / 60;
    return minutes;
  }

  handleDuration = secs => {
    this.setState(
      {
        duration: secs
      },
      () => {
        console.log(this.state.duration);
      }
    );
  };

  render() {
    const { durations } = this.props;

    return (
      <div>
        <SelectField
          floatingLabelText="Duration"
          value={this.state.value}
          onChange={this.handleChange}
        >
          {durations.map(d => (
            <MenuItem
              value={d.name}
              primaryText={d.name}
              secondaryText={this.minutesConverter(d.seconds) + "min"}
            />
          ))}
        </SelectField>
        <br />
      </div>
    );
  }
}
