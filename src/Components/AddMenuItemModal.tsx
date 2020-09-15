import React from "react";
import { Modal, TextField, Button, Typography } from "@material-ui/core";
import { MenuItem } from "../model/types";
import { connect } from "react-redux";
import { AppState } from "../state/reducers/state";
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

interface AddMenuItemModalState {
  formName: string;
  formPrice: string;
  errorText?: string;
}

type Props = RouteComponentProps & AddMenuItemModalProps;

export class AddMenuItemModal extends React.Component<
  Props,
  AddMenuItemModalState
> {
  constructor(props: Props) {
    super(props);
    this.state = {
      formName: "",
      formPrice: "",
      errorText: undefined,
    };
  }
  renderPriceField() {
    return (
      <TextField
        id="outlined-basic"
        label="Price"
        variant="outlined"
        value={this.state.formPrice}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          this.setState({ formPrice: event.target.value })
        }
        placeholder="10"
        style={{ marginTop: 36, minWidth: 326 }}
      />
    );
  }

  renderNameTextField() {
    return (
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        value={this.state.formName}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          this.setState({ formName: event.target.value })
        }
        placeholder="Cupcakes"
        style={{ marginTop: 12, marginBottom: 12, minWidth: 326 }}
      />
    );
  }

  prepareToClose() {
    this.setState({
      formName: "",
      formPrice: "",
      errorText: undefined,
    });
    this.props.handleClose();
  }

  handleSubmit() {
    const price = Number(this.state.formPrice);
    if (!price) {
      this.setState({ errorText: "Price must be a valid number" });
    } else if (!this.state.formName) {
      this.setState({ errorText: "Name must not be empty" });
    } else {
      this.props.handleSubmit({ price, name: this.state.formName });
      this.prepareToClose();
    }
  }

  render() {
    return (
      <Modal
        style={{ outline: "none" }}
        open={this.props.visible}
        onClose={this.prepareToClose.bind(this)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <InnerSection>
          <h2>Add a Menu Item</h2>
          {this.renderNameTextField()}
          {this.renderPriceField()}
          {this.state.errorText && (
            <Typography color="error">{this.state.errorText}</Typography>
          )}
          <Button
            style={{ margin: "10pt" }}
            onClick={this.handleSubmit.bind(this)}
          >
            Submit
          </Button>
        </InnerSection>
      </Modal>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  handleSubmit: (menuItem: MenuItem) => dispatch(addMenuItem(menuItem)),
});

export const AddMenuItem = connect(
  null,
  mapDispatchToProps
)(withRouter(AddMenuItemModal));
