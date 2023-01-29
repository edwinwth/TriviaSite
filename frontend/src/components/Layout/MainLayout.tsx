import * as React from "react";
import {
  Navbar,
  Button,
  Link,
  Text,
  Card,
  Radio,
  styled,
} from "@nextui-org/react";

const Box = styled("div", {
  boxSizing: "border-box",
});

export const MainLayout = () => {
  return (
    <>
      <Box
        css={{
          maxW: "100%",
        }}
      >
        <Navbar isBordered variant={"sticky"}>
          <Navbar.Brand>
            <Text b color="inherit" hideIn="xs">
              Trivia
            </Text>
          </Navbar.Brand>
          <Navbar.Content hideIn="xs">
            <Navbar.Link isActive href="#">Trivia of the Day</Navbar.Link>
            <Navbar.Link  href="#">
              Trivia List
            </Navbar.Link>
          </Navbar.Content>
          <Navbar.Content>
            <Navbar.Link color="inherit" href="#">
              Login
            </Navbar.Link>
            <Navbar.Item>
              <Button auto flat as={Link} href="#">
                Sign Up
              </Button>
            </Navbar.Item>
          </Navbar.Content>
        </Navbar>
      </Box>
    </>
  );
};
