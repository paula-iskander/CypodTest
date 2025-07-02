// src/theme.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  // you can add other components or colors here later
});

// custom style export
export const outerBoxStyle = {
  bg: "#2d2d2d",
  w: "100%",
  h: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  minW: "100vw",
  minH: "100vh",
  padding: 6,
};

export default theme;

export const glassInnerBoxStyle = {
    border: "1px solid rgba(255, 255, 255, 0.2)",
    px: 8,
    pt: 4,
    pb: 8,
    borderRadius: "lg",
    boxShadow: "lg",
    w: "55%",
    h: "fit-content",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    bg: "#1d1d1d",
    backdropFilter: "blur(10px)",
  };

  