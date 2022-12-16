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
            <Text>All</Text>
            <Text>Men</Text>
            <Text>Women</Text>
            <Text>Departments</Text>
            <Text>Shop Buddy</Text>
            <Box cursor={"pointer"} display="flex" > <HiUserCircle style={{color: 'black', border:'1px', fontSize: '30px'}}/>Admin</Box>


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