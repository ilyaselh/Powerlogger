import React, { Component } from "react";
import { Consumer } from "./context";

export default class Volume extends Component {
  render() {
    const line = {
      borderBottom: "2px solid #dedede"
    };

    const mainStyle = {
      width: "100%",
      borderRadius: "0.5rem",
      boxShadow: "0px 2px 10px 0px rgba(122,122,122,0.35)",
      borderLeft: "4px #11c10c solid"
    };

    const totalStyle = {
      color: "#a7a7a7"
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
                  <h4
                    className="text-center"
                    style={total === 0 ? { totalStyle } : { color: "#0059e1" }}
                  >
                    {total === 0 ? "no exercise selected" : total}
                  </h4>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
