import React from "react";
import TextField from "material-ui/TextField";
import DurationList from "./DurationList";

const emptyTask = {
  name: "",
  description: "",
  duration: undefined,
  timeElapsed: 0
};

class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.durations;
    this.state = { ...emptyTask };
  }

  componentDidMount() {
    this.setState(this.props.task);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.task);
  }

  handleChange = e => {
    const { target: { name, value } } = e;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, description, duration } = this.state;
    this.props.onNewTask(name, description, duration);

    this.setState(emptyTask);
  };

  render() {
    const { name, description, duration } = this.state;
    const { durations } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <h2 className="titleForm">New Task </h2>
        <TextField
          id="text-field"
          placeholder="Task name"
          onChange={this.handleChange}
          type="text"
          name="name"
          value={name}
        />

        <br />
        <TextField
          id="text-field"
          placeholder="Description"
          name="description"
          onChange={this.handleChange}
          type="text"
          value={description}
        />
        <br />
        <DurationList
          name="duration"
          type="text"
          durations={durations}
          onChange={this.handleChange}
          value={duration}
        />
        <br />
        <button className="formButton">Add</button>
      </form>
    );
  }
}
export default AddForm;
