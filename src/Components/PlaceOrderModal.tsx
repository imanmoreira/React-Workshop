import React, { useState } from "react";
import { Modal, TextField, Button, Typography } from "@material-ui/core";
import { MenuItem } from "../model/types";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { placeOrder } from "../state/actions/menuActions";
import styled from "styled-components";

/**
 * ** TASK 6 **
 */

interface PlaceOrderProps {}

interface ReduxProps {
  handlePlaceOrder: (name: string, order: MenuItem[]) => void; // function for placing the order into the
}

type Props = PlaceOrderProps & ReduxProps;

export const PlaceOrderModal: React.FC<Props> = ({}) => {
  return <div></div>;
};
const mapDispatchToProps = (dispatch: Dispatch) => ({
  handlePlaceOrder: (name: string, order: MenuItem[]) =>
    dispatch(placeOrder(name, order)),
});

export const PlaceOrder = connect(null, mapDispatchToProps)(PlaceOrderModal);
