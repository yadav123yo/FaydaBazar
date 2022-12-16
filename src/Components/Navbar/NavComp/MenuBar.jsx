import React from 'react'
import { Box, Flex,Text } from '@chakra-ui/react'
import { HiUserCircle,HiShoppingCart } from "react-icons/hi";
import { GrRefresh } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";

const MenuBar = () => {
  return (
    <Box className='menubar'>
        <Flex  justifyContent={"space-around"}>
            <h1>Categories</h1>
            <Flex gap={'40px'}>
            <Link to={`/product?category=`}>
                 All
              </Link>
           
            <Link to={`/product?category=Mens`}>
                 Men Cloths
              </Link>
            <Link to={`/product?category=Womens`}>
                 Women Cloths
              </Link>
            <Link to={`/`}>
            Departments
              </Link>
            <Link to={`/`}>
            Shop Buddy
              </Link>
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