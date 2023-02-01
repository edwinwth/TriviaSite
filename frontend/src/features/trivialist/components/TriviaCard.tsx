import { Button, Card, Row, styled, Text } from "@nextui-org/react";
import { FC } from "react";
import { Trivia } from "../types";
import {ScaleText} from "react-scale-text";
import "./TriviaCard.css";

interface TriviaCardProps {
  trivia: Trivia;
}

const CardContainer = styled("div", {
  transformStyle: "preserve-3d",
});

export const TriviaCard: FC<TriviaCardProps> = ({ trivia }) => {
  return (
    <CardContainer>
      <div className="card">
        <Card
          className="card-front"
          isPressable
          isHoverable
          variant="bordered"
          css={{ mw: "400px" }}
        >
          <Card.Header>
            <Text b>Question</Text>
          </Card.Header>
          <Card.Divider />
          <Card.Body>
            <Text css={{ fontSize: "x-large" }}>{trivia.question_text}{trivia.question_text}{trivia.question_text}{trivia.question_text}</Text>
          </Card.Body>
        </Card>
        <Card
          className="card-back"
          isPressable
          isHoverable
          variant="bordered"
          css={{ mw: "400px" }}
        >
          <Card.Header>
            <Text b>Answer</Text>
          </Card.Header>
          <Card.Divider />
          <Card.Body>
            <Text>{trivia.answer_text}</Text>
          </Card.Body>
        </Card>
      </div>
    </CardContainer>
  );
};
