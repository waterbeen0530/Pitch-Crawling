import styled from "@emotion/styled";
import { theme } from "../../styles/theme";

export default function Popular() {
  const item = [
    {
      title: "SPRING(봄)",
      Genre: "댄스",
    },
    {
      title: "SUMMER(여름)",
      Genre: "댄스",
    },
    {
      title: "AUTUMN(가을)",
      Genre: "록/메탈 & 댄스",
    },
    {
      title: "WINTER(겨울)",
      Genre: "랩/힙합",
    },
  ];
  return (
    <Container>
      <Title>
        <General>계절별</General>
        <Emphasis>인기 있는</Emphasis>
        <General>장르🍑</General>
      </Title>
      <Lists>
        {item.map((season, i) => (
          <List key={i}>
            <Text>{season.title}</Text>
            <Genre>{season.Genre}</Genre>
            <Route>바로가기{">"}</Route>
          </List>
        ))}
      </Lists>
    </Container>
  );
}

const Container = styled.div`
  width: 70vw;
  margin-top: 120px;
`;

const Title = styled.div`
  width: 100%;

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

const Lists = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const List = styled.div`
  width: 220px;
  height: 160px;
  margin-top: 30px;
  padding: 20px 18px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border: 1px solid #ced4da;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  &:hover {
    animation: shaking 0.3s;
    animation-direction: alternate;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    cursor: pointer;
  }
  @keyframes shaking {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-20px);
    }
  }
`;

const Text = styled.p`
  margin: 0%;
  font-size: 16px;
  font-weight: 600;
`;

const Genre = styled.p`
  margin: 8px 0 0 0;
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  background: linear-gradient(to right, #ffa7be, #7766c6);
  color: transparent;
  -webkit-background-clip: text;
`;

const Route = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 600;
  text-align: end;
  color: ${theme.mainColor};
`;
