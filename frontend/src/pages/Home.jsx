import React from "react";
import { outerBoxStyle } from "../components/theme.js";
import { Box, Text, VStack, HStack } from "@chakra-ui/react";
import Gmap from "../components/Home/Gmap.jsx";
import Navbar from "../components/Navbar.jsx";
import Stats from "../components/Home/Stats.jsx";

import {
  faLink,
  faPowerOff,
  faTemperatureArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import DetailsChart from "../components/Sensor/DetailsChart.jsx";
import ConsumptionChart from "../components/Home/ConsumptionChart.jsx";
import { SensorsTable } from "../components/Home/Table.jsx";
import SlotCounter from "react-slot-counter";
function Home() {
  const sensors = [
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
    {
      id: 2,
      name: "sensor-2",
      temperature: "22 c",
      humidity: "80%",
      power: "21 kw",
      status: "off",
      lat: 25.12235,
      lng: 55.37482,
    },
  ];
  
  
  return (
    <Box {...outerBoxStyle} display={"block"}>
      <VStack spacing={4}>
        <Navbar />
        <Gmap sensors={sensors} />
        <Box
          bg={"#1d1d1d"}
          w={{ base: "113%", sm: "108%", md: "106%", lg: "104%" }}
          px={6}
          py={4}
          h={"25vh"}
          borderWidth={"2px"}
          border={5}
          borderColor={"#fff"}
        >
          <HStack spacing={4} justifyContent="center" h="100%" minH={"20vh"}>
            <Stats
              style={{ borderRight: "1px solid #fff" }}
              image={faLink}
              title="Connected Sensors"
              value={10}
            />
            <Stats image={faPowerOff} title="Powered on Sensors" value={8} />
            <Stats
              image={faTemperatureArrowUp}
              title="Overheating Sensors"
              value={2}
            />
          </HStack>
        </Box>
        <Box px={6} w="100%" mt={1} mb={5}>
          <Text as="b" color={"white"} alignSelf={"start"}>
            Overall Power Consumption
            <Box w={{base:"100%",sm:"100%",md:"50%"}} mx={"auto"} >
          <ConsumptionChart/>
          </Box>
          </Text>
          <SensorsTable 
          data={sensors} />
        
        
        </Box>
      </VStack>
    </Box>
  );
}
export default Home;
