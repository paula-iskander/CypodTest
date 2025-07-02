import React from "react";
import {Box,Image,Text, ButtonGroup} from "@chakra-ui/react";
import CypodLogo from "../assets/cypod-logo-white.png";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome ,faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Logic for logging out the user
    navigate("/");
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      width="100%"
      height="60px"
      bg="#1d1d1d"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      paddingX={4}
      zIndex={1000}
    >
      <Image src={CypodLogo} alt="Cypod Logo" height="40px" />
      <ButtonGroup display="flex" gap={1} alignItems="center" onClick={handleLogout} cursor={"pointer"}>
        <Text color={"whiteAlpha.900"}>Log out</Text>
        <FontAwesomeIcon icon={faArrowRightFromBracket} style={{ color: "#ebebeb" }}  />
      </ButtonGroup>
    </Box>
  );
}
export default Navbar;