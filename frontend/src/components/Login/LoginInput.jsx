import React, { useState } from "react";
import {
  Input,
  FormControl,
  InputGroup,
  InputRightElement,
  Button,
  FormErrorMessage,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function LoginInput({
  placeholder,
  type = "text",
  value,
  onChange,
  isInvalid = false,
  errorMessage,
}) {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);

  return (
    <FormControl isInvalid={isInvalid} my={3} p={2} isRequired>
      <InputGroup>
        <Input
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          type={type === "password" ? (show ? "text" : "password") : type}
          textColor="whiteAlpha.800"
          _placeholder={{ color: "whiteAlpha.600" }}
          focusBorderColor="whiteAlpha.900"
          fontSize={{ base: "xs", sm: "sm", md: "md", lg: "lg" }}
        />
        {type === "password" && (
          <InputRightElement>
            <Button
              onClick={handleToggle}
              bg="transparent"
              _hover={{ bg: "transparent" }}
              _active={{ bg: "transparent" }}
              size="sm"
            >
              <FontAwesomeIcon
                icon={show ? faEye : faEyeSlash}
                style={{ color: "#ebebeb" }}
              />
            </Button>
          </InputRightElement>
        )}
      </InputGroup>
      {isInvalid && (
        <FormErrorMessage>{errorMessage}</FormErrorMessage>
      )}
    </FormControl>
  );
}

export default LoginInput;
