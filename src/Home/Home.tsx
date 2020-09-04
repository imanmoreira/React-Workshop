import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";



class HomeComponent extends React.Component<Props, HomeState> {
    constructor(props: Props) {
      super(props);
    }
}

export const Home = connect(
  null,
  null
)(withRouter(HomeComponent));
