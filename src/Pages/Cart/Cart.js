import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Box,
  Flex,
  Spacer,
  Image,
  Text,
  Button,
} from "@chakra-ui/react";
import "./Cart.css";
const property = {
  imageUrl: "https://bit.ly/2Z4KKcF",
  imageAlt: "Rear view of modern home with pool",
  beds: 3,
  baths: 2,
  title: "Modern home in city center in the heart of historic Los Angeles",
  formattedPrice: "$19.00",
  reviewCount: 34,
  rating: 4,
};

const Cart = () => {
  return (
    <Container maxW="container.sm" className="cart">
      <Box className="head1">
        <Box p={2} className="shoppingcart">Shopping Cart</Box>
        <Box className="cashback" p={2}>
          Earned cashback
        </Box>
      </Box>

      <Box className="head2">
        <Flex>
          <Text h="55px" className="head21" p={2}>
            Unbetale
          </Text>
          <Spacer />
          <Text h="55px" className="head22" p={2}>
            {property.formattedPrice}
            <Box>
              <Link>see more</Link>
            </Box>
          </Text>
        </Flex>
        <Box className="cartCard">
          <Box className="cCard" h="180px">
            <Flex>
              <Image
                boxSize="180px"
                objectFit="cover"
                src={property.imageUrl}
                alt={property.imageAlt}
              />
              <Box>
                <Text p="2">{property.title}</Text>
                <Flex>
                  <Box>
                    <Text p="2">{property.formattedPrice}</Text>
                  </Box>
                  <Spacer />
                  <Box boxSize="80px">
                    <Flex>
                      <Box>
                        <Text>^</Text>
                        <Text>{property.rating}</Text>
                        <Text>^</Text>
                      </Box>
                      <Box className="subTotal2">{property.formattedPrice}</Box>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
      <Box className="viewCart">
        <Text>Subtotal : 66</Text>
        <Box>
          <Button
            borderRadius="22px"
            width="100%"
            colorScheme="pink"
            variant="solid"
          >
            View Cart/Checkout
          </Button>
        </Box>
      </Box>
      <Box className="Cshopping">
        <Button
          borderRadius="20px"
          width="100%"
          border="2px"
          colorScheme="blue"
          variant="solid"
        >
          Continue Shopping
        </Button>
      </Box>
    </Container>
  );
};

export default Cart;
