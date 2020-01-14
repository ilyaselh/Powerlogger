import React, { Component, useState } from "react";
import AddExercise from "./AddExercise";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Consumer } from "./context";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

function Date() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => {
    setDropdownOpen(prevState => !prevState);
  };

  return (
    <Consumer>
      {value => {
        return (
          <Dropdown isOpen={dropdownOpen} toggle={toggle} size="sm">
            <DropdownToggle
              tag="span"
              data-toggle="dropdown"
              aria-expanded={dropdownOpen}
            >
              <i className="fas fa-chevron-circle-down" id="dropdown"></i>
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem toggle={false}>
                <DatePicker
                  selected={value.startDate}
                  onChange={value.handleDateChange}
                  onSelect={() => {
                    toggle();
                  }}
                  dateFormat="MMMM d, yyyy"
                />
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        );
      }}
    </Consumer>
  );
}

export default class Title extends Component {
  render() {
    const rowStyle = {
      borderBottom: "2px solid #dedede",
      background: "#f5f5f5"
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
            <div className="row align-items-center pt-4 pb-3" style={rowStyle}>
              <div className="col-lg-auto">
                <h3 style={{ fontWeight: "600" }} className="mb-0">
                  {value.startDate.toLocaleDateString("en-US", options)}
                </h3>
              </div>
              <h5 className="col-lg-auto mb-0">
                <Date />
              </h5>
              <div
                className="col-lg-auto"
                style={
                  this.props.main
                    ? { visibility: "visible" }
                    : { visibility: "hidden" }
                }
              >
                <AddExercise buttonLabel="add an exercise" />
              </div>
              <div className="col text-right">
                <h5 className="mb-0">
                  <i
                    className="fas fa-sign-out-alt"
                    onClick={value.handleLogOut}
                    id="logout"
                  ></i>
                </h5>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
