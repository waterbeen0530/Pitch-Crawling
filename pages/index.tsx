import styled from "@emotion/styled";
import Header from "../components/common/header";
import Banner from "../components/main/banner";
import Consume from "../components/main/consume";

export default function Home() {
  return (
    <Container>
      <Header />
      <Banner />
      <Consume />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
