import styled from "@emotion/styled";
import Header from "../components/common/header";
import Banner from "../components/summer/banner";
import Consume from "../components/summer/consume";
import Genres from "../components/summer/genres";
import Pouplar from "../components/summer/popular";

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
