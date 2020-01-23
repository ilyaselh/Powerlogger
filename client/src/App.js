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
import Tracker from "./components/Tracker";

function App() {
  return (
    <Provider>
      <Consumer>
        {value => (
          <>
            <Switch>
              <Route path="/log" exact>
                <Log />
              </Route>
              <Route path="/tracker" exact>
                <Tracker />
              </Route>
              <Route path="/about" exact>
                <Sidebar />
                <About />
              </Route>
              <Route path="/settings" exact>
                <Sidebar />
                <Settings />
              </Route>
              <Route path="/">
                <Welcome />
              </Route>
            </Switch>
          </>
        )}
      </Consumer>
    </Provider>
  );
}

export default App;
