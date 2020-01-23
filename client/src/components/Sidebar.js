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
    paddingTop: "1.7rem",
    background: "#0059e1"
  };

  return (
    <Consumer>
      {value => {
        return (
          <div style={mainStyle} className="text-center">
            <Link to="/log" style={{ textDecoration: "none" }}>
              <h4 style={{ fontWeight: "800" }} className="text-white mb-5">
                PowerLogger
              </h4>
            </Link>
            <Link to="/log" exact style={{ textDecoration: "none" }}>
              <h6
                onClick={() => value.handlePageChange("1")}
                className={
                  value.current === "1"
                    ? "current text-left menu"
                    : "text-left menu"
                }
              >
                Exercises Log
              </h6>
            </Link>
            <Link to="/tracker" exact style={{ textDecoration: "none" }}>
              <h6
                onClick={() => value.handlePageChange("4")}
                className={
                  value.current === "4"
                    ? "current text-left menu"
                    : "text-left menu"
                }
              >
                Weight Tracker
              </h6>
            </Link>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <h6
                onClick={() => value.handlePageChange("2")}
                className={
                  value.current === "2"
                    ? "current text-left menu"
                    : "text-left menu"
                }
              >
                About
              </h6>
            </Link>
            <Link to="/settings" style={{ textDecoration: "none" }}>
              <h6
                onClick={() => value.handlePageChange("3")}
                className={
                  value.current === "3"
                    ? "current text-left menu"
                    : "text-left menu"
                }
              >
                Settings
              </h6>
            </Link>
          </div>
        );
      }}
    </Consumer>
  );
}
