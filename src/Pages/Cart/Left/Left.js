import React from "react";
import CreditCard from './CreditCard'
import { Box } from "@chakra-ui/react";
import GetItShipped from "./GetItShipped";

const Left = () => {
  return (
    <Box
      id="left-container"
      w={{ lg: "65%", md: "65%", base: "100%" }}
      h={{ lg: "auto", md: "auto", base: "auto" }}
      // border="1px solid green"
    >
      <CreditCard />
      <GetItShipped />
    </Box>
  );
};

export default Left;