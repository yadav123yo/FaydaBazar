import "./AllProduct.css";
import { Box, Button, Flex, Spacer, Text, useToast, SkeletonText, Grid, Skeleton,AccordionItem,  Accordion,Select, } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';
import SideBar from "./SideBar";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../../Redux/products/action";



const AllProduct = () => {
  const search = useLocation().search;
  const query = new URLSearchParams(search).get("category");
  let [page, setPage] = useState(1);
  const [price, setPrice] = useState([]);
  const [sort, setSort] = useState("offer_price");
  const [orderBy, setOrderBy] = useState("");
  const { data } = useSelector((store) => store.products);

  let length;
  if (query === "") {
    length = 190;
  } else if (query === "Mens") {
    length = 85;
  } else if (query === "Womens") {
    length = 105;
  }
  const [prevQuery, setPrevQuery] = useState(query);
  const {
    AllProducts: { loading },
  } = useSelector((store) => store.products);
  const dispatch = useDispatch();
  useEffect(() => {
    if (prevQuery !== query) {
      setPage(1);
    }
    dispatch(
      getAllProducts({ category: query, page: page, price, sort, orderBy })
    );
    setPrevQuery(query);
  }, [dispatch, query, page, prevQuery, price, sort, orderBy]);

  if(loading){
    return <Grid
      w={{
        base: "100%",
        md: "90%",
        lg: "80%",
      }}
      m="auto"
      templateColumns={{
        base: "repeat(1,1fr)",
        md: "repeat(2,1fr)",
        lg: "repeat(3,1fr)",
      }}
      gap="10"
      p="10"
    >
      {new Array(20).fill(0).map((e, i) => (
        <Box w=" 100%" m="auto" boxShadow="lg" bg="white" key={i}>
          <Skeleton size="10" h="180px" />
          <SkeletonText
            w="80%"
            m="auto"
            mb="20px"
            mt="4"
            noOfLines={4}
            spacing="4"
          />
        </Box>
      ))}
    </Grid>
  
      }
 
  return (
    <div>
      <div id="productPage">
        {/* this is filter Div */}
        <div id="filterDiv">
          <Box className='so3'>
          <Accordion allowToggle>
            {/* <AccordionItem>
              <Select
                placeholder="Price ₹"
                onChange={({ target }) => {
                  let array = target.value.split(":").map(Number);
                  for (let i = 0; i < array.length; i++) {
                    array[i] = array[i] ;
                  }
                  setPrice(array);
                }}
                textAlign="center"
              >
                <option value="0:500">Below 500</option>
                <option value="500:1000">500 - 1000</option>
                <option value="1000:1500">1000 - 1500</option>
                <option value="1500:2000">1500 - 2000</option>
                <option value="2000:2500">2000 - 2500</option>
                <option value="2500:10000000">Above 2500</option>
              </Select>
            </AccordionItem> */}
            <AccordionItem>
              <Select
                placeholder="Price"
                textAlign="center"
                onChange={({ target }) => {
                  if (target.value === "increasing") {
                    setSort("offer_price");
                    setOrderBy("asc");
                  } else {
                    setSort("offer_price");
                    setOrderBy("desc");
                  }
                }}
              >
                <option value="increasing">Low to High</option>
                <option value="decreasing">High to Low</option>
              </Select>
            </AccordionItem>
          </Accordion>
          </Box>
        </div>

        <div id="mainDiv">

            {/* side Bar */}

            <Box className='mi1'> <SideBar /></Box>

                {/* This is productlist div */}
                <div id="productList">
        {

          data?.map((e,i) => (
             <div id='singleProduct' key={e._id}>
              <img src={e.image} alt="" />
              <Text fontSize='xl'>{e.title}</Text>

                <div id="productPrice">
                  <div id="productMrp">
                    <Text fontSize="xs" as="s" color='tomato'>{e.original_price}{" "}</Text>
                    <Text color="black" fontSize="s" as='b'>₹{" "} {e.offer_price}</Text>
                    <Text color="black" fontSize="s" as='b'>₹{" "} {e.category}</Text>
                    <Text color="black" fontSize="s" as='b'>ID{"-"} {e._id}</Text>
                  </div>
                </div>
                
                <Text color="teal" fontSize="xs">Free Shipping</Text>

                <div id="productButton">
                  <Button colorScheme="white" color="black" variant='outline' className="btn1">
                  <Link to={`/product/${e._id}`}> SEE DETAILS</Link>
                    </Button>
                  <Spacer />
                  <Button colorScheme="facebook" className="btn2">ADD TO CART</Button>
                </div>

            </div>
            ))
        }
        </div>
        </div>



                    <Flex justifyContent="center" gap="30px" marginTop="30px">
                    <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
            Prev
          </Button>
          <Button>{page}</Button>
          <Button
            disabled={page === Math.ceil(length / 20)}
            onClick={() => setPage(page + 1)}
          >
            Next
          </Button>
                    </Flex>
      </div>
    </div>
  )
}

export default AllProduct



//   {
//   "id": 1,
//   "category": "Mens",
//   "brand": "DENNISLINGO PREMIUM ATTIRE",
//   "title": "Striped Slim Fit Shirt",
//   "price": null,
//   "original_price": "₹2,499",
//   "offer_price": 77,
//   "type": "shirt",
//   "discount": "(21%)",
//   "image": "https://assets.ajio.com/medias/sys_master/root/20210403/AcbB/6068b6caf997dd7b64643def/dennislingo_premium_attire_green_striped_slim_fit_shirt.jpg"
// },