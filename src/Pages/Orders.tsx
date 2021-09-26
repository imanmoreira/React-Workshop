import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import { AppState } from "../state/reducers/state";
import { getCustomerOrders } from "../state/";

const OrdersContainer = styled.div`
  min-height: 90vh;
`;
const OrdersComponent: React.FC = () => {
  return <OrdersContainer>**TODO** TASK 8</OrdersContainer>;
};

const mapStateToProps = (state: AppState) => ({
  orders: getCustomerOrders(state),
});

export const Orders = connect(mapStateToProps)(withRouter(OrdersComponent));
