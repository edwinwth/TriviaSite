import { Button, Card, Row, styled, Text } from "@nextui-org/react";
import { FC, useState } from "react";
import { Trivia } from "../types";
import { CSSTransition } from "react-transition-group";
import "./TriviaCard.css";
import "./flip-transition.css";
import { HeartFilled, CaretUpFilled, CaretDownFilled } from "@ant-design/icons";

interface TriviaCardProps {
  trivia: Trivia;
}

const CardContainer = styled("div", {
  transformStyle: "preserve-3d",
  width: "100%",
  height: "100%",
});

export const TriviaCard: FC<TriviaCardProps> = ({ trivia }) => {
  const [showFront, setShowFront] = useState(false);
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
                <Button auto color="error" icon={<HeartFilled />} />
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
                <Button auto color="error" icon={<HeartFilled />} />
              </Row>
            </Card.Header>
            <Card.Divider />
            <Card.Body>
              <Text css={{ fontSize: "x-large" }}>{trivia.answer_text}</Text>
            </Card.Body>
            <Card.Footer>
              <Row justify="flex-end" align="center">
                <Button auto light color="primary" icon={<CaretUpFilled />} css={{marginRight: 5}}/>
                <Text css={{margin: "0px 5px 0px 0px"}}>+0</Text>
                <Button auto light color="primary" icon={<CaretDownFilled />} />
              </Row>
            </Card.Footer>
          </Card>
        </div>
      </CSSTransition>
    </CardContainer>
  );
};
