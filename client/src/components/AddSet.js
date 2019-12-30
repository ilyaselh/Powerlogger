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

const AddSet = props => {
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
    }, 1000);
  };

  return (
    <Consumer>
      {value => {
        return (
          <div>
            <i onClick={toggle} className="addSet">
              {buttonLabel}
            </i>
            <Modal isOpen={modal} toggle={toggle}>
              <ModalHeader toggle={toggle}>
                Add a set for the {props.name}
              </ModalHeader>
              <ModalBody>
                <Alert color="success" toggle={onDismiss} isOpen={visible}>
                  Set added
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
                    />
                  </FormGroup>
                </Form>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="primary"
                  onClick={() => {
                    value.handleAddSet(props.name);
                    onOpen();
                  }}
                >
                  add set
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

export default AddSet;
