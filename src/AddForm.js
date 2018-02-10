import React from "react";
import TextField from "material-ui/TextField";

const emptyTask = {
  name: "",
  description: "",
  duration: undefined,
  timeElapsed: 0
};

class AddForm extends React.Component {
  state = {
    ...emptyTask
  };

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
    console.log(this.state.name);
    const { name, description, duration } = this.state;
    this.props.onNewTask(name, description, duration);

    this.setState(emptyTask);
  };
  render() {
    const { name, description, duration } = this.state;
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
          // required
        />
        <br />
        <TextField
          id="text-field"
          placeholder="Description"
          name="description"
          onChange={this.handleChange}
          type="text"
          value={description}
          //  required
        />
        <br />
        <TextField
          id="text-field"
          placeholder="Duration"
          onChange={this.handleChange}
          type="text"
          value={duration}
          //  required
        />
        <br />
        <button className="formButton">Add</button>
      </form>
    );
  }
}
export default AddForm;
