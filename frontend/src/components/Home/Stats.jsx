import React from "react";
import SlotCounter from "react-slot-counter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { VStack, Box, Text } from "@chakra-ui/react";


export default function Stats({ image, title, value }) {
    return (
      <VStack
        
        h="100%"
        w="33%"
        spacing={1}
        justify="center"
      >
        <Box
          fontSize={{ base: "2xl", sm: "3xl", md: "3xl", lg: "4xl" }}
          color="whiteAlpha.900"
          textAlign="center"
        >
          <FontAwesomeIcon icon={image} style={{ marginTop: "5px" }} />
        </Box>
        <Text
          fontSize={{ base: "md", sm: "lg", md: "xl", lg: "2xl" }}
          color="whiteAlpha.900"
          fontWeight="regular"
          textAlign="center"
        >
          {title}
        </Text>
        <Box fontSize="3xl" color="whiteAlpha.900">
          <SlotCounter value={value} />
        </Box>
      </VStack>
    );
  }
  