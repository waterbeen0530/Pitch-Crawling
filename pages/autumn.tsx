import styled from "@emotion/styled";
import Banner from "../components/\bautumn/banner";
import Genres from "../components/\bautumn/genres";
import Pouplar from "../components/\bautumn/popular";
import Header from "../components/common/header";

export default function Home() {
  return (
    <Container>
      <Header />
      <Banner />
      <Genres />
      <Pouplar />
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
