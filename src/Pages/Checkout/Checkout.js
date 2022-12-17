import React, { useState } from "react";
// import "./Checkout.css";
import {
  Heading,
  FormControl,
  FormLabel,
  Input,
  Flex,
  Button,
  Spacer,
  Container,
  Stack,
  useToast,
} from "@chakra-ui/react";
const initValue = {
  name: "",
  address: "",
  city: "",
  zip: "",
  phone: "",
};
const Checkout = () => {
  const [form, setForm] = useState(initValue);
  const [otp, setOtp] = useState("");
  const toast = useToast();
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      form.name === "" ||
      form.address === "" ||
      form.city === "" ||
      form.zip === "" ||
      form.phone === ""
    ) {
      toast({
        title: "Missing Details",
        description: "Please fill all the details",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    } 
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  console.log(form)
  return (
    <Container
      marginTop={"20px"}
      marginBottom={"30px"}
      bg="#ffffff"
      maxW="750px"
      alignItems="center"
      justifyContent="space-between"
    >
      <Heading textAlign={"center"} fontSize="3xl">
        Shipping Address Form
      </Heading>

      <FormControl isRequired>
        <Stack spacing={3}>
          <FormLabel>Name</FormLabel>
          <Input
            type={"text"}
            onChange={handleChange}
            name="name"
            value={form.name}
          />
          <FormLabel>Address</FormLabel>
          <Input
            type={"text"}
            onChange={handleChange}
            name="address"
            value={form.address}
          />
          <FormLabel>City</FormLabel>
          <Input
            type={"text"}
            onChange={handleChange}
            name="city"
            value={form.city}
          />
          <FormLabel>Zip/Postal</FormLabel>
          <Input
            type={"number"}
            onChange={handleChange}
            name="zip"
            value={form.zip}
          />
          <FormLabel>Phone</FormLabel>
          <Input
            type={"number"}
            onChange={handleChange}
            name="phone"
            value={form.phone}
          />
          <Flex>
            <Button
              style={{
                color: "black",
                background: "#ffffff",
                border: "1px solid",
                borderRadius: "20px",
              }}
            >
              Cancel
            </Button>
            <Spacer></Spacer>
            <Button
              style={{
                background: "#414467",
                color: "#ffffff",
                width: "70%",
                borderRadius: "16px",
              }}
              type="submit"
              onClick={handleSubmit}
            >
              Save
            </Button>
          </Flex>
        </Stack>
      </FormControl>
    </Container>
  );
};

export default Checkout;
