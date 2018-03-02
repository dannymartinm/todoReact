import React from "react";
import AutoComplete from "material-ui/AutoComplete";
import _ from "lodash";
import TaskList from "./TaskList";

const durations = ["Short", "Medium", "Long"];
class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchItem: "",
      currentlyDisplayed: this.props.tasks
    };
    this.onInputChange = this.onInputChange.bind(this);
  }
  onInputChange = searchText => {
    switch (searchText) {
      default:
        return 0;
      case "Short":
        searchText = 1800;
        break;
      case "Medium":
        searchText = 3600;
        break;
      case "Long":
        searchText = 7200;
        break;
    }
    console.log(searchText);
    const newlyDisplayed = _.filter(
      this.props.tasks,
      task => task.duration === Number(searchText)
    );
    this.setState({
      searchItem: searchText,
      currentlyDisplayed: newlyDisplayed
    });
    console.log(newlyDisplayed);
  };

  handleData(newlyDisplayed) {
    this.props.handleFilter(newlyDisplayed);
  }
  render() {
    return (
      <div>
        <AutoComplete
          floatingLabelText="Type 's', case insensitive"
          filter={AutoComplete.caseInsensitiveFilter}
          dataSource={durations}
          onUpdateInput={this.onInputChange}
        />
        {/* <pre>{JSON.stringify(durations[0].name, null, 2)}</pre> */}
      </div>
    );
  }
}
export default Filter;
