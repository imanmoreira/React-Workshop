import React, { useState } from "react";
import { Modal, TextField, Button, Typography } from "@material-ui/core";
import { MenuItem } from "../model/types";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { addMenuItem } from "../state/actions/menuActions";
import { withRouter, RouteComponentProps } from "react-router-dom";
import styled from "styled-components";

const InnerSection = styled.section`
  position: fixed;
  background: white;
  width: 30%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  outline: none;
  padding-bottom: 24px;
`;

interface AddMenuItemModalProps {
  handleClose: () => void;
  handleSubmit: (menuItem: MenuItem) => void;
  visible: boolean;
}

type Props = RouteComponentProps & AddMenuItemModalProps;

export const AddMenuItemModal: React.FC<Props> = ({
  handleClose,
  handleSubmit,
  visible,
}) => {
  const [formName, setFormName] = useState("");
  const [formPrice, setFormPrice] = useState("");
  const [errorText, setErrorText] = useState<string | undefined>(undefined);

  const PriceField = () => {
    return (
      <TextField
        id="outlined-basic"
        label="Price"
        variant="outlined"
        value={formPrice}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setFormPrice(event.target.value)
        }
        placeholder="10"
        style={{ marginTop: 36, minWidth: 326 }}
      />
    );
  };

  const NameTextField = () => {
    return (
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        value={formName}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setFormName(event.target.value)
        }
        placeholder="Cupcakes"
        style={{ marginTop: 12, marginBottom: 12, minWidth: 326 }}
      />
    );
  };

  const prepareToClose = () => {
    setFormName("");
    setFormPrice("");
    setErrorText(undefined);
    handleClose();
  };

  const submitPrice = () => {
    const price = Number(formPrice);
    if (!price) {
      setErrorText("Price must be a valid number");
    } else if (!formName) {
      setErrorText("Name must not be empty");
    } else {
      handleSubmit({ price, name: formName });
      prepareToClose();
    }
  };
  /**
   * **TODO** Task 3
   */
  return (
    <Modal style={{ outline: "none" }} open={visible} onClose={prepareToClose}>
      <InnerSection>
        <h2>Add a Menu Item</h2>
        <NameTextField />
        <PriceField />
        {errorText && <Typography color="error">{errorText}</Typography>}
        <Button style={{ margin: "10pt" }} onClick={submitPrice}>
          Submit
        </Button>
      </InnerSection>
    </Modal>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  handleSubmit: (menuItem: MenuItem) => dispatch(addMenuItem(menuItem)),
});

export const AddMenuItem = connect(
  null,
  mapDispatchToProps
)(withRouter(AddMenuItemModal));
