import React, { useState } from "react";
import { Button, Menu, MenuItem } from "@material-ui/core";
import { Link } from "react-router-dom";

interface MenuButtonProps {
  text: string;
  menuOptions: string[];
}

interface MenuButtonState {
  anchorEl: null | HTMLElement;
}

const MenuButtonComponent: React.FC<MenuButtonProps> = ({
  text,
  menuOptions,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const processMenuItems = (options: string[]) => {
    return options.map((option) => (
      <MenuItem
        component={Link}
        to={`/${text.toLowerCase()}/${option.toLowerCase()}`}
      >
        {option}
      </MenuItem>
    ));
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    /**
     * **TODO** TASK 0
     */
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        style={{ color: "white", margin: 1 }}
        onClick={handleClick}
      >
        {text}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {processMenuItems(menuOptions)}
      </Menu>
    </>
  );
};

export const MenuButton = MenuButtonComponent;
