// import { Box, Button, Divider, Flex, Stack, Text } from "@chakra-ui/react";
// import React from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// const Right = () => {
//   const navigate = useNavigate();
//   const { carts } = useSelector((state) => state.carts);
//   let total = carts.reduce(
//     (ac, ele) => ac + ele.productId.offer_price* ele.quantity,
//     0
//   );

//   const checkout = () => {
//     navigate("/checkout");
//   };

//   return (
//     <Stack
//       w={{ lg: "35%", md: "35%", base: "100%" }}
//       border="1px solid grey"
//       borderRadius={"5px"}
//       h="100%"
//       p="10px 20px"
//       mb="10px"
//     >
//       <Flex w="100%" justify={"space-between"}>
//         <Text>Merchandise Subtotal</Text>
//         <Text fontWeight={"bold"}>₹ {total}</Text>
//       </Flex>
//       <Flex w="100%" justify={"space-between"}>
//         <Text>Shipping & Handling</Text>
//         <Text fontWeight={"bold"}>₹ 100</Text>
//       </Flex>
//       <Flex w="100%" justify={"space-between"}>
//         <Text>Tax (Inc.)</Text>
//         <Text fontWeight={"bold"}>{(total) / 100}</Text>
//       </Flex>
//       <Divider />
//       <Flex w="100%" justify={"space-between"}>
//         <Text>Estimated Total</Text>
//         <Text fontWeight={"bold"}>₹ {total  + 100}</Text>
//       </Flex>
//       <Box w="100%" fontSize="13px">
//         <Text>
//           or 4 payments of ₹ {(total ) / 4} with <strong>SBI</strong> or{" "}
//           <strong> afterpay</strong>
//         </Text>
//       </Box>
//       <Text fontSize={"12px"} color="grey">
//         Shipping & taxes calculated during checkout
//       </Text>
//       <Flex justify={"center"}>
//         {total == 0 ? (
//           <Button
//             w="70%"
//             background={"#cf112c"}
//             color="white"
//             borderRadius={"20px"}
//             _hover={{ background: " rgb(226, 3, 15)", color: "white" }}
//           >
//             Add Products to checkout
//           </Button>
//         ) : (
//           <Button
//             w="70%"
//             background={"#cf112c"}
//             color="white"
//             borderRadius={"20px"}
//             _hover={{ background: " rgb(226, 3, 15)", color: "white" }}
//             onClick={checkout}
//           >
//             Checkout
//           </Button>
//         )}
//       </Flex>
//     </Stack>
//   );
// };

// export default Right;
