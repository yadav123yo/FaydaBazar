// import { ChevronDownIcon } from "@chakra-ui/icons";
// import {
//   Box,
//   Flex,
//   Heading,
//   Text,
//   Button,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
//   useDisclosure,
//   Link,
//   SimpleGrid,
//   Image,
// } from "@chakra-ui/react";
// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";
// import { getAllProducts } from "../../../Redux/products/action";
// import CartCrud from "./CartCrud";


// const GetItShipped = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const { data } = useSelector((state) => state.products);
//   const { carts } = useSelector((state) => state.carts);
//  console.log(carts.length)
//   const [display, setDisplay] = useState(false);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getAllProducts());
//   }, [dispatch]);

//   return (
//     <Box
//       w="100%"
//       background="#E2E8F0"
//       mt="30px"
//       h="auto"
//       borderRadius="5px"
//       p="10px"
//     >
//       <Heading fontSize="20px">Get It Shipped({carts.length})</Heading>
//       <Box
//         background="white"
//         w={{ lg: "100%" }}
//         borderRadius="10px"
//         h="auto"
//         m="auto"
//         p="10px 0px"
//         mt="20px"
//       >
//         <Flex gap={3} p="10px">
//           <svg
//             viewBox="0 0 24 24"
//             aria-hidden="true"
//             data-comp="Icon StyledComponent "
//             width="30px"
//           >
//             <path d="M16.014 3.067c.258 0 .468.209.468.467V6.03h3.256c.149 0 .289.07.376.19l3.795 5.17c.06.082.091.178.091.278v5.216c0 .257-.21.466-.467.466l-2.637.001a3.501 3.501 0 01-6.852-.297H8.956a3.5 3.5 0 01-6.852.297h-.95a.467.467 0 01-.468-.467L.685 11H.393C.177 11 0 10.774 0 10.5s.177-.5.393-.5h.292V9H.348C.156 9 0 8.774 0 8.5S.156 8 .348 8h.337V7H.417C.187 7 0 6.774 0 6.5S.188 6 .417 6h.268v-.15a2.787 2.787 0 012.616-2.778l.17-.005zM5.5 14a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm12 0a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm0 1a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-12 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm12 1a.5.5 0 100 1 .5.5 0 000-1zm-12 0a.5.5 0 100 1 .5.5 0 000-1zM15.547 4H3.47c-1.02 0-1.849.83-1.849 1.85V6h3.962c.23 0 .417.226.417.5s-.188.5-.417.5H1.62v1h3.031c.192 0 .348.226.348.5s-.156.5-.348.5H1.621v1h1.986c.216 0 .393.226.393.5s-.177.5-.393.5H1.621v5.417h.38a3.5 3.5 0 016.979-.297h5.04a3.5 3.5 0 016.98.38l-.003-.083h2.067v-4.596l-3.561-4.858h-3.489a.468.468 0 01-.467-.465V4zm3.127 4c.13 0 .25.07.325.187l1.973 3.12c.085.134.095.31.028.455a.393.393 0 01-.351.238H16.44c-.219 0-.397-.197-.397-.44V8.44c0-.243.178-.44.397-.44h2.233zm-.205.88h-1.632v2.24h3.048L18.47 8.88zM9.925 6c.294 0 .535.242.535.536 0 .293-.241.535-.535.535h-1.39A.537.537 0 018 6.536C8 6.242 8.24 6 8.535 6h1.39z"></path>
//           </svg>
//           <Box w="65%">
//             <Text>
//               Beauty Insiders enjoy FREE standard shipping on all orders.{" "}
//               <Button
//                 onClick={onOpen}
//                 variant="link"
//                 background="none"
//                 _hover={{ background: "none" }}
//               >
//                 Free Returns
//               </Button>{" "}
//               on all purchases.*
//               <Modal isOpen={isOpen} onClose={onClose}>
//                 <ModalOverlay />
//                 <ModalContent>
//                   <ModalHeader>Free Returns</ModalHeader>
//                   <ModalCloseButton />
//                   <ModalBody>
//                     <Heading fontSize={17}>Return Products for Free</Heading>
//                     {/* <Text>
//                       New or gently used products can be returned in person to
//                       any Sephora store or by mail with our pre-paid return
//                       shipping label. No return shipping or handling fees apply.
//                       Buy Online, Pick Up In Store, Instacart and Same-Day
//                       Delivery orders can only be returned in store. Gift cards
//                       and intimate devices are not eligible for returns.{" "}
//                       <Link
//                         target="_blank"
//                         href="https://www.sephora.com/beauty/returns-exchanges"
//                         color="blue"
//                       >
//                         Learn more
//                       </Link>
//                     </Text> */}
//                   </ModalBody>

//                   <ModalFooter>
//                     <Button
//                       background="black"
//                       color="white"
//                       w="250px"
//                       onClick={onClose}
//                     >
//                       Got it
//                     </Button>
//                   </ModalFooter>
//                 </ModalContent>
//               </Modal>
//             </Text>
//           </Box>
//         </Flex>
//         {/* select your samples */}
//         <Flex
//           flexDirection={{ lg: "row", md: "row", base: "column" }}
//           mt="20px"
//           justify="space-around"
//         >
//           <Box
//             textAlign="center"
//             p="5px"
//             h="auto"
//             w={{ lg: "45%", md: "45%", base: "100%" }}
//             border="2px solid whitesmoke"
//           >
//             <Text>Shop more awesome makeup products</Text>
//             <Flex justify="center" align="center" gap={2}>
//               <Button
//                 fontSize={{ lg: "16px", md: "14px" }}
//                 variant="link"
//                 textDecoration="none"
//                 color="black"
//                 onClick={() => setDisplay(!display)}
//               >
//                 EXPLORE MORE
//               </Button>
//               <ChevronDownIcon fontSize="18px" />
//             </Flex>
//           </Box>
//           <Box
//             p="5px"
//             h="auto"
//             w={{ lg: "45%", md: "45%", base: "100%" }}
//             border="2px solid whitesmoke"
//           >
//             <Flex align="center">
//               <Box>
//                 <Text fontWeight="bold">Want free shipping?</Text>
//                 <Text fontSize="14px">
//                   Sign in to get free shipping for this purchase.
//                 </Text>
//               </Box>
//               <NavLink to="/login">
//                 <Button>Sign In</Button>
//               </NavLink>
//             </Flex>
//           </Box>
//         </Flex>
//         {/* free samples div */}
//         {display ? (
//           <SimpleGrid
//             id="select-your-samples"
//             h="auto"
//             gap={5}
//             p="10px"
//             w="90%"
//             columns={{ lg: 6, md: 4, base: 3 }}
//             m="auto"
//             mt="20px"
//           >
//             {data.slice(0, 12).map((el, i) => {
//               return (
//                 <Box key={i}>
//                   <Image mb="10px" src={el.image} h="80px" />
//                   <NavLink to={`/product?category=${el.category}`}>
//                     <Button
//                       _hover={{ backgroundColor: "white", color: "black" }}
//                       background={"black"}
//                       color={"white"}
//                     >
//                       View
//                     </Button>
//                   </NavLink>
//                 </Box>
//               );
//             })}
//           </SimpleGrid>
//         ) : null}
//         <CartCrud />
//       </Box>
//       <Text my={2} fontWeight={"bold"}>
//         Add These Under 1250
//       </Text>
    
//     </Box>
//   );
// };

// export default GetItShipped;
