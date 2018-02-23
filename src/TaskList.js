import React from "react";
import MobileTearSheet from "./MobileTearSheet";
import { List, ListItem } from "material-ui/List";
import Subheader from "material-ui/Subheader";
import Timer from "./Timer";
import editIcon from "./editIcon.png";
import checkIcon from "./checkIcon.png";
import deleteIcon from "./deleteIcon.png";

export default class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.tasks;
  }
  state = { open: false };

  handleNestedListToggle = item => {
    this.setState({ open: item.state.open });
  };

  render() {
    const { tasks } = this.props;
    return (
      <div>
        <br />
        <MobileTearSheet>
          <List>
            <Subheader>To Do List</Subheader>
            {tasks.map(task => (
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
                        <img src={editIcon} alt="play" height="20" width="20" />
                      </button>
                    }
                  />,
                  <Timer duration={task.duration} />,

                  <div>
                    <br />
                    <button
                      className="deleteIcon"
                      onClick={() => {
                        this.props.onDeleteTask(task.id);
                      }}
                    >
                      <img src={deleteIcon} alt="play" height="20" width="20" />
                    </button>
                    <button className="checkIcon">
                      <img src={checkIcon} alt="play" height="20" width="20" />
                    </button>
                  </div>
                ]}
              />
            ))}
          </List>
        </MobileTearSheet>
      </div>
    );
  }
}
