import {
    Box,
    Button,
    Flex,
    Heading,
    Image,
   
    Text,
    useToast,
  } from "@chakra-ui/react";
  import React from "react";
  import { useSelector, useDispatch } from "react-redux";
  import { Link } from "react-router-dom";
  import {
    removeProductFromCart,
    updateProductInCart,
  } from "../../../Redux/cart/action";
  
  
  const CartCrud = () => {
    const toast = useToast();
    const { carts: data } = useSelector((store) => store.carts);
    const dispatch = useDispatch();
    // console.log(data);
    return (
      <Box w="100%" mt="30px">
        {data.length === 0 ? (
          <Flex
            w="90%"
            p="20px 0px"
            m="auto"
            mt="5px"
            justify={"center"}
            align={"center"}
            gap={3}
            flexDirection="column"
          >
            <Heading fontSize={"30px"}>Add something in cart</Heading>
            <Link to="/products?category=">
              <Button
                background={"black"}
                p="20px 40px"
                color="white"
                borderRadius={"20px"}
                _hover={{ background: "black", color: "white" }}
              >
                Shop New Arrivals
              </Button>
            </Link>
          </Flex>
        ) : (
          data?.map((el, i) => {
            return (
              <Flex
                w="90%"
                boxShadow={"md"}
                p={4}
                m="auto"
                mt="5px"
                key={i}
                gap={{ lg: 5, md: 4 }}
                alignItems="center"
                flexDirection={{ lg: "row", md: "row", base: "column" }}
                borderRadius="5px"
              >
                <Link   to={`/products/${el.productId._id}`}>
                <Image
                  src={el.productId.imageUrl}
                  w={{ lg: "auto", md: "auto", base: "150px" }}
                  h="100px"
                />
                </Link>
                <Box w="68%" >
                  <Text fontWeight={"bold"}>{el.productId.name}</Text>
                  <Text>{el.productId.brand}</Text>
                  <Text>
                    <strong>Category</strong>: {el.productId.category}
                  </Text>
                  <Flex
                    mt="10px"
                    justify={"center"}
                    align={"center"}
                    w={{ lg: "90%", md: "90%", base: "100%" }}
                    gap={{ lg: 3, md: 3, base: 0 }}
                    flexDirection={{ lg: "row", md: "column", base: "column" }}
                  >
                    <Flex w="100px" justify={"center"} align="center" gap={1}>
                      <Button
                        w="50px"
                        h="40px"
                        variant={"ghost"}
                        fontSize="35px"
                        fontWeight={"bold"}
                        onClick={() => {
                          dispatch(updateProductInCart(el._id, el.quantity - 1));
                        }}
                        disabled={el.quantity === 1}
                      >
                        -
                      </Button>
                      <Text fontWeight={"bold"}>{el.quantity}</Text>
                      <Button
                        w="50px"
                        h="40px"
                        variant={"ghost"}
                        fontSize="30px"
                        fontWeight={"bold"}
                        onClick={() => {
                          dispatch(updateProductInCart(el._id, el.quantity + 1));
                        }}
                      >
                        +
                      </Button>
                    </Flex>
                    <Button
                      mb="5px"
                      p={2}
                      color="white"
                      colorScheme={"red"}
                      onClick={() => {
                        toast(
                          {
                            title: `${el.productId.name} removed from cart.`,
                            status: "error",
                            duration: 2000,
                            isClosable: true,
                            position: "top",
                          },
                        )
                        dispatch(removeProductFromCart(el._id))}}
                      disabled={el.quantity === 20}
                    >
                      Remove
                    </Button>
                  </Flex>
                </Box>
                <Box>
                  <Text>
                    <strong>₹</strong>
                    {Math.round(el.productId.price * 81.66 * el.quantity)}/-
                  </Text>
                </Box>
              </Flex>
            );
          })
        )}
      </Box>
    );
  };
  
  export default CartCrud;