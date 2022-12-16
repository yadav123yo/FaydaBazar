import "./AllProduct.css";
import { Box, Button, Flex, Spacer, Text, useToast } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';
import SideBar from "./SideBar";

const WomensPage = () => {
  const [data, setData] = useState([])
  const [page, setpage] = useState(1);
  const [sort, setSort] = useState("ASC");
  const [filter, setFilter] = useState("")
  const toast = useToast();


  function getData(page, sort) {
    // axios.get(`http://localhost:8080/products?_page=${page}&_limit=12&_orderBy=offer_price&_order=${sort}`)
    axios.get(`http://localhost:8080/products`)
        .then((res) => setData(res.data))
        .catch((err) => console.log(err))
}
// console.log(data)

  function handlesortA() {
    let acs = data.sort((a, b) => a.offer_price - b.offer_price)
    console.log(acs)
    setData(acs)
    setSort("DESC")

}

function handlesortB() {
    let acs = data.sort((a, b) => b.offer_price - a.offer_price)
    setData(acs)
    console.log(acs)
    setSort("ASC")
}

useEffect(() => {
    getData(page, sort)
}, [page, sort])

  return (
    <div>
      <div id="productPage">
        {/* this is filter Div */}
        <div id="filterDiv">
          <Box className='so3'>
              <Box className='so1'>
                  <h1 className='soh1'>Sort By:</h1>
                  <Button className='sortbtn'>Popularity</Button>
                  <Button className='sortbtn' onClick={handlesortA}>High to Low</Button>
                  <Button className='sortbtn' onClick={handlesortB}>Low to High</Button>
              </Box>
          </Box>
        </div>

        <div id="mainDiv">

            {/* side Bar */}

            <Box className='mi1'> <SideBar /></Box>

                {/* This is productlist div */}
                <div id="productList">
        {

          data.filter(e=>e.category==="Womens").map((e) => (
             <div id='singleProduct' key={e.id}>
              <img src={e.image} alt="" />
              <Text fontSize='xl'>{e.title}</Text>

                <div id="productPrice">
                  <div id="productMrp">
                    <Text fontSize="xs" as="s" color='tomato'>{e.original_price}{" "}</Text>
                    <Text color="black" fontSize="s" as='b'>₹{" "} {e.offer_price}</Text>
                    <Text color="black" fontSize="s" as='b'>₹{" "} {e.category}</Text>
                    <Text color="black" fontSize="s" as='b'>ID{"-"} {e.id}</Text>
                  </div>
                </div>
                
                <Text color="teal" fontSize="xs">Free Shipping</Text>

                <div id="productButton">
                  <Button colorScheme="white" color="black" variant='outline' className="btn1">SEE DETAILS</Button>
                  <Spacer />
                  <Button colorScheme="facebook" className="btn2">ADD TO CART</Button>
                </div>

            </div>
            ))
        }
        </div>
        </div>



                    <Flex justifyContent="center" gap="30px" marginTop="30px">
                        <Button disabled={page === 1} colorScheme='teal' variant='solid' onClick={() => setpage((prev) => prev - 1)}>Prev</Button>
                        <Button>{page}</Button>
                        <Button disabled={page === 100} colorScheme='teal' variant='solid' onClick={() => setpage((prev) => prev + 1)}>Next</Button>
                    </Flex>
      </div>
    </div>
  )
}

export default WomensPage



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