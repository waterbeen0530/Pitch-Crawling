import styled from "@emotion/styled";
import Chart from "chart.js/auto";
import { useEffect, useRef } from "react";

export default function Pouplar() {
  const canvasEl = useRef<HTMLCanvasElement>(null);

  let myDoughnutChart: Chart<"doughnut", number[], string>;

  const createDoughnutChart = () => {
    if (canvasEl && canvasEl.current) {
      const ctx = canvasEl.current.getContext("2d");

      if (ctx) {
        myDoughnutChart = new Chart(ctx, {
          type: "doughnut",
          data: {
            labels: ["댄스", "록/메탈", "발라드", "POP"],
            datasets: [
              {
                label: "봄",
                data: [3, 3, 1, 2],
                backgroundColor: ["#e69046", "#d2c4b2", "#aa442f", "#886f5c"],
                hoverOffset: 4,
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
    createDoughnutChart();

    return () => {
      myDoughnutChart.destroy();
    };
  }, []);

  return (
    <Container>
      <Title>
        <General>가장</General>
        <Emphasis>인기 있는</Emphasis>
        <General>장르🍑</General>
      </Title>
      <canvas id="myChart" ref={canvasEl} height="100" />
    </Container>
  );
}

const Container = styled.div`
  margin-top: 300px;
  width: 70vw;
  height: 400px;
  @media (max-width: 900px) {
    width: 70vw;
    height: 70vw;
  }
`;

const Title = styled.div`
  width: 100%;
  margin: 0 0 40px 0;
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
