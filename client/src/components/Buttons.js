import React, { Component, useState } from "react";
import { Consumer } from "./context";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

export default function Buttons() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => {
    setDropdownOpen(prevState => !prevState);
  };

  const rowStyle = {
    borderBottom: "2px solid #dedede"
  };
  return (
    <Consumer>
      {value => {
        return (
          <div className="row mt-3 pb-3" style={rowStyle}>
            <div className="col">
              <Dropdown isOpen={dropdownOpen} toggle={toggle} size="sm">
                <DropdownToggle caret>Show All</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>All</DropdownItem>
                  {value.exercises.map(item => (
                    <DropdownItem>{item.name}</DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
        );
      }}
    </Consumer>
  );
}
