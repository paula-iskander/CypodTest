import React from "react";
import { Box, Text, HStack } from "@chakra-ui/react";
import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Tbody,
  Td,
  Th,
  ButtonGroup,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
export function SensorsTable({ data }) {
  const userRole = sessionStorage.getItem("role") || "operator";
  const navigate = useNavigate();

  const handleRowClick = (id) => {
    if (userRole === "admin") {
      navigate(`/sensor/${id}`);
    }
  };

  return (
    <TableContainer mt={4}>
      <Table
        variant="simple"
        size="sm"
        color="whiteAlpha.900"
        sx={{
          tableLayout: "fixed",
          width: "100%",
        }}
      >
        <Thead>
          <Tr>
            <Th color="whiteAlpha.800">id</Th>
            <Th color="whiteAlpha.800">Status</Th>
            <Th color="whiteAlpha.800">name</Th>
            <Th color="whiteAlpha.800">temp.</Th>
            <Th color="whiteAlpha.800">humidity</Th>
            <Th
              color="whiteAlpha.800"
              fontSize={{ base: "3xs", sm: "3xs", md: "xs" }}
            >
              Power <br /> Consumption
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((sensor) => (
            <Tr
              key={sensor.id}
              cursor={userRole === "admin" ? "pointer" : "default"}
              _hover={
                userRole === "admin" ? { bg: "whiteAlpha.200" } : undefined
              }
              onClick={
                userRole === "admin"
                  ? () => handleRowClick(sensor.id)
                  : undefined
              }
            >
              <Td>{sensor.id}</Td>
              <Td>
                <HStack spacing={2} align="center">
                  <Box
                    w="8px"
                    h="8px"
                    borderRadius="full"
                    bg={sensor.status === "on" ? "green.400" : "red.400"}
                  />
                  <Text>{sensor.status}</Text>
                </HStack>
              </Td>
              <Td>{sensor.name}</Td>
              <Td>{sensor.temperature}</Td>
              <Td>{sensor.humidity}</Td>
              <Td>{sensor.totalPowerConsumption}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
