import React from "react";
import Sidebar from "./Sidebar";
import Title from "./Title";
import Chart from "react-google-charts";
import { Consumer } from "./context";
import { Button1 } from "./Button1";
import AddTracker from "./AddTracker";

export default function Tracker() {
  const mainStyle = {
    paddingLeft: "13rem",
    background: "#e7e7e7"
  };

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  const style = {
    borderRadius: "0.5rem",
    boxShadow: "0px 2px 10px 0px rgba(122,122,122,0.35)"
  };

  return (
    <Consumer>
      {value => {
        return (
          <>
            <Sidebar />
            <div style={mainStyle}>
              <div className="container-fluid">
                <Title />
                <div className="card mt-4" style={style}>
                  <div className="card-body p-3">
                    <div className="card-title" style={{ fontWeight: "800" }}>
                      Body Weight
                    </div>
                    <Chart
                      width={"100%"}
                      height={"1000"}
                      chartType="LineChart"
                      loader={<p>Loading...</p>}
                      data={value.weightData}
                      className="pb-3"
                    />
                    <AddTracker buttonLabel="add today's weight" />
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      }}
    </Consumer>
  );
}
