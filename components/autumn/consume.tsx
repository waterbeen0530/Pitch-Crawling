import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { theme } from "../../styles/theme";
import { useState } from "react";
import Album from "./album";

export default function Consume() {
  const str = "1311188882";
  const [modal, setModal] = useState(false);
  const onClick = () => {
    setModal((pre) => !pre);
  };
  return (
    <Container id="album">
      <Title>
        <General>가을의 대중음악</General>
        <Emphasis>소비량🍑</Emphasis>
      </Title>
      <Consumption>
        <Totals>
          {[...str].map((s, i) => (
            <Total key={i} delay={Math.random() * 5}>
              {s}
            </Total>
          ))}
        </Totals>
        <Month>
          <February>
            <Text>8월의 대중음악 총 소비량</Text>
            <Result>464949676</Result>
            {/* <Button onClick={onClick}>자세히보기</Button> */}
          </February>
          <March>
            <Text>9월의 대중음악 총 소비량</Text>
            <Result>425714308</Result>
            {/* <Button>자세히보기</Button> */}
          </March>
          <April>
            <Text>10월의 대중음악 총 소비량</Text>
            <Result>420524898</Result>
            {/* <Button>자세히보기</Button> */}
          </April>
        </Month>
      </Consumption>
      {modal ? <Album view={modal} album={onClick} /> : <></>}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.div`
  width: 70%;
  margin: 130px 0 0 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 24px;
`;

const General = styled.p`
  margin: 0;
`;

const Emphasis = styled.p`
  margin: 0 5px;
  font-weight: 800;
`;

const Consumption = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Flip = keyframes`
    0%,
    80% {
      transform: rotateY(360deg);
    }
  `;

const Totals = styled.div`
  display: flex;
`;

const Total = styled.div`
  margin: 100px 0 100px;
  font-size: 50px;
  font-weight: 700;
  text-transform: uppercase;
  animation: ${Flip} 2s;
  animation-delay: ${({ delay }: { delay: number }) => delay * 0.1}s;
`;

const Month = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Board = styled.div`
  width: 280px;
  height: 200px;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid #f5f5f5;
  border-radius: 8px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25);
  font-weight: 700;
`;

const February = styled(Board)``;

const March = styled(Board)``;

const April = styled(Board)``;

const Text = styled.p`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
`;

const Result = styled.p`
  margin: 24px 0;
  font-size: 30px;
  color: #a48a76;
`;

const Button = styled.button`
  width: 100px;
  height: 30px;
  border: none;
  border-radius: 20px;
  color: #fff;
  background-color: #a48a76;
`;
