import React, { useEffect, useState } from "react";
import {
  Modal,
  Button,
  Text,
  Input,
  Row,
  Checkbox,
  FormElement,
} from "@nextui-org/react";
import { LockOutlined, LoginOutlined } from "@ant-design/icons";
import {
  loginWithUsernameAndPassword,
  signUpWithUsernameAndPassword,
} from "../../features/auth";
import { authSuccess, authUnsuccess, setUser } from "../../stores/auth";
import { useDispatch } from "react-redux";
import { AxiosError } from "axios";

interface LoginModalProps {
  visible: boolean;
  type: "signup" | "login";
  onClose: Function;
}

type loginInputs = {
  username: string;
  password: string;
};

export const LoginModal: React.FC<LoginModalProps> = ({
  visible,
  type,
  onClose,
}) => {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState<loginInputs>({
    username: "",
    password: "",
  });
  const closeHandler = () => {
    onClose();
  };

  const handleChange = (event: React.ChangeEvent<FormElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setCredentials((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (type == "login") {
      await loginWithUsernameAndPassword(credentials)
        .then((res) => {
          dispatch(setUser(res));
          dispatch(authSuccess());
          onClose();
        })
        .catch((error) => {
          const message = error.response?.data?.message || error.message;
          alert(message);
        });
    } else {
      await signUpWithUsernameAndPassword(credentials)
        .then((response) => {
          alert(response.message);
          onClose();
        })
        .catch((error) => {
          const message = error.response?.data?.message || error.message;
          alert(message);
          return;
        });
    }
  };

  const handleReset = (event: React.FormEvent<HTMLFormElement>) => {
    setCredentials({ username: "", password: "" });
  };
  return (
    <Modal
      closeButton
      aria-labelledby="modal-title"
      open={visible}
      onClose={closeHandler}
    >
      <form onSubmit={handleSubmit} onReset={handleReset}>
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
            required
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Username"
            contentLeft={<LoginOutlined />}
            name="username"
            value={credentials.username || ""}
            label="Username"
            onChange={handleChange}
          />
          <Input.Password
            required
            label="Password"
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Password"
            contentLeft={<LockOutlined />}
            name="password"
            value={credentials.password || ""}
            onChange={handleChange}
          />
          {/* <Row justify="space-between">
          <Checkbox>
            <Text size={14}>Remember me</Text>
          </Checkbox>
          <Text size={14}>Forgot password?</Text>
        </Row> */}
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler} type="reset">
            Close
          </Button>
          <Button auto type="submit">
            {type == "login" ? "Log In" : "Sign Up"}
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};
