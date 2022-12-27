import styled from "@emotion/styled";
import Header from "../components/common/header";
import Banner from "../components/spring/banner";
import Consume from "../components/spring/consume";
import Genres from "../components/spring/genres";
import Pouplar from "../components/spring/popular";

export default function Home() {
  return (
    <Container>
      <Header />
      <Banner />
      <Genres />
      <Pouplar />
      <Consume />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
