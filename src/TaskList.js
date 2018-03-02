import React from "react";
import MobileTearSheet from "./MobileTearSheet";
import { List, ListItem } from "material-ui/List";
import Timer from "./Timer";
import editIcon from "./editIcon.png";
import checkIcon from "./checkIcon.png";
import deleteIcon from "./deleteIcon.png";
import swapIcon from "./swap.png";
import _ from "lodash";
import AutoComplete from "material-ui/AutoComplete";
const durations = ["Short", "Medium", "Long"];

export default class TaskList extends React.Component {
  state = { open: false, time: 0 };
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
  }
  onInputChange = searchText => {
    if (searchText === "") {
      this.setState({
        searchItem: searchText,
        currentlyDisplayed: this.props.tasks
      });
      console.log("state", this.state.currentlyDisplayed);
      console.log("props", this.props.tasks);
    }
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
    const newlyDisplayed = _.filter(
      this.props.tasks,
      task => task.duration === Number(searchText)
    );
    this.setState({
      searchItem: searchText,
      currentlyDisplayed: newlyDisplayed
    });
  };

  componentWillMount() {
    this.setState({
      searchItem: "",
      currentlyDisplayed: this.props.tasks
    });
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ searchItem: "", currentlyDisplayed: nextProps.tasks });
  }

  handleCompleted = id => {
    const aux = this.state.time;
    this.props.onTaskCompleted(id, aux);
  };

  handleGetTime = aux => {
    console.log("timetasks", aux);
    this.setState({ time: aux });
  };
  handleGetIndex = id => {
    const currentIndex = _.findIndex(this.props.tasks, task => {
      return task.id === id;
    });

    // if (currentIndex === 0) {
    //   if (this.props.tasks.length === 1) {
    //     console.log("unica tarea");
    //   } else {
    //     this.props.onMoveTask(currentIndex + 1, id);
    //   }
    // } else if (currentIndex === this.props.tasks.length - 1) {
    //   console.log("CI", currentIndex);
    //   this.props.onMoveTask(currentIndex - 1, id);
    // } else {
    //   this.props.onMoveTask(currentIndex + 1, id);
    // }
  };
  render() {
    const tasks = this.state.currentlyDisplayed;

    return (
      <div>
        <br />
        <MobileTearSheet>
          <h2>To Do</h2>
          <div>
            <AutoComplete
              floatingLabelText="Durations Filter"
              filter={AutoComplete.caseInsensitiveFilter}
              dataSource={durations}
              onUpdateInput={this.onInputChange}
            />
            {/* <pre>{JSON.stringify(this.state.currentlyDisplayed, null, 2)}</pre> */}
          </div>
          <List>
            {tasks.map(task => (
              <div>
                <ListItem
                  className="listHeader"
                  primaryText={task.name}
                  leftIcon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                    </svg>
                  }
                  initiallyOpen={false}
                  primaryTogglesNestedList={true}
                  nestedItems={[
                    <ListItem
                      className="listsubHeader"
                      key={1}
                      primaryText={task.description}
                      rightIcon={
                        <button
                          className="iconButton"
                          onClick={() => {
                            this.props.onEditSelect(task.id);
                          }}
                        >
                          <img
                            src={editIcon}
                            alt="play"
                            height="20"
                            width="20"
                          />
                        </button>
                      }
                      leftIcon={
                        <button
                          className="iconButton"
                          onClick={() => {
                            this.handleGetIndex(task.id);
                          }}
                        >
                          <img
                            src={swapIcon}
                            alt="play"
                            height="20"
                            width="20"
                          />
                        </button>
                      }
                    />,
                    <Timer
                      duration={task.duration}
                      onElapsedTime={this.handleGetTime}
                    />,
                    <div>
                      <br />
                      <button
                        className="deleteIcon"
                        onClick={() => {
                          this.props.onDeleteTask(task.id);
                        }}
                      >
                        <img
                          src={deleteIcon}
                          alt="play"
                          height="20"
                          width="20"
                        />
                      </button>
                      <button
                        className="checkIcon"
                        onClick={() => {
                          this.handleCompleted(task.id);
                        }}
                      >
                        <img
                          src={checkIcon}
                          alt="play"
                          height="20"
                          width="20"
                        />
                      </button>
                    </div>
                  ]}
                />
              </div>
            ))}
          </List>
        </MobileTearSheet>
      </div>
    );
  }
}
