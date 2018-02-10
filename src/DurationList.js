import React, { Component } from "react";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import FlatButton from "material-ui/FlatButton";
import FontIcon from "material-ui/FontIcon";
import { fullWhite } from "material-ui/styles/colors";
import plusIcon from "./timerIcon.svg";

const buttonStyle = {
  margin: 12
};

export default class DurationList extends Component {
  constructor(props) {
    super(props);
    this.state = this.durations;
  }
  state = { value: 1 };

  handleChange = (event, index, value) => this.setState({ value });

  minutesConverter(seconds) {
    let minutes = 0;

    minutes = seconds / 60;
    return minutes;
  }
  render() {
    const { durations } = this.props;
    return (
      <div>
        <SelectField
          floatingLabelText="Duration"
          value={1}
          onChange={this.handleChange}
        >
          {durations.map(duration => (
            <MenuItem
              value={1}
              primaryText={duration.name}
              secondaryText={this.minutesConverter(duration.seconds) + "min"}
            />
          ))}
          <FlatButton
            href={plusIcon}
            target="_blank"
            secondary={true}
            icon={<FontIcon src={plusIcon} />}
            style={buttonStyle}
          />
        </SelectField>
        <br />
      </div>
    );
  }
}
