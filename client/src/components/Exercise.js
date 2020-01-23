import React, { useState } from "react";
import { Consumer } from "./context";
import Sets from "./Sets";
import Addset from "./AddSet";
import { Alert } from "reactstrap";
import { Button1 } from "./Button1";

export default function Exercise(props) {
  const [visible, setVisible] = useState(false);
  const onDismiss = () => setVisible(false);
  const onOpen = () => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 1500);
  };

  const mainStyle = {
    width: "100%",
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
            item.name === props.name &&
            item.date === value.startDate.toLocaleDateString("en-US", options)
        );

        return (
          <>
            <Alert color="danger" toggle={onDismiss} isOpen={visible}>
              Exercise deleted
            </Alert>
            <div
              className="card mt-3"
              style={mainStyle}
              onClick={() => {
                value.handleExClick(todaySets, props.name);
              }}
            >
              <div className="card-body">
                <div className="card-title row align-items-center">
                  <div className="col">
                    <h6 style={{ fontWeight: "800" }} className="text-left">
                      {props.name}
                    </h6>
                  </div>
                  <div className="col-lg-auto">
                    <Addset
                      name={props.name}
                      buttonLabel={<Button1 sm>Add Set</Button1>}
                    />
                  </div>
                  <div className="col-lg-auto">
                    <i
                      className="fas fa-times-circle fa-lg dlt"
                      onClick={() => {
                        value.handleDeleteExercise(props.id, props.name);
                        onOpen();
                      }}
                    ></i>
                  </div>
                </div>
                <div className="mb-4" style={line}></div>
                {value.sets.map(item => {
                  if (
                    item.name === props.name &&
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
          </>
        );
      }}
    </Consumer>
  );
}
