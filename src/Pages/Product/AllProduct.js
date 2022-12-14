import "./AllProduct.css";
import { Box, Button, Flex, Text, useToast } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';

const AllProduct = () => {
  const [data, setData] = useState([])
  const [page, setpage] = useState(1);
  const [sort, setSort] = useState("ASC");
  const [filter, setFilter] = useState("")
  const toast = useToast();


  function getData(page, sort) {
    axios.get(`http://localhost:8080/products?page=${page}&_limit=12&_orderBy=offer_price&_order=${sort}`)
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
                  <Button className='sortbtn'>Discount</Button>
              </Box>
          </Box>
        </div>


        {/* This is productlist div */}
        <div id="productList">
        {

          data.map((e) => (
             <div id='singleProduct' key={e.id}>
              <img src={e.image} alt="" />
              <h1>{e.title}</h1>

                <div id="productPrice">
                  <div id="productMrp">
                    <Text color="#6f7284" fontSize="xs" as="s">${e.original_price}{" "}</Text>
                    <Text color="#6f7284" fontSize="s">${" "} {e.offer_price}</Text>
                  </div>
                </div>
                
                <Text>Free Shipping</Text>

                <div id="productButton">
                  <Button className="btn1">SEE DETAILS</Button>
                  <Button className="btn2">ADD TO CART</Button>
                </div>

            </div>
            ))
        }
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