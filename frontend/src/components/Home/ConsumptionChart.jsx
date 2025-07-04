import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

export default function ConsumptionChart({sensorsList}) {
  
  const powerSeries = sensorsList && sensorsList.length > 0
  ? sensorsList.map(sensor => {
      const powerString = sensor.totalPowerConsumption || "";
      const powerNumber = parseInt(powerString);
      return isNaN(powerNumber) ? 0 : powerNumber;
    })
  : [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  const sensorLabels = sensorsList && sensorsList.length > 0
  ? sensorsList.map(sensor => sensor.name || "Unknown Sensor")
  : [
      "sensor-1",
      "sensor-2",
      "sensor-3",
      "sensor-4",
      "sensor-5",
      "sensor-6",
      "sensor-7",
      "sensor-8",
      "sensor-9",
      "sensor-10",
    ];

  const [state, setState] = useState({
    sensors: powerSeries,
    options: {
      chart: {
        type: "donut",
      },
      labels: sensorLabels,
      colors: [
        "#4e79a7",  // muted blue
        "#59a14f",  // muted green
        "#f28e2b",  // muted orange
        "#e15759",  // muted red
        "#76b7b2",  // muted teal
        "#edc948",  // muted yellow
        "#b07aa1",  // muted purple
        "#ff9da7",  // soft pink
        "#9c755f",  // muted brown
        "#bab0ac",  // grey
        "#86bcb6",  // subtle aqua
        "#8cd17d",  // subtle lime
        "#f1ce63",  // soft gold
        "#d4a6c8",  // lavender
        "#f28e2c",  // light orange
        "#7f7f7f",  // neutral grey
        "#bcbd22",  // olive
        "#17becf",  // subtle cyan
        "#aec7e8",  // light blue
        "#c5b0d5",  // light purple
      ],
      
      legend: {
        labels: {
          colors: "#ffffff",
        },
        position: "right",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  return (
    <div>
      
      <ReactApexChart
        options={state.options}
        series={state.sensors}
        type="donut"
      />
    </div>
  );
}
