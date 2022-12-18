
// import { Box, Flex, Heading, useToast } from "@chakra-ui/react";
// import "./Cart.css";
// import Left from "../../Components/Cart/left/Left";
// import Right from "../../Components/Cart/right/Right";
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



import { Box, Button, Flex, Spacer, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Cart.css"

const data=[
  {
    "id": 1,
    "category": "Mens",
    "singlePage_main": "DENNISLINGO PREMIUM ATTIRE",
    "title": "Striped Slim Fit Shirt",
    "price": null,
    "original_price": "₹2,499",
    "offer_price": 97,
    "type": "shirt",
    "discount": "(21%)",
    "image": "https://assets.ajio.com/medias/sys_master/root/20210403/AcbB/6068b6caf997dd7b64643def/dennislingo_premium_attire_green_striped_slim_fit_shirt.jpg"
  },
  {
    "id": 4,
    "category": "Women",
    "brand": "The Indian Garage Co",
    "title": "AVAASA MIX N' MATCH",
    "price": null,
    "original_price": "₹1,749",
    "offer_price": 90,
    "type": "shirt",
    "discount": "(72% off)",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220207/qeFb/62014149f997dd03e2c420b2/avaasa_mix_n%27_match_navy_blue_dupatta_with_tassels.jpg"
  },
  {
    "id": 5,
    "category": "Mens",
    "brand": "GLITO",
    "title": "Track Pants with Insert Pockets",
    "price": null,
    "original_price": "₹1,299",
    "offer_price": 150,
    "type": "pants",
    "discount": "(30%)",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220905/b6vV/63162423f997dd1f8ddf3163/performax_brown_fastdry_active_essential_shorts.jpg"
  },
  {
    "id": 24,
    "category": "Womens",
    "brand": "MANKSH",
    "title": "Floral Print Flared Kurta",
    "price": "₹750",
    "original_price": "₹1,499",
    "offer_price": 450,
    "type": "kurta",
    "discount": "(50% off)",
    "image": "https://assets.ajio.com/medias/sys_master/root/20210611/ogdq/60c27b70f997ddb312c5ad19/manksh_green_floral_print_flared_kurta.jpg"
  }
]

const Cart = () => {

  const [cartData,setCartData]=useState(data)
  
  const orderTotal=cartData.reduce(function(acc,el){
    return acc+Number(el.offer_price)
  },0)

  const [total,setTotal]=useState(orderTotal)

  const handleRemove=(e,i)=>{
    cartData.splice(i,1)
    setCartData(cartData)
    console.log(cartData)
    const sum=cartData.reduce(function(acc,el){
      return acc+Number(el.offer_price)
    },0)
    setTotal(sum)
  }


  // useEffect(()=>{
  //   handleRemove()
  // },[])

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

     {
      cartData?.map((e,i)=>(
        <div id="productDiv" key={e.id}>
        <div id="leftDiv">
          <img src={e.image} alt="Product_Image" />
        </div>
        <div id="rightDiv">
          <Text fontSize='l' as='b'>{e.title}</Text>
          <Text fontSize='xs' >{e.category}</Text>
          <Text fontSize='l' >₹ {e.offer_price}</Text>
        </div>
        <Spacer />

        <Button colorScheme='teal' size='md' onClick={()=>handleRemove(e,i)} >Remove</Button>
      </div>
      ))
     }


      <hr />
      <Flex>
        <Box p='4'>
          Store Total:-
        </Box>
        <Spacer />
        <Box p='4'>
        ₹ {total}
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
        ₹ {total}
        </Box>
      </Flex>

     

      <Flex>
        <Box p='4'>
          Delivery Charges:-
        </Box>
        <Spacer />
        <Box p='4'>
        ₹ 0
        </Box>
      </Flex>

      <Flex>
        <Box p='4'>
          Services Tax:-
        </Box>
        <Spacer />
        <Box p='4'>
        Free
        </Box>
      </Flex>
        <div id="checkOutDiv">
          <Button colorScheme="facebook" >
            <Link to="/checkout">
            Proceed to Checkout
            </Link>
            </Button>
        </div>
    </div>
   </div>
    </div>;
};

export default Cart;
