import React, { useState } from "react";
import { Consumer } from "./context";
import { Button, Button1 } from "./Button1";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  Alert
} from "reactstrap";

const AddExercise = props => {
  const { buttonLabel } = props;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [visible, setVisible] = useState(false);
  const onDismiss = () => setVisible(false);
  const onOpen = () => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
      console.log("activated");
    }, 1500);
  };

  return (
    <Consumer>
      {value => {
        return (
          <div>
            <Button1 onClick={toggle}>{buttonLabel}</Button1>
            <Modal isOpen={modal} toggle={toggle}>
              <ModalHeader toggle={toggle}>Add a new exercise</ModalHeader>
              <ModalBody>
                <Alert color="success" toggle={onDismiss} isOpen={visible}>
                  Exercise added
                </Alert>
                <Form>
                  <FormGroup>
                    <Label for="exercise">Enter exercise name</Label>
                    <Input
                      name="exercise"
                      type="text"
                      id="exercise"
                      placeholder="exercise name"
                      onChange={value.handleChange}
                    />
                  </FormGroup>
                </Form>
              </ModalBody>
              <ModalFooter>
                <Button1
                  onClick={() => {
                    value.handleAddExercise();
                    onOpen();
                  }}
                >
                  add exercise
                </Button1>
              </ModalFooter>
            </Modal>
          </div>
        );
      }}
    </Consumer>
  );
};

export default AddExercise;
