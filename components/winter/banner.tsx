import styled from "@emotion/styled";
import { theme } from "../../styles/theme";

export default function Banner() {
  return (
    <Container>
      <Wrapper>
        <Text>
          <Summary>#melon-crawling</Summary>
          <Title>차가운 겨울과 어울리는</Title>
          <Title>대중음악은 무엇일까?</Title>
          <Content>
            사계절 중 하나인 겨울과 대중음악의 상관관계를 알아보자!
          </Content>
        </Text>
        <Image src="/img/winter/snow.png"></Image>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 70vw;
  height: 330px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: #6880e1;
`;

const Wrapper = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Text = styled.div`
  color: ${theme.whiteColor};
`;

const Summary = styled.p`
  margin: 0;
  line-height: 200%;
  font-size: 18px;
  font-weight: 600;
`;

const Title = styled.h2`
  margin: 0;
  line-height: 180%;
  font-size: 30px;
`;

const Content = styled.p`
  margin: 0;
  line-height: 180%;
  font-size: 16px;
`;

const Image = styled.img`
  width: 32%;
`;
