import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { outerBoxStyle , glassInnerBoxStyle} from "../components/theme.js";
import axios from "axios";



import {
  Box,
  Button,
  Text
} from "@chakra-ui/react";

import LoginIcon from "../components/Login/LoginIcon";
import LoginInput from "../components/Login/LoginInput";
function Login() {
  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:4160/auth/login", {
        username,
        password
      });
      console.log(username, password)

      // store token
      sessionStorage.setItem("token", response.data.token);
  
      // decode role from JWT or backend if you return it
      const tokenPayload = JSON.parse(atob(response.data.token.split('.')[1]));
      const role = tokenPayload.role;
  
      // redirect based on role
      if (role === "admin") {
        navigate("/home");  // you can change the route name
      } else if (role === "operator") {
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
      setErrorDisplay(true);
    }
  };
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [invalidCredentials, setInvalidCredentials] = useState(false);
    const [errorDisplay,setErrorDisplay] = useState(false);
    const navigate = useNavigate();
    
      
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
