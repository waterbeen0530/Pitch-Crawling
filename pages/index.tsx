import styled from "@emotion/styled";
import Header from "../components/common/header";

export default function Home() {
  return (
    <Container>
      <Header />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
