import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Consumer } from "./context";

export default function Sidebar() {
  const mainStyle = {
    height: "100%",
    width: "13rem",
    position: "fixed",
    zIndex: "1",
    top: "0",
    left: "0",
    overflowX: "hidden",
    paddingTop: "3rem"
  };

  return (
    <Consumer>
      {value => {
        return (
          <div style={mainStyle} className="text-center bg-dark">
            <Link to="/log" style={{ textDecoration: "none" }}>
              <h3 className="text-white mb-5">PowerLogger</h3>
            </Link>
            <Link to="/log" exact style={{ textDecoration: "none" }}>
              <p
                onClick={() => value.handlePageChange("1")}
                className={
                  value.current === "1" ? "current text-left" : "text-left"
                }
              >
                Exercises Log
              </p>
            </Link>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <p
                onClick={() => value.handlePageChange("2")}
                className={
                  value.current === "2" ? "current text-left" : "text-left"
                }
              >
                About
              </p>
            </Link>
            <Link to="/settings" style={{ textDecoration: "none" }}>
              <p
                onClick={() => value.handlePageChange("3")}
                className={
                  value.current === "3" ? "current text-left" : "text-left"
                }
              >
                Settings
              </p>
            </Link>
          </div>
        );
      }}
    </Consumer>
  );
}
