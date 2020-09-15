import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Persistor } from "redux-persist";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Store } from "redux";
import { Home } from "./Home/Home";
import { Header } from "./Home/NavigationBar";
import { Menu } from "./Pages/Menu";
import { Orders } from "./Pages/Orders";
import "./App.css";
import styled from "styled-components";

const PageContainer = styled.div`
  margin: 2% 2% 2% 2%;
`;

export const App = ({
  store,
  persistor,
}: {
  store: Store;
  persistor: Persistor;
}) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Header />
          <PageContainer>
            <Switch>
              <Route path="/customer/menu" component={Menu} />
              <Route
                path="/employee/menu"
                render={() => <Menu employeeView={true}></Menu>}
              />
              <Route path="/customer/orders" component={Orders} />
              <Route path="/" component={Home} />
            </Switch>
          </PageContainer>
        </Router>
      </PersistGate>
    </Provider>
  );
};
