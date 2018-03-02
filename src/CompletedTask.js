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
        <MobileTearSheet>
          <h2>Completed</h2>
          <List>
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
