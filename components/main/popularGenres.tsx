import styled from "@emotion/styled";
import Chart from "chart.js/auto";
import { useEffect, useRef } from "react";

export default function PopularGenres() {
  const canvasEl = useRef<HTMLCanvasElement>(null);

  let myLineChart: Chart<"line", number[], string>;

  const createBarChart = () => {
    if (canvasEl && canvasEl.current) {
      const ctx = canvasEl.current.getContext("2d");

      if (ctx) {
        myLineChart = new Chart(ctx, {
          type: "line",
          data: {
            labels: [
              "발라드",
              "댄스",
              "랩/힙합",
              "POP",
              "인디음악",
              "국내드라마",
              "록/메탈",
              "R&B/Soul",
            ],
            datasets: [
              {
                label: "봄",
                data: [1, 8, 0, 0, 0, 0, 0, 0],
                borderColor: ["#FFA7BE"],
                backgroundColor: ["#FFA7BE"],
                tension: 0.1,
              },
              {
                label: "여름",
                data: [1, 6, 0, 1, 0, 0, 0, 1],
                borderColor: ["#ff6b6b"],
                backgroundColor: ["#ff6b6b"],
                tension: 0.1,
              },
              {
                label: "가을",
                data: [1, 3, 0, 1, 0, 0, 3, 0],
                borderColor: ["#FFC212"],
                backgroundColor: ["#FFC212"],
                tension: 0.1,
              },
              {
                label: "겨울",
                data: [1, 1, 6, 0, 0, 0, 1, 0],
                borderColor: ["#46467A"],
                backgroundColor: ["#46467A"],
                tension: 0.1,
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
      myLineChart.destroy();
    };
  }, []);

  return (
    <Container>
      <canvas id="myChart" ref={canvasEl} height="100" />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 70vw;
  height: 400px;
  margin: 40px 0 0 0;
  @media (max-width: 900px) {
    width: 70vw;
    height: 70vw;
  }
`;
