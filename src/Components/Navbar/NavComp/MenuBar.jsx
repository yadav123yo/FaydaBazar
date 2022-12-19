import React from 'react'
import { ReactNode } from 'react';
import { HiUserCircle,HiShoppingCart } from "react-icons/hi";
import { GrRefresh } from "react-icons/gr";
import {
  Box,
  Flex,
  Text,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import {Link }from 'react-router-dom'
// const Links = ['Dashboard', 'Projects', 'Team'];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

const MenuBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>Categories</Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', lg: 'flex' }}>
Flex gap={'40px'}
            <Link to={`/product?category=`}>
                 
                 <Text as='b'>All</Text>
              </Link>
           
            <Link to={`/product?category=Mens`}>
                 <Text as='b'>Men Clothes</Text>

              </Link>
            <Link to={`/product?category=Womens`}>
            <Text as='b'>Women Clothes</Text>
              </Link>
            <Link to={`/`}>
            <Text as='b'>Departments</Text>

            
              </Link>
            <Link to={`/`}>
            <Text as='b'>Shop Buddy</Text>
            </Link>
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuItem
                
                
      >
                
                 <Flex gap={'40px'} className='hide'            display={{ base: 'none', sm: 'inline-flex'  }}
 >
            <Box cursor={"pointer"} display="flex" > <HiUserCircle style={{color: 'black', border:'1px', fontSize: '30px'}}/><Link to={"/signup"} >Sign in</Link></Box>
            <Box cursor={"pointer"} display="flex" > <HiShoppingCart style={{color: 'black', border:'1px', fontSize: '30px'}}/><Link to="/cart">Cart </Link> </Box>
            <Box cursor={"pointer"} display="flex" > <HiUserCircle style={{color: 'black', border:'1px', fontSize: '30px'}}/><Link to="/Admin/Dashboard" >Admin</Link></Box>

            </Flex>
              </MenuItem>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                 <MenuItem>Link 2</MenuItem> 
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
            Flex gap={'40px'}
            <Link to={`/product?category=`}>
                 <Text as='b'>All</Text>
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
              {/* <Flex gap={'40px'} flexDirection={'column'}>
            <Box cursor={"pointer"} display="flex" > <HiUserCircle style={{color: 'black', border:'1px', fontSize: '30px'}}/> Sign in</Box>
            <Box cursor={"pointer"} display="flex" > <HiShoppingCart style={{color: 'black', border:'1px', fontSize: '30px'}}/>Cart </Box>
            <Box cursor={"pointer"} display="flex" > <HiUserCircle style={{color: 'black', border:'1px', fontSize: '30px'}}/>Admin </Box>

            </Flex> */}
            </Stack>
          </Box>
        ) : null}
      </Box>

    
    </div>
  )
}

export default MenuBar