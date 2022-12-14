import styled from "@emotion/styled";
import Chart from "chart.js/auto";
import { useEffect, useRef } from "react";

export default function Genres() {
  const canvasEl = useRef<HTMLCanvasElement>(null);

  let myLineChart: Chart<"line", number[], string>;

  const createBarChart = () => {
    if (canvasEl && canvasEl.current) {
      const ctx = canvasEl.current.getContext("2d");

      if (ctx) {
        myLineChart = new Chart(ctx, {
          type: "line",
          data: {
            labels: ["봄", "여름", "가을", "겨울"],
            datasets: [
              {
                label: "발라드",
                data: [121, 115, 95, 89],
                borderColor: ["#FFA7BE"],
                backgroundColor: ["#FFA7BE"],
              },
              {
                label: "댄스",
                data: [57, 66, 74, 57],
                borderColor: ["#ff6b6b"],
                backgroundColor: ["#ff6b6b"],
              },
              {
                label: "랩/힙합",
                data: [42, 36, 33, 63],
                borderColor: ["#FFC212"],
                backgroundColor: ["#FFC212"],
              },
              {
                label: "POP",
                data: [28, 30, 25, 27],
                borderColor: ["#46467A"],
                backgroundColor: ["#46467A"],
              },
              {
                label: "국내드라마",
                data: [25, 25, 36, 24],
                borderColor: ["#7766C6"],
                backgroundColor: ["#7766C6"],
              },
              {
                label: "록/메탈",
                data: [20, 24, 35, 21],
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
