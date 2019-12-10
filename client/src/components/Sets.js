import React, { Component } from "react";
import EditSet from "./EditSet";
import { Consumer } from "./context";

export default class Sets extends Component {
  render() {
    const mainStyle = {
      borderRadius: "0.5rem",
      boxShadow: "0px 1px 7px 0px rgba(122,122,122,0.25)"
    };

    return (
      <Consumer>
        {value => {
          return (
            <div className="card container mb-3" style={mainStyle}>
              <div className="card-body row p-2">
                <div className="col-lg-auto px-2">
                  <i
                    className="fas fa-times-circle fa-sm dlt"
                    onClick={() => value.handleDeleteSet(this.props.id)}
                  ></i>
                </div>
                <div className="col-lg-auto px-2">
                  <EditSet
                    id={this.props.id}
                    buttonLabel={<i className="fas fa-pen fa-sm addSet"></i>}
                    weight={this.props.weight}
                    reps={this.props.reps}
                    rpe={this.props.rpe}
                  />
                </div>
                <div className="col">
                  <span className="text-center">{this.props.weight} Kgs</span>
                </div>
                <div className="col">
                  <span>{this.props.reps} reps</span>
                </div>
                <div className="col">
                  <span>RPE {this.props.rpe}</span>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
