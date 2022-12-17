import { Box, Button, Flex, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import "./Cart.css"

const Cart = () => {
  return <div id="cartPage">
   <Text fontSize='3xl' as='b'>Your Cart</Text>

   <div id="mainCartDiv">
    <div id="CartProductDiv">
      <Text fontSize='2xl' as='b'>Shipment from KixRx</Text>
      <hr />
      <div id="upperDiv">
        <Text>Congratulations! Your order qualifies for free shipping from KixRx. </Text>
        <button>Learn More</button>
      </div>

      <div id="productDiv">
        <div id="leftDiv">
          <img src="https://img.shop.com/Image/280000/282100/282141/products/1911627003__100x100__.jpg" alt="Product_Image" />
        </div>
        <div id="rightDiv">
          <Text fontSize='l' as='b'>Nike Air Force 1 '07 White CW2288-111 Men's</Text>
          <Text fontSize='xl' >$ 143</Text>
        </div>
        <Spacer />

        <Button colorScheme='teal' size='md'>Remove</Button>
      </div>
      <hr />
      <Flex>
        <Box p='4'>
          Store Total:-
        </Box>
        <Spacer />
        <Box p='4'>
         $ 143
        </Box>
      </Flex>
    </div>

    {/* cart total div on left side */}
    <div id="CartTotalDiv">
      <Text fontSize='2xl' as='b'>Order Total</Text>
      <hr />
      <Flex>
        <Box p='4'>
          Subtotal:-
        </Box>
        <Spacer />
        <Box p='4'>
         $ 143
        </Box>
      </Flex>
        <div id="checkOutDiv">
          <Button colorScheme="facebook">Proceed to Checkout</Button>
        </div>
    </div>
   </div>
    </div>;
};

export default Cart;
