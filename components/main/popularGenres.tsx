import styled from "@emotion/styled";
import Chart from "chart.js/auto";
import { useEffect, useRef } from "react";

export default function PopularGenres() {
  const canvasEl = useRef<HTMLCanvasElement>(null);

  let myBarChart: Chart<"bar", number[], string>;

  const temp = {};

  const createBarChart = () => {
    if (canvasEl && canvasEl.current) {
      const ctx = canvasEl.current.getContext("2d");

      if (ctx) {
        myBarChart = new Chart(ctx, {
          type: "bar",
          data: {
            labels: ["발라드", "댄스", "랩/힙합", "POP", "록/메탈", "R&B/soul"],
            datasets: [
              {
                label: "봄 소비량",
                data: [8, 1, 0, 0, 0, 0],
                backgroundColor: ["#FFA7BE"],
              },
              {
                label: "여름 소비량",
                data: [1, 6, 0, 1, 0, 1],
                backgroundColor: ["#FF6B6B"],
              },
              {
                label: "가을 소비량",
                data: [1, 3, 0, 2, 3, 0],
                backgroundColor: ["#FFC212"],
              },
              {
                label: "겨울 소비량",
                data: [1, 1, 6, 0, 1, 0],
                backgroundColor: ["#46467A"],
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
