import React from "react";
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

const MenuContainer = styled.div`
  min-height: 90vh;
  margin: 0 15% 0 15%;
  background-color: red;
`;

const ButtonContainer = styled.div`
  margin-left: 77%;
`;

interface ReduxMenuProps {
  menuItems: MenuItem[];
}

interface MenuProps {
  employeeView: true | undefined;
}

interface MenuState {
  selectedItems: MenuItem[];
  isModalVisible: boolean;
}

type Props = MenuProps & ReduxMenuProps;

class MenuComponent extends React.Component<Props, MenuState> {
  constructor(props: Props) {
    super(props);

    this.state = {
      selectedItems: [],
      isModalVisible: false,
    };
  }

  renderRow(menuItem: MenuItem) {
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
  }

  renderToolBar(isEmployee: boolean, count: number) {
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
        {isEmployee && this.renderEmployeeButtons(count)}
      </Toolbar>
    );
  }

  renderEmployeeButtons(count: number) {
    /**
     * **TODO** Task 5
     */
    return (
      <ButtonContainer>
        {count ? (
          <Tooltip title="Delete Selected Items">
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Add Item">
            <IconButton
              aria-label="add"
              onClick={() => this.setState({ isModalVisible: true })}
            >
              <AddIcon />
            </IconButton>
          </Tooltip>
        )}
      </ButtonContainer>
    );
  }

  render() {
    const menuItems = this.props.menuItems.map(this.renderRow);
    while (menuItems.length < 10) {
      menuItems.push(
        <TableRow>
          <TableCell />
          <TableCell component="th" scope="row" />
          <TableCell />
        </TableRow>
      );
    }
    /**
     * **TODO** TASK 1
     */
    return (
      <>
        <AddMenuItem
          visible={this.state.isModalVisible}
          handleClose={() => {
            this.setState({ isModalVisible: false });
          }}
        ></AddMenuItem>
        <MenuContainer>
          <Paper>
            {this.renderToolBar(
              Boolean(this.props.employeeView),
              this.state.selectedItems.length
            )}
            <TableContainer>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell align="center">Menu Item</TableCell>
                    <TableCell align="right">Price</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>{menuItems}</TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </MenuContainer>
        {/**
         * **TODO** Task 6
         */}
      </>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  menuItems: getMenuItems(state),
});

export const Menu = connect<ReduxMenuProps, {}, {}, AppState>(mapStateToProps)(
  MenuComponent
);
