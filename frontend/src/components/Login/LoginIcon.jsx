import React from "react";
import CypodLogo from "../../assets/cypod-logo-white.png";
import { Image } from "@chakra-ui/react";
function LoginIcon() {
    return(
         <Image
                  alignSelf={"center"}
                  width={{ base: "100px", sm: "140px", md: "200px", lg: "250px" }}
                  src={CypodLogo}
                  alt="Cypod Logo"
                  height={{ base: "50px", sm: "70px", md: "100px", lg: "125px" }}
                />
    );
}
export default LoginIcon;