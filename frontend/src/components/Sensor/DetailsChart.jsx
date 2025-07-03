import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { Box } from "@chakra-ui/react";
import "../../components/chart.css";

export default function DetailsChart({ details }) {
  // Months in order to map your object keys
  const monthOrder = [
    "jan", "feb", "march", "april", "may", "june",
    "july", "august", "september", "october", "november", "december",
  ];

  // Parse monthlyPowerConsumption into a number array
  console.log("Details Chart", Object.values(details[0].monthlyPowerConsumption));
  const monthlyData =  Object.values(details[0].monthlyPowerConsumption)
    
  // Dates for labels
  const dates = [
    "2025-01-01", "2025-02-01", "2025-03-01", "2025-04-01",
    "2025-05-01", "2025-06-01", "2025-07-01", "2025-08-01",
    "2025-09-01", "2025-10-01", "2025-11-01", "2025-12-01",
  ];

  const [state, setState] = useState({
    series: [
      {
        name: "Power Consumed (kw)",
        data: monthlyData,
      },
    ],
    options: {
      chart: {
        type: "area",
        height: 350,
        zoom: { enabled: false },
      },
      dataLabels: {
        enabled: true,
        style: { colors: ["#1d1d1d"] },
      },
      stroke: { curve: "straight" },
      title: {
        text: "Detailed Power Consumption Chart",
        align: "left",
        style: {
          color: "#ffffff",
          fontSize: "16px",
          fontWeight: "bold",
        },
      },
      labels: dates,
      xaxis: {
        type: "datetime",
        labels: {
          style: { colors: "#ffffff", fontSize: "12px" },
        },
      },
      yaxis: {
        opposite: true,
        labels: {
          style: { colors: "#ffffff", fontSize: "12px" },
        },
      },
      legend: { horizontalAlign: "left" },
      tooltip: { theme: "dark" },
    },
  });

  // If details change, update series data accordingly
  useEffect(() => {
    setState(prev => ({
      ...prev,
      series: [{ name: "Power Consumed (kw)", data: monthlyData }],
    }));
  }, [details]);

  return (
    <Box>
      <ReactApexChart options={state.options} series={state.series} type="area" height={250} />
    </Box>
  );
}
