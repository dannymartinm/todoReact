import React from "react";
import MobileTearSheet from "./MobileTearSheet";
import { List, ListItem } from "material-ui/List";
import Subheader from "material-ui/Subheader";
import Divider from "material-ui/Divider";
import { darkBlack } from "material-ui/styles/colors";
export default class TaskList extends React.Component {
  state = { open: false };

  handleNestedListToggle = item => {
    this.setState({ open: item.state.open });
  };

  render() {
    const { completedTasks } = this.props;
    return (
      <div>
        <br />
        {/* <MobileTearSheet>
          <List>
            <Subheader>Completed Tasks</Subheader>
            {completedTasks.map(task => (
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
                  />,
                  <ListItem primaryText={task.elapsedTime} />
                ]}
              />
            ))}
          </List>
        </MobileTearSheet> */}
        <MobileTearSheet>
          <List>
            <Subheader>Completed Tasks</Subheader>
            {completedTasks.map(task => (
              <div>
                <ListItem
                  primaryText={task.name}
                  secondaryText={
                    <p>
                      <span style={{ color: darkBlack }}>
                        {task.elapsedTime} mins
                      </span>
                      -- {task.description}
                    </p>
                  }
                  secondaryTextLines={2}
                />
                <Divider inset={true} />
              </div>
            ))}
          </List>
        </MobileTearSheet>
      </div>
    );
  }
}
