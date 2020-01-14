import React, { Component } from "react";
import { Consumer } from "./context";

export default class Volume extends Component {
  render() {
    const line = {
      borderBottom: "2px solid #dedede"
    };

    const mainStyle = {
      width: "25vw",
      borderRadius: "0.5rem",
      boxShadow: "0px 2px 10px 0px rgba(122,122,122,0.35)"
    };

    const totalStyle = {
      color: "#6644f0"
    };

    let total = 0;

    return (
      <Consumer>
        {value => {
          total = value.todaySelectedSets
            .map(item => {
              return item.reps;
            })
            .reduce((a, b) => a + b, 0);

          return (
            <div className="card mt-3" style={mainStyle}>
              <div className="card-body">
                <div className="card-title">
                  <h6 style={{ fontWeight: "800" }}>
                    {value.todaySelectedEx === ""
                      ? `Volume`
                      : `Volume for the ${value.todaySelectedEx}`}
                  </h6>
                </div>
                <div className="mb-4" style={line}></div>
                <div className="card-text">
                  <h1 className="text-center" style={totalStyle}>
                    {total}
                  </h1>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
