import styled from "@emotion/styled";
import Header from "../components/common/header";
import Banner from "../components/main/banner";
import BarChart from "../components/main/barChart";
import Consume from "../components/main/consume";
import Popular from "../components/main/popular";

export default function Home() {
  return (
    <Container>
      <Header />
      <Banner />
      <Consume />
      <Popular />
      <BarChart />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
