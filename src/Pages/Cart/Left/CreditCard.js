import { Box, Button, HStack, Image, Text, Link } from "@chakra-ui/react";
import React from "react";

const CreditCard = () => {
  return (
    <Box
      w={{ lg: "100%", md: "100%", base: "100%" }}
      border="1px solid grey"
      borderRadius="5px"
      h={{ lg: "120px", md: "auto", base: "auto" }}
      p="10px"
    >
      <Text fontWeight={"bold"} fontSize={{ lg: "", md: "", base: "" }}>
        The Sephora Credit Card Program
      </Text>
      <HStack
        alignItems="center"
        ml="10px"
        mt="10px"
        spacing={{ lg: 16, md: 6, sm: 5 }}
      >
        <Box w={{ lg: "50px", md: "70px", base: "100px" }}>
          {" "}
          <Image src="https://www.sephora.com/contentimages/creditcard/cardicon/CreditCard.svg" />
        </Box>
        <Box w={{ lg: "450px", md: "450px", sm: "550px" }}>
          <Text>
            Save 25% on this order when you open and use either Sephora Credit
            Card today*
          </Text>
        </Box>
        <Link href="https://www.sephora.com/creditcard?icid2=ccBannerMessageNewStatusApp:See_Details">
          <Button
            border="2px solid black"
            background="none"
            borderRadius="20px"
            _hover={{ background: "none", textDecoration: "none" }}
          >
            See Details
          </Button>
        </Link>
      </HStack>
      <Text ml="10px" fontSize="14px" color="grey">
        *Subject to credit approval. Exclusions apply.
      </Text>
    </Box>
  );
};

export default CreditCard;