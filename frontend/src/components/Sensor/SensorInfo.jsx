import React from "react";
import { Box, Text, VStack, HStack,useBreakpointValue } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { faTemperatureHalf ,faDroplet} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SlotCounter from "react-slot-counter";

export default function SensorInfo({sensor}){
    const headingFontSize = useBreakpointValue({
        base: "md",
        sm: "sm",
        md: "xl",
        lg: "3xl",
      });
    
      const subheadingFontSize = useBreakpointValue({
        base: "xs",
        sm: "md",
        md: "xl",
        lg: "2xl",
      });
    
      const iconFontSize = useBreakpointValue({
        base: "3xl",
        sm: "xl",
        md: "6xl",
        lg: "7xl",
      });
    

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
    return(
        <Grid
              h="100%"
              templateRows={row}
              templateColumns={col}
              mt={-10}
              rowGap={12}
            >
              <GridItem colSpan={1} alignSelf={"end"} >
                <Box display={"block"} mt={"auto"}>
                  <Box > 
                    <HStack spacing={2} align="center">
                      <Box
                        w="8px"
                        h="8px"
                        borderRadius="full"
                        bg={sensor[0].status === "on" ? "green.400" : "red.400"}
                      />
                      
                      <Text as="b" fontSize={subheadingFontSize}>
                        {sensor[0].status}
                      </Text>
                    </HStack>
                  </Box>
                  <Box>
                    <Text as={"b"} fontSize={headingFontSize}>
                      {sensor[0].name}
                    </Text>
                  </Box>
                  <Box>
                    <Text  fontSize={headingFontSize}>
                      ID: {sensor[0].id}
                    </Text>
                  </Box>
                  <Box>
                    <Text  fontSize={headingFontSize}>
                      Latitude: {sensor[0].lat.toFixed(2)}
                    </Text>
                  </Box>
                  <Box>
                    <Text  fontSize={headingFontSize}>
                      Longitude: {sensor[0].lng.toFixed(2)}
                    </Text>
                  </Box>
                  
                </Box>
              </GridItem>
                <GridItem alignSelf={"end"} > 
                <Box   alignSelf={"end"}>
                    <Text  fontSize={headingFontSize}>
                      Current Power Consumption: {sensor[0].totalPowerConsumption}
                    </Text>
                  </Box>
                </GridItem>
              <GridItem  >
                <Box h={"100%"} w={"100%"} alignItems={"center"} justifyItems={"center"} mx={"auto"} >
                    <Box fontSize={iconFontSize} alignSelf={"center"}  w={"fit-content"} mx={"auto"}mb={2}>
                    <FontAwesomeIcon icon={faTemperatureHalf}/>
                    </Box>
                <Box w={"fit-content"} mx={"auto"}> 
                <Text as={"b"} fontSize={headingFontSize}>
                    Temperature
                  </Text>
                </Box>
                <Box w={"fit-content"} mx={"auto"}> 
                <Text as={"b"} fontSize={headingFontSize}>
                <SlotCounter value={sensor[0].temperature} />
                  </Text>
                </Box>
                  
                </Box>
              </GridItem>
              <GridItem  >
                <Box h={"100%"} w={"100%"} alignItems={"center"} justifyItems={"center"} mx={"auto"} >
                    <Box fontSize={iconFontSize} alignSelf={"center"}  w={"fit-content"} mx={"auto"}mb={2}>
                    <FontAwesomeIcon icon={faDroplet}/>
                    </Box>
                <Box w={"fit-content"} mx={"auto"}> 
                <Text as={"b"} fontSize={headingFontSize}>
                    humidity
                  </Text>
                </Box>
                <Box w={"fit-content"} mx={"auto"}> 
                <Text as={"b"} fontSize={headingFontSize}>
                <SlotCounter value={sensor[0].humidity} />
                  </Text>
                </Box>
                  
                </Box>
              </GridItem>
            </Grid>
    )
}