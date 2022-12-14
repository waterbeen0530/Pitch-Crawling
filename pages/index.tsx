import styled from "@emotion/styled";
import Header from "../components/common/header";
import Banner from "../components/main/banner";
import Consume from "../components/main/consume";
import Popular from "../components/main/popular";

export default function Home() {
  return (
    <Container>
      <Header />
      <Banner />
      <Consume />
      <Popular />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
