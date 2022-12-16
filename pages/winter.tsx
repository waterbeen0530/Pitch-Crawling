import styled from "@emotion/styled";
import Header from "../components/common/header";
import Banner from "../components/winter/banner";
import Genres from "../components/winter/genres";
import Pouplar from "../components/winter/popular";

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
