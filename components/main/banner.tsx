import styled from "@emotion/styled";
import { theme } from "../../styles/theme";

export default function Banner() {
  return (
    <Container>
      <Wrapper>
        <Text>
          <Summary>#melon-crawling</Summary>
          <Title>계절과 대중음악은</Title>
          <Title>어떤 상관관계가 있을까?</Title>
          <Content>계절이 대중음악에 미치는 영향과 관계를 알아보자!</Content>
        </Text>
        <Image src="/img/main/music.png"></Image>
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
  background-color: ${theme.mainColor};
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
