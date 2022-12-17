import React from 'react'

import  { useState,useEffect } from "react";
import {

 
  Flex,
  Grid,

} from "@chakra-ui/react";
import { Box, Image, Text, SimpleGrid, Button } from "@chakra-ui/react";




function Dashboard(){
  const [data,setData]= useState([]);

    const getData=async()=>{
      let dataa = await fetch("https://faydab.onrender.com/product");
      let res = await dataa.json() ;
      // console.log(res)
      setData(res.products)
    }
    useEffect(()=>{
        getData()
    },[])

return (
    <Box>
      <SimpleGrid
        templateColumns={{
          base: "repeat(2,1fr)",
          md: "repeat(3,1fr)",
          lg: "repeat(4,1fr)",
        }}
        gap={4}
      >
        {
          data?.map((item, index) => (
            <Grid
              border="1px"
              borderColor="black"
              alignItems={"center"}
              justifyContent={"center"}
              key={index}
            >
              <Box m={6}>
                <div key={item.id} >
                  <Image
                    src={item.image}
                    alt={`Picture of ${item.name}`}
                    roundedTop="lg"
                  />
                  <Text as="b" color="black">
                    {" "}
                    {item.title.slice(0, 20)}...{" "}
                  </Text>{" "}
                  <br />
                  <Text as="b" color="grey">
                    Category: {item.category}
                  </Text>
                  <Text color="grey">Brand: {item.brand.slice(0, 10)}</Text>
                  <Text color="grey">Price: {item.offer_price}₹</Text>

                  <Flex>
                    <Button
                      marginTop={5}
                      colorScheme="red"
                      variant="outline"
                      onClick={() => {
                       
                      }}
                    >
                      Delete
                    </Button>

                    <Button
                      onClick={() => {
                      
                      }}
                      marginTop={5}
                      marginLeft="5"
                      colorScheme="blue"
                      variant="outline"
                    >
                      Update
                    </Button>
                  </Flex>
                  <Flex>
                  </Flex>
                </div>
              </Box>
            </Grid>
          ))}

     </SimpleGrid>
    </Box>
  );
}

export default Dashboard;