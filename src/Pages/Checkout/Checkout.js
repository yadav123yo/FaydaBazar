import React, { useState } from "react";
import "./Checkout.css";
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
  PinInput,
  PinInputField,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Image,
  Tooltip,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const initValue = {
  name: "",
  address: "",
  city: "",
  zip: "",
  phone: "",
};
const Checkout = () => {
  const [form, setForm] = useState(initValue);
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [boolean, setBoolean] = useState(false);
  const [inputFill, setInputFilled] = useState(false);
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const handleCompleteOtp = (value) => {
    console.log("complete otp", typeof value);
    if (value !== "1234") {
      setBoolean(false);
      toast({
        title: "Wrong OTP",
        description: "Please fill 1234 as otp",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    } else {
      setBoolean(true);
      toast({
        title: "Your otp is accepted",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    }
  };
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
    // setInputFilled(true);
    onOpen();
  };

  const handleOtpGenterate = () => {
    if (inputFill === false) {
      return toast({
        title: "Missing Details",
        description: "Please fill all the details",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    }
    if (!showOtpInput && form.phone.length === 10) {
      toast({
        title: "Your OTP is 1234",
        description: "Please fill 1234 as otp",
        status: "info",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      setTimeout(() => {
        setShowOtpInput(true);
      }, 2000);
    }
  };

  const handleCancle = () => {
    setForm(initValue);
    setShowOtpInput(false);
  };

  const handleChange = (e) => {
    if (
      form.name !== "" &&
      form.address !== "" &&
      form.city !== "" &&
      form.zip !== "" &&
      form.phone !== ""
    ) {
      setInputFilled(true);
    }
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  // console.log(form);
  return (
    <Container
      marginTop={"20px"}
      marginBottom={"40px"}
      bg="#ffffff"
      maxW="750px"
      alignItems="center"
      justifyContent="space-between"
    >
      <Tooltip label="Hey, Please, fill the details!" fontSize='md' bg='#3182ce'>
        <Heading margin={'30px'} textAlign={"center"} fontSize="3xl">
          Shipping Address Form/Checkout
        </Heading>
      </Tooltip>
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
          <Flex>
            <Input
              type={"number"}
              onChange={handleChange}
              name="phone"
              value={form.phone}
              style={{ width: "50%" }}
            />
            <Spacer></Spacer>
            <Button
              isDisabled={form.phone.length !== 10 || !inputFill}
              style={{
                color: "white",
                background: "brown",
                borderRadius: "20%",
              }}
              onClick={handleOtpGenterate}
            >
              Generate OTP
            </Button>
          </Flex>
          {showOtpInput && (
            <div>
              <FormLabel>Enter Otp</FormLabel>
              <HStack>
                <PinInput onComplete={handleCompleteOtp}>
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                </PinInput>
              </HStack>
            </div>
          )}
          <Flex style={{ marginTop: "30px" }}>
            <Button
              className="OTPbutton2"
              style={{
                color: "black",
                background: "#ffffff",
                border: "1px solid",
                borderRadius: "20px",
              }}
              onClick={handleCancle}
            >
              Cancel
            </Button>
            <Spacer></Spacer>
            <Button
              isDisabled={!inputFill || !boolean}
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
      {/* <Button onClick={onOpen}>Open Modal</Button> */}
      <Modal
        size={"2xl"}
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent style={{ backgroundColor: "#319795" }}>
          <ModalHeader style={{ color: "#c9d8dc" }}>
            Your Order is Placed!
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image
              style={{ margin: "auto", borderRadius: "15%" }}
              src="https://thumbs.gfycat.com/GracefulImpishFlea-size_restricted.gif"
              alt="gif"
            />
            {/* <Text
              style={{ color: "#ffffff", fontSize: "16px", fontWeight: "700" ,textAlign:'center'}}
            >
              Thank you for Placing order
            </Text> */}
          </ModalBody>

          <ModalFooter>
            {/* <Button colorScheme="blue" mr={3}>
              Save
            </Button> */}
            <Button onClick={() => navigate("/")}>OK</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Checkout;
