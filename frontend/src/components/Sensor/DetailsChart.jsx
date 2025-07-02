import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Box } from "@chakra-ui/react";
import "../../components/chart.css"

const seriesData = {
  monthDataSeries1: {
    prices: [10, 15, 12, 20, 18, 25, 30, 28, 35, 40, 38, 45],
    dates: ["2025-01-01", "2025-02-01", "2025-03-01", "2025-04-01", "2025-05-01", "2025-06-01", "2025-07-01", "2025-08-01", "2025-09-01", "2025-10-01", "2025-11-01", "2025-12-01"],
  },
};

export default function DetailsChart() {
  const [state, setState] = useState({
    series: [
      {
        name: "Power Consumed",
        data: seriesData.monthDataSeries1.prices,
      },
    ],
    options: {
      chart: {
        type: "area",
        height: 350,
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: true,
        style: {
          colors: ["#1d1d1d"], // color for data labels
        },
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "Detailed Power Consumption Chart",
        align: "left",
        style: {
            color: "#ffffff",      
            fontSize: "16px",
            fontWeight: "bold",
          },
      },
      
      labels: seriesData.monthDataSeries1.dates,
      xaxis: {
        type: "datetime",
        labels: {
            style: {
              colors: "#ffffff",  // your desired color
              fontSize: "12px",
            },
          },
      },
      yaxis: {
        opposite: true,
        labels: {
            style: {
              colors: "#ffffff",  // your desired color
              fontSize: "12px",
            },
          },
      },
      legend: {
        horizontalAlign: "left",
      },
      tooltip: {
        theme: "dark", // sets hover tooltip text to black on white
      },
    },
  });

  return (
    <Box>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="area"
        height={250}
      />
    </Box>
  );
}
