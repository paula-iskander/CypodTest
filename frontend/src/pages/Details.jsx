import React from "react";
import { Box, Text, VStack, HStack ,useBreakpointValue} from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { outerBoxStyle, glassInnerBoxStyle } from "../components/theme.js";
import Navbar from "../components/Navbar";
import DetailsChart from "../components/Sensor/DetailsChart.jsx";
import Gmap from "../components/Home/Gmap.jsx";
import SensorInfo from "../components/Sensor/SensorInfo.jsx";
export default function Details() {
  const sensor = [
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
  const row= useBreakpointValue({
          base:"repeat(3, 1fr)", 
          sm: "repeat(3, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(2, 1fr)",
        });
        const col= useBreakpointValue({
          base: "repeat(1, 1fr)",
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(2, 1fr)",
        });
        const height= useBreakpointValue({
            base: "50%",
            sm: "50%",
            md: "100%",
            lg: "100%",
          });
  return (
    <Box {...outerBoxStyle} color={"white"}>
      <Navbar />
      <Box {...glassInnerBoxStyle} width={"98%"} h="80vh" pb={10}>
        <Grid
          templateRows={row}
          templateColumns={col}
          
          gap={2}
        >
          <GridItem
            rowSpan={{ base: 1, sm: 1, md: 2 }}
            colSpan={{ base: 2, sm: 1, md: 1 }}
            w="100%"
            h="100%"
            bg={"#2d2d2d"}
            borderRadius={"lg"}
            p={6}
          >
           <SensorInfo/>
          </GridItem>
          <GridItem w="100%" h="100%">
            <Box h={height}>
              <Gmap sensors={sensor} />
            </Box>
          </GridItem>
          <GridItem w="100%" h="35vh">
            <Box h={height}>
            <DetailsChart />
            </Box>
            
          </GridItem>
        </Grid>
      </Box>

      {/* You can add more content here, such as a chart or other details */}
      {/* Example: <DetailsChart /> */}
      {/* Example: <ConsumptionChart /> */}
    </Box>
  );
}
