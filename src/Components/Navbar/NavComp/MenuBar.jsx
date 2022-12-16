import React from 'react'
import { Box, Flex,Text } from '@chakra-ui/react'
import { HiUserCircle,HiShoppingCart } from "react-icons/hi";
import { GrRefresh } from "react-icons/gr";

const MenuBar = () => {
  return (
    <Box className='menubar'>
        <Flex  justifyContent={"space-around"}>
            <h1>Categories</h1>
            <Flex gap={'40px'}>
            <Text>Exclusive Brands</Text>
            <Text>Stores</Text>
            <Text>Deals</Text>
            <Text>SHOP Travels</Text>
            <Text>Departments</Text>
            <Text>Shop Buddy</Text>
            <Text>Shop Local</Text>


            </Flex >
            <Flex gap={'40px'}>
            <Box cursor={"pointer"} display="flex" > <HiUserCircle style={{color: 'black', border:'1px', fontSize: '30px'}}/> Sign in</Box>
            <Box cursor={"pointer"} display="flex" > <GrRefresh style={{color: 'black', border:'1px', fontSize: '30px'}}/>Orders </Box>
            <Box cursor={"pointer"} display="flex" > <HiShoppingCart style={{color: 'black', border:'1px', fontSize: '30px'}}/>Cart </Box>

            </Flex>
            

        </Flex>
    </Box>
  )
}

export default MenuBar