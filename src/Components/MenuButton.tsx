import React from "react";
import { Button, Menu, MenuItem } from "@material-ui/core";
import { Link } from "react-router-dom";

interface MenuButtonProps {
  text: string;
  menuOptions: string[];
}

interface MenuButtonState {
  anchorEl: null | HTMLElement;
}

class MenuButtonComponent extends React.Component<
  MenuButtonProps,
  MenuButtonState
> {
  constructor(props: MenuButtonProps) {
    super(props);

    this.state = {
      anchorEl: null,
    };
  }
  processMenuItems(options: string[]) {
    return options.map((option) => {
      const to =
        option.toLowerCase() === "home"
          ? ""
          : `/${this.props.text.toLowerCase()}/${option.toLowerCase()}`;

      return (
        <MenuItem component={Link} to={to}>
          {option}
        </MenuItem>
      );
    });
  }

  handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    this.setState({
      anchorEl: event.currentTarget,
    });
  }

  handleClose() {
    this.setState({
      anchorEl: null,
    });
  }

  render() {
    return (
      <>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          style={{ color: "white", margin: 1 }}
          onClick={this.handleClick.bind(this)}
        >
          {this.props.text}
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          keepMounted
          open={Boolean(this.state.anchorEl)}
          onClose={this.handleClose.bind(this)}
        >
          {this.processMenuItems(this.props.menuOptions)}
        </Menu>
      </>
    );
  }
}

export const MenuButton = MenuButtonComponent;
