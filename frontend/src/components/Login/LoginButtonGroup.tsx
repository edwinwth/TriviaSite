import { useState } from "react";
import { Navbar, Button, Link } from "@nextui-org/react";
import { AuthState, signOut } from "../../stores/auth";
import { useSelector, useDispatch } from "react-redux";
import { LoginModal } from "./LoginModal";
import { logout } from "../../features/auth";

export const LoginButtonGroup: React.FC = () => {
  const dispatch = useDispatch()
  const isAuthenticated = useSelector(
    (state: AuthState) => state.isAuthenticated
  );
  const [loginModalType, setLoginModalType] = useState<"signup" | "login">(
    "login"
  );
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const onClickLogin = () => {
    setLoginModalType("login");
    setLoginModalVisible(true);
  };
  const onClickSignup = () => {
    setLoginModalType("signup");
    setLoginModalVisible(true);
  };
  const onCloseLogin = () => setLoginModalVisible(false);
  const onClickSignOut = async () => {
    if(await logout()){
      dispatch(signOut())
    } else{
      alert("Some thing went wrong when logging out.")
    }
  }

  return (
    <>
      {!isAuthenticated ? (
        <>
          <Navbar.Link color="inherit" href="#" onPress={onClickLogin}>
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href="#" onPress={onClickSignup}>
              Sign Up
            </Button>
          </Navbar.Item>
        </>
      ) : (
        <Navbar.Item>
          <Button auto color="error" flat as={Link} href="#" onPress={onClickSignOut}>
            Log Out
          </Button>
        </Navbar.Item>
      )}
      <LoginModal
        visible={loginModalVisible}
        type={loginModalType}
        onClose={() => onCloseLogin()}
      />
    </>
  );
};

