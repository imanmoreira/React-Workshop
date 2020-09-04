import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Persistor } from "redux-persist";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Store } from "redux";

import './App.css';

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
          <Switch>
            <Route path="/home" component={Home} />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
}

