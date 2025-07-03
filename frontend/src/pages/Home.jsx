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
import axios from "axios";
import { useState, useEffect } from "react";
function Home() {

  const [sensors, setSensors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [PoweredOnSensors, setPoweredOnSensors] = useState(0);
  
  useEffect(() => {
    async function fetchDevices() {
      try {
        const response = await axios.get("http://localhost:4160/devices"); // your API URL here
        setSensors(response.data); // adjust if your data structure is different
        setLoading(false);
      } catch (err) {
        setError(err.message || "Error fetching devices");
        setLoading(false);
      }
    }

    fetchDevices();
  }, []);
  
  function countOverheatedDevices(sensors) {
    return sensors.filter(sensor => {
      const tempString = sensor.temperature || "";
      const tempNumber = parseInt(tempString);
      return tempNumber > 33;
    }).length;
  }
  if (loading) return <Text>Loading sensors...</Text>;
  if (error) return <Text color="red">{error}</Text>;
  
  return (
    <Box {...outerBoxStyle} display={"block"}>
      <VStack spacing={4}>
        <Navbar />
        <Box>
        <Gmap sensors={sensors} />
        </Box>
      
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
              value={sensors.length}
            />
            <Stats image={faPowerOff} title="Powered on Sensors" value={sensors.filter(sensor => sensor.status === "on").length} />
            <Stats
              image={faTemperatureArrowUp}
              title="Overheating Sensors"
              value={countOverheatedDevices(sensors)}
            />
          </HStack>
        </Box>
        <Box px={6} w="100%" mt={1} mb={5}>
          <Text as="b" color={"white"} alignSelf={"start"}>
            Overall Power Consumption
            <Box w={{base:"100%",sm:"100%",md:"50%"}} mx={"auto"} >
          <ConsumptionChart sensorsList={sensors}/>
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
