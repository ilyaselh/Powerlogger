import React, { Component } from "react";
import { Consumer } from "./context.js";
import { Button } from "./Button1";
import { Link } from "react-router-dom";

export default class SignUp extends Component {
  render() {
    const mainStyle = {
      width: "47rem",
      paddingLeft: "8rem"
    };
    return (
      <Consumer>
        {value => {
          return (
            <>
              <form style={mainStyle}>
                <div className="form-group ">
                  <label htmlFor="nameInput">
                    <h6>FULL NAME</h6>
                  </label>
                  <input
                    name="nameSign"
                    type="text"
                    className="form-control noback"
                    id="nameInput"
                    placeholder="Full Name"
                    onChange={value.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="emailInput">
                    <h6>EMAIL</h6>
                  </label>
                  <input
                    name="emailSign"
                    type="email"
                    className="form-control noback"
                    id="emailInput"
                    placeholder="E-mail"
                    onChange={value.handleChange}
                  />
                </div>
                <div className="form-group pb-3">
                  <label htmlFor="passInput">
                    <h6>PASSWORD</h6>
                  </label>
                  <input
                    name="passSign"
                    type="password"
                    className="form-control noback"
                    id="passInput"
                    placeholder="Password"
                    onChange={value.handleChange}
                  />
                </div>
                <Button onClick={value.handleSign}>Sign Up</Button>
              </form>
            </>
          );
        }}
      </Consumer>
    );
  }
}
