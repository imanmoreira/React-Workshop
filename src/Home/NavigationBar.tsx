import React from "react";
import { MenuButton } from "../Components/MenuButton";
// import { Button } from "@material-ui/core";
import styled from "styled-components";

const MENU_OPTIONS = ["Menu", "Orders"];

const HeaderStyle = styled.div`
  min-height: 50pt;
  display: flex;
  flex-direction: row;
  background-color: #1974d3;
`;

class HeaderComponent extends React.Component<any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    /**
     * **TODO** Task 2
     */
    return (
      <HeaderStyle>
        <MenuButton text="Employee" menuOptions={MENU_OPTIONS} />
        <MenuButton text="Customer" menuOptions={MENU_OPTIONS} />
      </HeaderStyle>
    );
  }
}

export const Header = HeaderComponent;
