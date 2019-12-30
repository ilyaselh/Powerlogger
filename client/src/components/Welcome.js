import React, { Component } from "react";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import { Link, Route, Redirect } from "react-router-dom";
import { Consumer } from "./context";
import background from "../background.png";

export default class Welcome extends Component {
  state = {
    current: 1
  };

  render() {
    const leftStyle = {
      background: `#4d2bd8`
    };

    const rightStyle = {
      height: "100vh",
      background: "#ececec"
    };

    return (
      <Consumer>
        {value => {
          return (
            <>
              {value.isLogged ? (
                <Redirect to="/log" />
              ) : (
                <div className="container-fluid">
                  <div className="row align-items-center" style={leftStyle}>
                    <div className="col-3 left text-center">
                      <h1 style={{ fontWeight: "800" }} className="text-white">
                        Powerlogger
                      </h1>
                      <h6 className="text-white mt-5">
                        Log your strength training progress
                      </h6>
                    </div>
                    <div className="col-9 right pt-5" style={rightStyle}>
                      <div
                        className="row pt-3 mb-3 align-items-center"
                        style={{
                          paddingLeft: "8rem",
                          width: "40rem"
                        }}
                      >
                        <div className="col-lg-auto">
                          <Link to="/" style={{ textDecoration: "none" }}>
                            <h1
                              onClick={() => value.handleClickText(1)}
                              className={
                                value.currentText === 1
                                  ? "home-current"
                                  : "home-title"
                              }
                            >
                              Sign Up
                            </h1>
                          </Link>
                        </div>
                        <div className="col-lg-auto home-title">OR</div>
                        <div className="col-lg-auto">
                          <Link to="/login" style={{ textDecoration: "none" }}>
                            <h1
                              onClick={() => value.handleClickText(2)}
                              className={
                                value.currentText === 2
                                  ? "home-current"
                                  : "home-title"
                              }
                            >
                              Log In
                            </h1>
                          </Link>
                        </div>
                      </div>
                      <h6
                        style={{
                          visibility: value.error ? "visible" : "hidden",
                          color: "red",
                          paddingLeft: "8rem",
                          paddingBottom: "1rem"
                        }}
                      >
                        Invalid email or password
                      </h6>
                      <div>
                        <Route path="/" exact>
                          <SignUp />
                        </Route>
                      </div>
                      <div>
                        <Route path="/login">
                          <LogIn />
                        </Route>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          );
        }}
      </Consumer>
    );
  }
}
