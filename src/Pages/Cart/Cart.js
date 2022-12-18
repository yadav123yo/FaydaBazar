//  import { Box, Flex, Heading, useToast } from "@chakra-ui/react";
// import "./Cart.css";
// import Left from "./l/Left";
// import Right from "./R/Right";
// import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";

// function Cart() {
//   const auth = useSelector((store) => store.auth);
//   const toast = useToast();
//   // console.log(auth);
//   if (auth.data.isAuthenticated === false) {
//     toast({
//       title: "Login Error",
//       description: "Please login first to access cart",
//       status: "error",
//       duration: 3000,
//       isClosable: true,
//       position: "top",
//     });
//     toast({
//       title: "Redirecting",
//       description: "Redirecting to signup page",
//       status: "error",
//       duration: 3000,
//       isClosable: true,
//       position: "top",
//     });
//     return <Navigate to="/signup" />;
//   }

//   return (
//     <Box
//       w={{ lg: "90%", md: "100%", base: "100%" }}
//       h="auto"
//       m="auto"
//       mt="20px"
//       mb="20px"
//       p="10px"
//     >
//       <Heading
//         fontSize={{ lg: "25px", md: "20px", base: "25px" }}
//         pb={{ lg: "20px", md: "20px", base: "10px" }}
//       >
//         My Basket
//       </Heading>
//       <Flex
//         gap={{ lg: "15px", md: "15px" }}
//         h="auto"
//         flexDirection={{ lg: "row", md: "row", base: "column-reverse" }}
//       >
//         <Left />
//         <Right />
//       </Flex>
//     </Box>
//   );
// }

// export default Cart;

import { Box, Flex, Heading, useToast } from "@chakra-ui/react";
import "./Cart.css";
import Left from "../../Components/Cart/left/Left";
import Right from "../../Components/Cart/right/Right";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function Cart() {
  const auth = useSelector((store) => store.auth);
  const toast = useToast();
  // console.log(auth);
  if (auth.data.isAuthenticated === false) {
    toast({
      title: "Login Error",
      description: "Please login first to access cart",
      status: "error",
      duration: 3000,
      isClosable: true,
      position: "top",
    });
    toast({
      title: "Redirecting",
      description: "Redirecting to signup page",
      status: "error",
      duration: 3000,
      isClosable: true,
      position: "top",
    });
    return <Navigate to="/signup" />;
  }

  return (
    <Box
      w={{ lg: "90%", md: "100%", base: "100%" }}
      h="auto"
      m="auto"
      mt="20px"
      mb="20px"
      p="10px"
    >
      <Heading
        fontSize={{ lg: "25px", md: "20px", base: "25px" }}
        pb={{ lg: "20px", md: "20px", base: "10px" }}
      >
        My Basket
      </Heading>
      <Flex
        gap={{ lg: "15px", md: "15px" }}
        h="auto"
        flexDirection={{ lg: "row", md: "row", base: "column-reverse" }}
      >
        <Left />
        <Right />
      </Flex>
    </Box>
  );
}

export default Cart;
