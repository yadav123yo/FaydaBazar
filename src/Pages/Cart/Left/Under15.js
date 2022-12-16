import React, { useEffect } from "react";
import { Box, Button,Flex, Image, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
// import { getAllProducts } from "../../../Redux/products/actions";
// import { addProductToCart } from "../../../Redux/cart/actions";
import {getAllProducts} from '../../../Redux/products/action'
import {addAllProductsToCart} from '../../../Redux/cart/action'
const Under15 = () => {
  const { data } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  return (
    <>
      {data?.slice(0, 5).map((el, i) => {
        return (
          <Flex
            w="98%"
            background="white"
            p="20px 10px"
            m="auto"
            mt="5px"
            key={i}
            gap={{ lg: 5, md: 4 }}
            justify={{ base: "center" }}
            align={{ base: "center" }}
            flexDirection={{ lg: "row", md: "row", base: "column" }}
          >
            <Image
              src={el.imageUrl}
              w={{ lg: "auto", md: "auto", base: "150px" }}
              h="100px"
            />
            <Box w="65%">
              <Text fontWeight={"bold"}>{el.brand}</Text>
              <Text>{el.name}</Text>
              <Text>
                <strong>Category</strong>: {el.category}
              </Text>
            </Box>
            <Flex align={"center"} justify={"center"} flexDirection={"column"}>
              <Text>
                <strong>₹</strong>
                {Math.round(el.price * 81.66)}/-
              </Text>
              <Button
                w="100px"
                mt="20px"
                border="2px solid black"
                borderRadius={"20px"}
                _hover={{ backgroundColor: "white", color: "black" }}
                background={"white"}
                color={"black"}
                onClick={() => {
                  dispatch(addProductToCart(el._id, 1));
                }}
              >
                Add
              </Button>
            </Flex>
          </Flex>
        );
      })}
    </>
  );
};

export default Under15;
// Footer
// © 2022 GitHub, Inc.
// Footer navigation
// Terms
// Priv