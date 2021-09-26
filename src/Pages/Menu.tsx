import React, { useState } from "react";
import {
  TableHead,
  TableRow,
  TableCell,
  Table,
  TableBody,
  Checkbox,
  TableContainer,
  Paper,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
} from "@material-ui/core";
import {
  Delete as DeleteIcon,
  Add as AddIcon,
  CheckBox as CheckBoxIcon,
  CheckBoxOutlineBlank as CheckBoxOutlineBlankIcon,
} from "@material-ui/icons";
import { MenuItem } from "../model/types";
import styled from "styled-components";
import { connect } from "react-redux";
import { AppState } from "../state/reducers/state";
import { getMenuItems } from "../state/";
import { AddMenuItem } from "../Components/AddMenuItemModal";
import { Dispatch } from "redux";
import { deleteMenuItems } from "../state/actions/menuActions";

/**
 * **TODO** TASK 1
 */
const MenuContainer = styled.div`
  min-height: 90vh;
  margin: 0 15% 0 15%;
`;

const ButtonContainer = styled.div`
  margin-left: 77%;
`;

interface ReduxMenuProps {
  menuItems: MenuItem[];
  deleteItems: (deleteItems: MenuItem[]) => void; // a function that deletes a list of items from our "backend"
  // also lowkey this function is untested so let me know if it doesn't work lmao
}

interface MenuProps {
  employeeView: true | undefined;
}

type Props = MenuProps & ReduxMenuProps;

const MenuComponent: React.FC<Props> = ({
  employeeView,
  menuItems,
  deleteItems,
}) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  /**
   * **TODO** TASK 7
   */
  const renderRow = (menuItem: MenuItem) => {
    /**
     * **TODO** Task 4
     */
    return (
      <TableRow key={menuItem.name}>
        <TableCell padding="checkbox">
          <Checkbox
            onChange={() => {}}
            inputProps={{ "aria-labelledby": menuItem.name }}
            icon={<CheckBoxOutlineBlankIcon style={{ fontSize: 20 }} />}
            checkedIcon={
              <CheckBoxIcon style={{ fontSize: 20, color: "lightblue" }} />
            }
          />
        </TableCell>
        <TableCell align="center" component="th" scope="row">
          {menuItem.name}
        </TableCell>
        <TableCell align="right">{menuItem.price}</TableCell>
      </TableRow>
    );
  };

  const renderToolBar = (isEmployee: boolean, count: number) => {
    const backColor = count ? "lightblue" : "white";
    return (
      <Toolbar style={{ backgroundColor: backColor }}>
        {count ? (
          <Typography color="initial" variant="h6" component="div">
            {count} selected item
          </Typography>
        ) : (
          <Typography variant="h6" id="tableTitle" component="div">
            SandBucks Menu
          </Typography>
        )}
        {isEmployee && renderEmployeeButtons(count)}
      </Toolbar>
    );
  };

  const renderEmployeeButtons = (count: number) => {
    /**
     * **TODO** Task 5
     */
    return (
      <ButtonContainer>
        {count ? (
          <Tooltip title="Delete Selected Items">
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Add Item">
            <IconButton onClick={() => setIsModalVisible(true)}>
              <AddIcon />
            </IconButton>
          </Tooltip>
        )}
      </ButtonContainer>
    );
  };

  /**
   * **TODO** TASK 7
   */
  const nodeMenuItems = menuItems.map(renderRow);
  while (nodeMenuItems.length < 10) {
    nodeMenuItems.push(
      <TableRow>
        <TableCell />
        <TableCell component="th" scope="row" />
        <TableCell />
      </TableRow>
    );
  }

  /**
   * **TODO** Task 6
   */
  return (
    <>
      <AddMenuItem
        visible={isModalVisible}
        handleClose={() => setIsModalVisible(false)}
      />
      <MenuContainer>
        <Paper>
          {renderToolBar(Boolean(employeeView), selectedItems.length)}
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell align="center">Menu Item</TableCell>
                  <TableCell align="right">Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{nodeMenuItems}</TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </MenuContainer>
    </>
  );
};

const mapStateToProps = (state: AppState) => ({
  menuItems: getMenuItems(state),
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  deleteItems: (menuItems: MenuItem[]) => dispatch(deleteMenuItems(menuItems)),
});

export const Menu = connect(mapStateToProps, mapDispatchToProps)(MenuComponent);
