import { ReactNode, useState } from "react";
import { Navbar, Button, Link, Text, styled } from "@nextui-org/react";
import { useLocation } from "react-router-dom";
import { Link as routerLink } from "react-router-dom";
import { LoginModal } from "../Login/LoginModal";
import { useSelector } from "react-redux";
import { AuthState } from "@/stores/auth";
import { LoginButtonGroup } from "../Login/LoginButtonGroup";

const Box = styled("div", {
  boxSizing: "border-box",
});

const navItems: { path: string; title: string }[] = [
  { path: "/totd", title: "Trivia of the Day" },
  { path: "/trivia_list", title: "Trivia List" },
];

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const location = useLocation();


  return (
    <Box
      css={{
        maxW: "100%",
      }}
    >
      <Navbar isBordered variant={"floating"}>
        <Navbar.Brand>
          <Text b color="inherit" hideIn="xs">
            Trivia
          </Text>
        </Navbar.Brand>
        <Navbar.Content
          hideIn="xs"
          variant={"highlight-solid-rounded"}
          enableCursorHighlight
        >
          {navItems.map(({ path, title }) => (
            <Navbar.Link
              as={routerLink}
              to={path}
              isActive={path == location.pathname}
            >
              {title}
            </Navbar.Link>
          ))}
        </Navbar.Content>
        <Navbar.Content>
          <LoginButtonGroup />
        </Navbar.Content>
      </Navbar>
      
      {children}
    </Box>
  );
};
