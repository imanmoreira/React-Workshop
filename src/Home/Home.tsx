import React from "react";
import { withRouter } from "react-router-dom";
import { Paper, Typography } from "@material-ui/core";
import styled from "styled-components";

const OuterContainer = styled.div`
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

const ImgContainer = styled.div`
  flex: 1;
  margin: 50px;
`;

class HomeComponent extends React.Component<any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <OuterContainer>
        <Paper
          style={{
            width: "50%",
            height: "300pt",
            flex: 2,
            backgroundColor: "#FFF7D9",
          }}
        >
          <Typography
            align="center"
            style={{
              margin: "30px",
            }}
          >
            <h2>Welcome to Graduate Everyone!</h2>
            <p>
              Welcome to the SandBucks for your local coffee needs. We need help
              designing our website, since as you can see it's a bit ...
              lacking. We have the backbone of the website set up and have a
              list of features and pages that we would like added so we can get
              to selling coffee and making an impact!
            </p>
            <p>
              Check out the README for your next task! The useful area of code
              is also marked with a **TODO** to let you know where to look.
            </p>
            <p>Have fun everyone :)</p>
          </Typography>
        </Paper>
        <ImgContainer>
          <img
            src={
              "https://github.com/sandboxnu/sandboxneu.com/blob/master/src/images/sandbox-icon.png?raw=true"
            }
            className="App-logo"
            alt="logo"
          />
        </ImgContainer>
      </OuterContainer>
    );
  }
}

export const Home = withRouter(HomeComponent);
