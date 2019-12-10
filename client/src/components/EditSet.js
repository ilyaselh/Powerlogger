import React, { useState } from "react";
import { Consumer } from "./context";
import {
  Button,
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

const EditSet = props => {
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
            <i onClick={toggle} id="addSet">
              {buttonLabel}
            </i>
            <Modal isOpen={modal} toggle={toggle}>
              <ModalHeader toggle={toggle}>
                Edit a set for the {props.name}
              </ModalHeader>
              <ModalBody>
                <Alert color="success" toggle={onDismiss} isOpen={visible}>
                  Set Edited
                </Alert>
                <Form>
                  <FormGroup>
                    <Label for="weight">Enter weight</Label>
                    <Input
                      name="weight"
                      type="number"
                      id="weight"
                      placeholder="weight"
                      onChange={value.handleChange}
                      defaultValue={props.weight}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="reps">Enter reps</Label>
                    <Input
                      name="reps"
                      type="number"
                      id="reps"
                      placeholder="reps"
                      onChange={value.handleChange}
                      defaultValue={props.reps}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="rpe">Enter rpe</Label>
                    <Input
                      name="rpe"
                      type="number"
                      id="rpe"
                      placeholder="rpe"
                      onChange={value.handleChange}
                      defaultValue={props.rpe}
                    />
                  </FormGroup>
                </Form>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="primary"
                  onClick={() => {
                    value.handleEditSet(props.id);
                    onOpen();
                  }}
                >
                  Edit set
                </Button>
                <Button color="secondary" onClick={toggle}>
                  cancel
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        );
      }}
    </Consumer>
  );
};

export default EditSet;
