import React, { Component } from "react";
import { Consumer } from "./context";
import Sets from "./Sets";
import Addset from "./AddSet";

export default class Exercise extends Component {
  render() {
    const mainStyle = {
      width: "40vw",
      borderRadius: "0.5rem",
      boxShadow: "0px 2px 10px 0px rgba(122,122,122,0.35)"
    };

    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    };

    const line = {
      borderBottom: "2px solid #dedede"
    };

    return (
      <Consumer>
        {value => {
          let todaySets = value.sets.filter(
            item =>
              item.name === this.props.name &&
              item.date === value.startDate.toLocaleDateString("en-US", options)
          );

          return (
            <div
              className="card mt-3"
              style={mainStyle}
              onClick={() => {
                value.handleExClick(todaySets, this.props.name);
              }}
            >
              <div className="card-body">
                <div className="card-title row align-items-center">
                  <div className="col">
                    <h4 className="text-left">{this.props.name}</h4>
                  </div>
                  <div className="col-lg-auto">
                    <Addset
                      name={this.props.name}
                      buttonLabel={<i className="fas fa-plus-circle fa-lg"></i>}
                    />
                  </div>
                  <div className="col-lg-auto">
                    <i
                      className="fas fa-times-circle fa-lg dlt"
                      onClick={() => {
                        value.handleDeleteExercise(
                          this.props.id,
                          this.props.name
                        );
                      }}
                    ></i>
                  </div>
                </div>
                <div className="mb-4" style={line}></div>
                {value.sets.map(item => {
                  if (
                    item.name === this.props.name &&
                    item.date ===
                      value.startDate.toLocaleDateString("en-US", options)
                  ) {
                    return (
                      <Sets
                        key={item._id}
                        id={item._id}
                        weight={item.weight}
                        reps={item.reps}
                        rpe={item.rpe}
                      />
                    );
                  }
                })}
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
