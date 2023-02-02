import React, { useEffect } from "react";
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";
import { LockOutlined, LoginOutlined } from "@ant-design/icons";

interface LoginModalProps {
  visible: boolean;
  onClose: Function;
}

export const LoginModal: React.FC<LoginModalProps> = ({ visible, onClose }) => {
  const closeHandler = () => {
    onClose();
  };
  return (
    <Modal
      closeButton
      aria-labelledby="modal-title"
      open={visible}
      onClose={closeHandler}
    >
      <Modal.Header>
        <Text id="modal-title" size={18}>
          Welcome to&nbsp;
          <Text b size={18}>
            Trivia
          </Text>
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Input
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Email"
          contentLeft={<LoginOutlined />}
        />
        <Input
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Password"
          contentLeft={<LockOutlined />}
        />
        <Row justify="space-between">
          <Checkbox>
            <Text size={14}>Remember me</Text>
          </Checkbox>
          <Text size={14}>Forgot password?</Text>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button auto flat color="error" onPress={closeHandler}>
          Close
        </Button>
        <Button auto onPress={closeHandler}>
          Sign in
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
