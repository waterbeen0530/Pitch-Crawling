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
                data: [121],
                borderColor: ["#FFA7BE"],
                backgroundColor: ["#FFA7BE"],
              },
              {
                label: "댄스",
                data: [57],
                borderColor: ["#ff6b6b"],
                backgroundColor: ["#ff6b6b"],
              },
              {
                label: "랩/힙합",
                data: [42],
                borderColor: ["#FFC212"],
                backgroundColor: ["#FFC212"],
              },
              {
                label: "POP",
                data: [28],
                borderColor: ["#46467A"],
                backgroundColor: ["#46467A"],
              },
              {
                label: "국내드라마",
                data: [25],
                borderColor: ["#7766C6"],
                backgroundColor: ["#7766C6"],
              },
              {
                label: "록/메탈",
                data: [20],
                borderColor: ["#748ffc"],
                backgroundColor: ["#748ffc"],
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
