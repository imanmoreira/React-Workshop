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

const HeaderComponent: React.FC<any> = () => {
  /**
   * **TODO** Task 2
   */
  return (
    <HeaderStyle>
      <MenuButton text="Employee" menuOptions={["Menu", "Orders"]} />
      <MenuButton text="Customer" menuOptions={["Menu"]} />
    </HeaderStyle>
  );
};

export const Header = HeaderComponent;
