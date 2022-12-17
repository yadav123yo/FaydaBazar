import {
  Box,
  Text,
  Button,
  SimpleGrid,
  Image,
  Input,
  Tabs,
  Link,
  Select,
  TabList,
  Tab,
  useToast,
} from "@chakra-ui/react";
import "./SingleProduct.css";

import { Search2Icon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getSingleProduct } from "../../Redux/products/action";
import { addProductToCart } from "../../Redux/cart/action";


const SingleProduct = () => {
  // const { id } = useParams();
  // const [data, setData] = useState({});
  // let url = `http://localhost:8080/products/${id}`;


  // let getData = async () => {
  //   let res = await fetch(url);
  //   let res_data = await res.json();
  //   setData(res_data);
  //   console.log(res_data)
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  const [value, setValue] = useState(1);
  let {
    Product: { loading },
    singleData: data,
    AllProducts: { loading: prodLoad },
    data: products,
  } = useSelector((store) => store.products);
  let auth = useSelector((store) => store.auth);
  let { carts } = useSelector((store) => store.carts);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleProduct(id));
    dispatch(getAllProducts({ category: data.category }));
  }, [dispatch, id, data.category]);
  const { stars, numReviews } = data;
  const handleChange = (value) => setValue(value);
  // console.log(auth);
  const toast = useToast();
  const productAdded = () => {
    toast({
      title: "Product Added",
      description: "We have added your product to Basket",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top",
    });
  };

return (
  <>
    <Box height={'auto'} width='100%' display={'flex'} flexWrap="wrap" id="singlePage_main">
          <Box width={'50%'} display='flex' >
                  <Box width={'25%'}>

                  </Box>
                  <Box margin={'auto'} width={'75%'}>
                  <Image
                      width="100%"
                      src={data.image}
                      alt="ab" />
                  </Box>
          </Box>
          <Box width={'40%'} marginLeft='12'>
          <Text fontSize='xs' color='gray' mt='8'>
              {data.singlePage_main}
          </Text>
          <Text fontSize='xl' fontWeight='bold'>
          {data.title}
          </Text>
          <Text fontSize='xs' color='gray'>
              Sold by KixRx
          </Text>
          <Text fontSize='2xs' color='gray' mt='2'>
              Write a Review
          </Text>
          <Button colorScheme={'gray'} height='8' fontSize='m' fontWeight='bold' mt='16' >Special pricing on Select options</Button>
          <Text fontSize='4xl' fontWeight='500'>
          ₹{data.offer_price}
          </Text>
          <Text fontSize='xs' color='blackAlpha' mt='2'>
              or 4 interest-free payments of $35.75 with Sezzle
          </Text>
          <Text fontSize='m' fontWeight='bold'>
          Free Standard Shipping on orders from KixRx
          </Text>
          <Box bgColor='gray.200' width='85%' h='12' display='flex' mt='4' flexWrap="wrap">
              <Image width='34%' src='https://bitpay.com/cdn/merchant-resources/bitpay-accepted-card-group.svg' alt='abc'/>
              <Text ml='4' mt='2' fontWeight='600'>Now accepting Crypto at Checkout!</Text>
           </Box>
          <Text fontSize='xs' color='blackAlpha' mt='2'>
              or 4 interest-free payments of $35.75 with Sezzle
          </Text>
          <Box width='85%' height='20' border='1px solid gray' display='flex' mt='4' id="qty_payment">
              <Text mt='6' fontWeight='bold'>Qty:</Text>
              <Select placeholder='1' mt='4' ml='4' size='sm' height='12' borderColor='black' width='18%'>
                  <option value='option1'>1</option>
                  <option value='option2'>2</option>
                  <option value='option3'>3</option>
                  <option value='option1'>4</option>
                  <option value='option2'>5</option>
                  <option value='option3'>6</option>
                  <option value='option3'>7</option>
                  <option value='option2'>8</option>
                  <option value='option3'>9</option>
                  <option value='option3'>10</option>
              </Select>
              {/* <Button borderRadius='20' mt='4' ml='12' height='12' w='60' colorScheme='facebook' color='white'>Add to Cart</Button> */}
              <div style={{display:"flex" }}>
            {auth.data.isAuthenticated ? (
              <Button bg={"red"}color={"white"} marginLeft={10} marginTop={3}
              _hover={{bg:"green"}} 
                onClick={() => {
                  const existInCart = carts.find(
                    (item) => item.productId._id === data._id
                  );
                  if (existInCart) {
                    toast({
                      title: "Product already in cart.",
                      description: "You can add more from cart page.",
                      status: "error",
                      duration: 2000,
                      isClosable: true,
                      position: "top",
                    });
                  } else {
                    dispatch(addProductToCart(data._id, value));
                    productAdded();
                  }
                }}
              >
                Add to Basket
              </Button>
            ) : (
              <Link to="/signup">
                <button>SignUp to add to Basket</button>
              </Link>
            )}
          </div>
          </Box>
          <Box width='70%' display='flex' mt='4'>
              <Input bgColor={'gray.100'} w='34' placeholder='Zip code' />
              <Button borderRadius='24'border={'1px'} fontSize={'xs'} ml='4'  w='70'>Calculate Shipping</Button>
          </Box>
          <Text mr='24' fontSize='14' fontWeight='bold' mt='4'>
           Headquartered in Beaverton, Oregon, Nike is the largest and most successful brand of shoes, sports equipment, clothing, and controlling more than 60% of the market and becoming a pop culture icon.
          </Text>
          <Text mr='24' fontSize='14' fontWeight='bold' mt='2'>
              See more details
          </Text>
          <Box width='80%' display='flex' mt='4'>
          <Button colorScheme='twitter' h='6'>
              Like 👍
          </Button>
              <Text ml='4' fontSize='12'>Sign up to see what your friends like.</Text>
          </Box>
          </Box>
    </Box>


      <Text textAlign='center' fontWeight='500' fontSize={'3xl'} mt='4'>Product Information</Text>
        <Box w='90%' margin='auto' mt='8' borderBottom='1px solid gray' borderTop='1px solid gray'>
        <Text color='blackAlpha.700' fontWeight='500' mt='4' fontSize={'xs'}>SKU: CW2288-111PARENTDYLAN</Text>
        <Text fontWeight='bold' fontSize={'xs'}>Nike Air Force 1 '07 White CW2288-111 Men's</Text>
        <Text mb='8' color='blackAlpha.700' fontWeight='500' fontSize={'xs'}>Headquartered in Beaverton, Oregon, Nike is the largest and most successful brand of shoes, sports equipment, clothing, and controlling more than 60% of the market and becoming a pop culture icon.</Text>
        </Box>



        

  </>
)
}

export default SingleProduct