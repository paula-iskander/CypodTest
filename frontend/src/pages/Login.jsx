import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { outerBoxStyle , glassInnerBoxStyle} from "../components/theme.js";


import {
  Box,
  Button,
  Text
} from "@chakra-ui/react";

import LoginIcon from "../components/Login/LoginIcon";
import LoginInput from "../components/Login/LoginInput";
function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [invalidCredentials, setInvalidCredentials] = useState(false);
    const [errorDisplay,setErrorDisplay] = useState(false);
    const navigate = useNavigate();
    const handleLogin = () => {
        if (invalidCredentials) {  
          setErrorDisplay(true);
        } else {
          navigate("/home");
        }
      };
      
  return (
    <Box {...outerBoxStyle}
    >
      <Box
       {...glassInnerBoxStyle}
      >
       <LoginIcon/>
       
        <LoginInput
          placeholder="Username"
          type="email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          isInvalid={false}
          errorMessage=""/>
        <LoginInput
          placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            isInvalid={false}
            errorMessage=""/>
             <Text
          fontSize={{ base: "md", sm: "lg", md: "xl", lg: "2xl" }}
          color="#ED4337"
          fontWeight="regular"
          textAlign="center"
          display={errorDisplay? "inline":"none"}
          mt={4}>
            Username or Password may be incorrect please try again
        </Text>
        
        <Box p={2} w={"100%"}>
          <Button 
          variant="outline" 
          color={"white"}
           _hover={{bg:"#2d2d2d"}} 
            w={"100%"} 
            my={4}
            onClick={handleLogin}
            >
            Log in
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
export default Login;
