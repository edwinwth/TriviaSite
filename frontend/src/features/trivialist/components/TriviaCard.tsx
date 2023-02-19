import { Button, Card, Col, Row, styled, Text } from "@nextui-org/react";
import { FC, useState } from "react";
import { Trivia } from "../types";
import { CSSTransition } from "react-transition-group";
import "./TriviaCard.css";
import "./flip-transition.css";
import {
  HeartFilled,
  CaretUpFilled,
  CaretDownFilled,
  EditFilled,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import { AuthState } from "@/stores/auth";

interface TriviaCardProps {
  trivia: Trivia;
}

const CardContainer = styled("div", {
  transformStyle: "preserve-3d",
  width: "100%",
  height: "100%",
});

const ButtonsContainer = styled("div", {
  display: "flex",
  alignItems: "center",
});

const IconButton = styled(Button, {
  marginLeft: 5,
});

export const TriviaCard: FC<TriviaCardProps> = ({ trivia }) => {
  const [showFront, setShowFront] = useState(false);
  const isAuthenticated = useSelector(
    (state: AuthState) => state.isAuthenticated
  );
  const user = useSelector((state: AuthState) => state.user);
  return (
    <CardContainer>
      <CSSTransition in={showFront} timeout={300} classNames="flip">
        <div className="card" onClick={() => setShowFront((v) => !v)}>
          <Card
            className="card-front"
            isPressable
            isHoverable
            variant="bordered"
          >
            <Card.Header>
              <Row justify="space-between" align="center">
                <Text b>Question</Text>
                <ButtonsContainer>
                  {isAuthenticated && trivia.created_by_id === user?.user_id ? (
                    <IconButton auto color="success" icon={<EditFilled />} />
                  ) : null}
                  <IconButton auto color="error" icon={<HeartFilled />} />
                </ButtonsContainer>
              </Row>
            </Card.Header>
            <Card.Divider />
            <Card.Body>
              <Text css={{ fontSize: "$md" }}>{trivia.question_text}</Text>
            </Card.Body>
          </Card>
          <Card
            className="card-back"
            isPressable
            isHoverable
            variant="bordered"
          >
            <Card.Header>
              <Row justify="space-between" align="center">
                <Text b>Answer</Text>
                <ButtonsContainer>
                  {isAuthenticated && trivia.created_by_id === user?.user_id ? (
                    <IconButton auto color="success" icon={<EditFilled />} />
                  ) : null}
                  <IconButton auto color="error" icon={<HeartFilled />} />
                </ButtonsContainer>
              </Row>
            </Card.Header>
            <Card.Divider />
            <Card.Body>
              <Text css={{ fontSize: "x-large" }}>{trivia.answer_text}</Text>
            </Card.Body>
            <Card.Footer>
              <Row justify="space-between" align="center">
                <Text>Created By: {trivia.created_by}</Text>
                <ButtonsContainer>
                  <IconButton
                    auto
                    light
                    color="primary"
                    icon={<CaretUpFilled />}
                    css={{ marginRight: 5 }}
                  />
                  <Text css={{ margin: "0px 5px 0px 0px" }}>+0</Text>
                  <IconButton
                    auto
                    light
                    color="primary"
                    icon={<CaretDownFilled />}
                  />
                </ButtonsContainer>
              </Row>
            </Card.Footer>
          </Card>
        </div>
      </CSSTransition>
    </CardContainer>
  );
};
