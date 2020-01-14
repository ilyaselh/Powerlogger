import React, { useState } from "react";
import { Consumer } from "./context";
import { Button1 } from "./Button1";
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

const AddTracker = props => {
  const { buttonLabel } = props;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [visible, setVisible] = useState(false);
  const onDismiss = () => setVisible(false);
  const onOpen = () => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 1000);
  };

  return (
    <Consumer>
      {value => {
        return (
          <div>
            <Button1 onClick={toggle}>{buttonLabel}</Button1>
            <Modal isOpen={modal} toggle={toggle}>
              <ModalHeader toggle={toggle}>Add Data</ModalHeader>
              <ModalBody>
                <Alert color="success" toggle={onDismiss} isOpen={visible}>
                  Exercise added
                </Alert>
                <Form>
                  <FormGroup>
                    <Label for="weightData">Enter Data</Label>
                    <Input
                      name="weightData"
                      type="number"
                      id="weightData"
                      placeholder="weight"
                      onChange={value.handleChange}
                    />
                  </FormGroup>
                </Form>
              </ModalBody>
              <ModalFooter>
                <Button1
                  onClick={() => {
                    value.addData();
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

export default AddTracker;
