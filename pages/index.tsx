import styled from "@emotion/styled";
import Header from "../components/common/header";
import Banner from "../components/main/banner";

export default function Home() {
  return (
    <Container>
      <Header />
      <Banner />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
