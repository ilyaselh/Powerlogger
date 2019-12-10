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
      marginLeft: "13rem",
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
                      <div className="row pl-3">
                        <div className="row left pr-3">
                          <span className="col left">
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
                          </span>
                        </div>
                        <div className="row right">
                          <div className="col">
                            <Volume />
                            <Intensity />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <Redirect to="home/login" />
              )}
            </>
          );
        }}
      </Consumer>
    );
  }
}
