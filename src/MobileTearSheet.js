import React, { Component } from "react";
import PropTypes from "prop-types";
import bottom from "./bottom-tear.svg";

class MobileTearSheet extends Component {
  static propTypes = {
    children: PropTypes.node,
    height: PropTypes.number.isRequired
  };

  static defaultProps = {
    height: 500
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired
  };

  render() {
    const { prepareStyles } = this.context.muiTheme;

    const styles = {
      root: {
        marginBottom: 24,
        marginRight: 24,
        maxWidth: 360,
        width: "100%"
      },
      container: {
        border: "solid 1px #d9d9d9",
        borderBottom: "none",
        height: this.props.height,
        width: 300,
        overflow: "hidden"
      },
      bottomTear: {
        display: "block",
        position: "relative",
        marginTop: -4,
        maxWidth: 300
      }
    };

    return (
      <div style={prepareStyles(styles.root)}>
        <div style={prepareStyles(styles.container)}>{this.props.children}</div>

        <img style={prepareStyles(styles.bottomTear)} src={bottom} />
      </div>
    );
  }
}

export default MobileTearSheet;
