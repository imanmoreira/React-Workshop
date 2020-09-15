import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const OrdersContainer = styled.div`
  min-height: 90vh;
`;
class OrdersComponent extends React.Component<any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return <OrdersContainer>**TODO** TASK 7</OrdersContainer>;
  }
}

export const Orders = withRouter(OrdersComponent);
