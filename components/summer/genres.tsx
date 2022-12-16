import styled from "@emotion/styled";
import Chart from "chart.js/auto";
import { useEffect, useRef } from "react";

export default function Genres() {
  const canvasEl = useRef<HTMLCanvasElement>(null);

  let myBarChart: Chart<"bar", number[], string>;

  const createBarChart = () => {
    if (canvasEl && canvasEl.current) {
      const ctx = canvasEl.current.getContext("2d");

      if (ctx) {
        myBarChart = new Chart(ctx, {
          type: "bar",
          data: {
            labels: ["봄"],
            datasets: [
              {
                label: "발라드",
                data: [115],
                borderColor: ["#1098AD"],
                backgroundColor: ["#1098AD"],
              },
              {
                label: "댄스",
                data: [66],
                borderColor: ["#3BC9DB"],
                backgroundColor: ["#3BC9DB"],
              },
              {
                label: "랩/힙합",
                data: [36],
                borderColor: ["#C5A2AB"],
                backgroundColor: ["#C5A2AB"],
              },
              {
                label: "POP",
                data: [30],
                borderColor: ["#F59F00"],
                backgroundColor: ["#F59F00"],
              },
              {
                label: "국내드라마",
                data: [25],
                borderColor: ["#FFC43A"],
                backgroundColor: ["#FFC43A"],
              },
              {
                label: "록/메탈",
                data: [24],
                borderColor: ["#FFD29F"],
                backgroundColor: ["#FFD29F"],
              },
            ],
          },
          options: {
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
            },
          },
        });
      }
    }
  };
  useEffect(() => {
    createBarChart();

    return () => {
      myBarChart.destroy();
    };
  }, []);

  return (
    <Cover>
      <Container>
        <Title>
          <General>가장</General>
          <Emphasis>많이 소비</Emphasis>
          <General>되는 장르🍑</General>
        </Title>
        <canvas id="myChart" ref={canvasEl} height="100" />
      </Container>
    </Cover>
  );
}

const Cover = styled.div`
  width: 70vw;
  height: 400px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 40px 0 0 0;
  @media (max-width: 900px) {
    width: 70vw;
    height: 70vw;
  }
`;

const Title = styled.div`
  width: 100%;
  margin: 130px 0 40px 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 24px;
`;

const General = styled.p`
  margin: 0;
`;

const Emphasis = styled.p`
  margin: 0 5px;
  font-weight: 800;
`;
