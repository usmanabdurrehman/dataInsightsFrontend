import React, { useMemo } from "react";
import { PlotData, ProblemType } from "../../types";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Scatter } from "react-chartjs-2";
import { InsightsWrapper } from "./InsightsWrapper";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const lineOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
  scales: {
    x: {
      display: true,
      title: {
        display: true,
        text: "1st Principal Component",
      },
    },
    y: {
      display: true,
      title: {
        display: true,
        text: "Target",
      },
    },
  },
};

const scatterOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
  scales: {
    x: {
      display: true,
      title: {
        display: true,
        text: "1st Principal Component",
      },
    },
    y: {
      display: true,
      title: {
        display: true,
        text: "2nd Principal Component",
      },
    },
  },
};

export default function FeaturesVsTarget({ plotData }: { plotData: PlotData }) {
  const lineData = useMemo(() => {
    return {
      labels: plotData?.x?.map((x) => x.toString()),
      datasets: [
        {
          label: "Line Plot",
          data: plotData?.y,
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
          pointStyle: false as const,
        },
      ],
    };
  }, [plotData]);

  const scatterData = useMemo(() => {
    return {
      datasets: [
        {
          label: "Scatter Plot",
          data: plotData?.xy,
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
      ],
    };
  }, [plotData]);

  return (
    <InsightsWrapper
      title="Features* vs Target"
      subTitle="* Compressed using a decomposition method like PCA"
      content={
        plotData?.problem_type === ProblemType.Regression ? (
          <Line data={lineData} options={lineOptions} />
        ) : (
          <Scatter data={scatterData} options={scatterOptions} />
        )
      }
    />
  );
}
