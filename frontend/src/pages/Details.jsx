import React, { useState, useEffect } from "react";
import { Box, Text, Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { outerBoxStyle, glassInnerBoxStyle } from "../components/theme.js";
import Navbar from "../components/Navbar";
import DetailsChart from "../components/Sensor/DetailsChart.jsx";
import Gmap from "../components/Home/Gmap.jsx";
import SensorInfo from "../components/Sensor/SensorInfo.jsx";
import axios from "axios";

export default function Details() {
  const { id } = useParams();

  const [device, setDevice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function normalizeMongoData(data) {
    if (typeof data !== "object" || data === null) return data;

    if ("$numberDouble" in data) {
      return parseFloat(data["$numberDouble"]);
    }
    if ("$numberInt" in data) {
      return parseInt(data["$numberInt"]);
    }
    if ("$oid" in data) {
      return data["$oid"];
    }

    const normalized = Array.isArray(data) ? [] : {};
    for (const key in data) {
      normalized[key] = normalizeMongoData(data[key]);
    }
    return normalized;
  }

  useEffect(() => {
    async function fetchDevice() {
      try {
        setLoading(true);
        const token = sessionStorage.getItem("token");
        const response = await axios.get(`http://localhost:4160/devices/${id}`, {
          headers: { Authorization: "Bearer " + token },
        });
        const normalizedDevice = normalizeMongoData(response.data);
        setDevice(normalizedDevice);
        setError(null);
      } catch (err) {
        setError(err.message || "Failed to fetch device");
      } finally {
        setLoading(false);
      }
    }

    if (id) fetchDevice();
  }, [id]);

  const row = useBreakpointValue({
    base: "repeat(3, auto)", // stack vertically on small screens
    sm: "repeat(3, auto)",
    md: "repeat(2, 1fr)", // two rows with equal height on md+
    lg: "repeat(2, 1fr)",
  });

  const col = useBreakpointValue({
    base: "repeat(1, 1fr)", // single column on small screens
    sm: "repeat(1, 1fr)",
    md: "repeat(2, 1fr)", // two columns on md+
    lg: "repeat(2, 1fr)",
  });

  const height = useBreakpointValue({
    base: "auto",
    sm: "auto",
    md: "35vh",
    lg: "35vh",
  });

  if (loading) return <Text>Loading device details...</Text>;
  if (error) return <Text color="red">{error + " " + id}</Text>;

  // Use device data here, or fallback example sensor
  const sensors = device
    ? [device] // Assuming device structure matches sensor structure needed
    : [
        {
          id: 1,
          name: "sensor-1",
          temperature: "23 c",
          humidity: "90%",
          power: "23 kw",
          status: "on",
          lat: 25.276987,
          lng: 55.296249,
        },
      ];

  return (
    <Box {...outerBoxStyle} h="fit-content" color={"white"}>
      <Navbar />
      <Box {...glassInnerBoxStyle} width={"98%"} h={"auto"}  pb={{ base: 4, md: 10 }}>
        <Grid templateRows={row} templateColumns={col} gap={2}>
          <GridItem
            rowSpan={{ base: 1, sm: 1, md: 2 }}
            colSpan={{ base: 1, sm: 1, md: 1 }}
            w="100%"
            h={{ base: "auto", sm: "auto", md: "100%", lg: "100%" }}
            bg={"#2d2d2d"}
            borderRadius={"lg"}
            p={6}
          >
            <SensorInfo sensor={sensors} />
          </GridItem>

          <GridItem w="100%" h={{ base: "auto", sm: "auto", md: height, lg: height }}>
            <Box h={{ base: "auto", sm: "auto", md: height, lg: height }}>
              <Gmap sensors={sensors} />
            </Box>
          </GridItem>

          <GridItem w="100%" h={{ base: "auto", sm: "auto", md: height, lg: height }}>
            <Box h={height}>
              <DetailsChart details={sensors} />
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}
