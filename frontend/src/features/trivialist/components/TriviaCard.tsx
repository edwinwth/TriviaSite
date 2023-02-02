import { Button, Card, Row, styled, Text } from "@nextui-org/react";
import { FC } from "react";
import { Trivia } from "../types";
import "./TriviaCard.css";

interface TriviaCardProps {
  trivia: Trivia;
}

const CardContainer = styled("div", {
  transformStyle: "preserve-3d",
  width: "100%",
  height: "100%",
});

export const TriviaCard: FC<TriviaCardProps> = ({ trivia }) => {
  return (
    <CardContainer>
      <div className="card">
        <Card className="card-front" isPressable isHoverable variant="bordered">
          <Card.Header>
            <Text b>Question</Text>
          </Card.Header>
          <Card.Divider />
          <Card.Body>
            <Text css={{ fontSize: "$md" }}>{trivia.question_text}</Text>
          </Card.Body>
        </Card>
        <Card className="card-back" isPressable isHoverable variant="bordered">
          <Card.Header>
            <Text b>Answer</Text>
          </Card.Header>
          <Card.Divider />
          <Card.Body>
            <Text css={{ fontSize: "x-large" }}>{trivia.answer_text}</Text>
          </Card.Body>
        </Card>
      </div>
    </CardContainer>
  );
};
