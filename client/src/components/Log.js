import React, { Component } from "react";
import Exercise from "./Exercise";
import Sidebar from "./Sidebar";
import Title from "./Title";
import Volume from "./Volume.js";
import Intensity from "./Intensity";
import { Consumer } from "./context";
import { Redirect } from "react-router-dom";

export default class Log extends Component {
  render() {
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

    return (
      <Consumer>
        {value => {
          return (
            <>
              {sessionStorage.getItem("isLogged") ? (
                <>
                  <Sidebar />
                  <div style={mainStyle} className="h-100">
                    <div className="container-fluid">
                      <Title />
                      <div className="row pl-1">
                        <div className="col-6">
                          {value.exercises.map(item => {
                            if (
                              item.date ===
                              value.startDate.toLocaleDateString(
                                "en-US",
                                options
                              )
                            ) {
                              return (
                                <Exercise
                                  key={item._id}
                                  id={item._id}
                                  name={item.name}
                                  date={item.date}
                                />
                              );
                            }
                          })}
                        </div>
                        <div
                          className="col-6"
                          style={{
                            visibility: value.exercises ? "visible" : "hidden"
                          }}
                        >
                          <Volume />
                          <Intensity />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <Redirect to="/login" />
              )}
            </>
          );
        }}
      </Consumer>
    );
  }
}
