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
            labels: ["가을"],
            datasets: [
              {
                label: "발라드",
                data: [95],
                borderColor: ["#aa442f"],
                backgroundColor: ["#aa442f"],
              },
              {
                label: "댄스",
                data: [74],
                borderColor: ["#e69046"],
                backgroundColor: ["#e69046"],
              },
              {
                label: "국내드라마",
                data: [36],
                borderColor: ["#f6d299"],
                backgroundColor: ["#f6d299"],
              },
              {
                label: "록/메탈",
                data: [35],
                borderColor: ["#d2c4b2"],
                backgroundColor: ["#d2c4b2"],
              },
              {
                label: "POP",
                data: [25],
                borderColor: ["#886f5c"],
                backgroundColor: ["#886f5c"],
              },
              {
                label: "인디음악",
                data: [21],
                borderColor: ["#4d2e27"],
                backgroundColor: ["#4d2e27"],
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
