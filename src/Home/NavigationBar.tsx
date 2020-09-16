import React from "react";
import { MenuButton } from "../Components/MenuButton";
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
        <MenuButton text="Home" menuOptions={["Home"]} />
        <MenuButton text="Employee" menuOptions={["Menu"]} />
        <MenuButton text="Customer" menuOptions={["Menu", "Orders"]} />
      </HeaderStyle>
    );
  }
}

export const Header = HeaderComponent;
