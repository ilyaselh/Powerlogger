import React, { Component } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Consumer } from "./context";

export default class Intensity extends Component {
  render() {
    const line = {
      borderBottom: "2px solid #dedede"
    };

    const mainStyle = {
      width: "100%",
      borderRadius: "0.5rem",
      boxShadow: "0px 2px 10px 0px rgba(122,122,122,0.35)",
      borderLeft: "4px #0059e1 solid"
    };

    const totalStyle = {
      color: "#a7a7a7"
    };

    const chart = [
      [100, 96, 92, 89, 86, 84, 81, 79, 76, 74],
      [98, 94, 91, 88, 85, 82, 80, 77, 75, 72],
      [96, 92, 89, 86, 84, 81, 79, 76, 74, 71],
      [94, 91, 88, 85, 82, 80, 77, 75, 72, 69],
      [92, 89, 86, 84, 81, 79, 76, 74, 71, 68],
      [91, 88, 85, 82, 80, 77, 75, 72, 69, 67],
      [89, 86, 84, 81, 79, 76, 74, 71, 68, 65],
      [88, 85, 82, 80, 77, 75, 72, 69, 67, 64],
      [86, 83, 80, 78, 76, 73, 70, 68, 65, 63]
    ];
    let total;
    let avg = 0;

    return (
      <Consumer>
        {value => {
          total = value.todaySelectedSets.map(item => {
            switch (item.rpe) {
              case 10:
                return chart[0][item.reps - 1];
              case 9.5:
                return chart[1][item.reps - 1];
              case 9:
                return chart[2][item.reps - 1];
              case 8.5:
                return chart[3][item.reps - 1];
              case 8:
                return chart[4][item.reps - 1];
              case 7.5:
                return chart[5][item.reps - 1];
              case 7:
                return chart[6][item.reps - 1];
              case 6.5:
                return chart[7][item.reps - 1];
              case 6:
                return chart[8][item.reps - 1];
            }
          });

          if (total.length) {
            let temp = total.reduce((a, b) => a + b) / total.length;
            avg = (Math.round(temp * 4) / 4).toFixed(2);
          }

          return (
            <div className="card mt-3" style={mainStyle}>
              <div className="card-body">
                <div className="card-title">
                  <h6 style={{ fontWeight: "800" }}>
                    {value.todaySelectedEx === ""
                      ? `Intensity`
                      : `Intensity for the ${value.todaySelectedEx}`}
                  </h6>
                </div>
                <div className="mb-4" style={line}></div>
                <div className="card-text text-right">
                  <div className="mx-auto">
                    <h4
                      className="text-center"
                      style={avg === 0 ? { totalStyle } : { color: "#0059e1" }}
                    >
                      {avg === 0 ? "no exercise selected" : `${avg} %`}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
