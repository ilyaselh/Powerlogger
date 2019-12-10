import React from "react";
import { Switch, Route } from "react-router-dom";
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider, Consumer } from "./components/context";
import Log from "./components/Log";
import Sidebar from "./components/Sidebar";
import Settings from "./components/Settings";
import About from "./components/About";
import Welcome from "./components/Welcome";

function App() {
  const left = {};

  const right = {};

  return (
    <Provider>
      <Consumer>
        {value => (
          <>
            <Switch>
              <Route path="/home">
                <Welcome />
              </Route>
              <Route path="/log">
                <Log />
              </Route>
              <Route path="/about">
                <Sidebar />
                <About />
              </Route>
              <Route path="/settings">
                <Sidebar />
                <Settings />
              </Route>
            </Switch>
          </>
        )}
      </Consumer>
    </Provider>
  );
}

export default App;
