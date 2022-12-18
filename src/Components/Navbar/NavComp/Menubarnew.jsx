import React from 'react'
import { ReactNode } from 'react';
import { HiUserCircle,HiShoppingCart } from "react-icons/hi";
import { GrRefresh } from "react-icons/gr";
import { AUTH_LOGOUT } from "../../../Redux/auth/actionTypes";

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
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
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverTrigger,
    Portal,
    useToast,

} from '@chakra-ui/react';
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineUser } from "react-icons/ai";
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = ['Dashboard', 'Projects', 'Team'];

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

const Menubarnew = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const toast = useToast();
  const auth = useSelector((state) => state.auth);
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
              display={{ base: 'none', md: 'flex' }}>
Flex gap={'40px'}
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
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuItem
                
                
      >
                
                 <Flex gap={'40px'} className='hide'            display={{ base: 'none', sm: 'inline-flex'  }}
 >
            <Box cursor={"pointer"} display="flex" >  <p>
                <Link to="/signup">
                  <AiOutlineUser fontSize="20px" />
                </Link>
                {auth.data.isAuthenticated ? (
                  <Button
                    h="30px"
                    w="60px"
                    className="navLogout"
                    onClick={() => {
                      dispatch({ type: AUTH_LOGOUT });
                      toast({
                        title: "Logged out successfully",
                        status: "success",
                        duration: 3000,
                        isClosable: true,
                        position: "top",
                      });
                    }}
                  >
                    Logout
                  </Button>
                ) : (
                  <span className="navLogin">
                    <Popover>
                      <PopoverTrigger>
                        <Button>Get Started</Button>
                      </PopoverTrigger>
                      <Portal className="xxx">
                        <PopoverContent>
                          <PopoverArrow />
                          <PopoverCloseButton />
                          <PopoverBody>
                            <Link to="/login" className="xxx">
                              <Button colorScheme="blue">Login</Button>
                            </Link>
                            <br></br>
                            <br></br>
                            <Link to="/signup">
                              <Button colorScheme="blue">Sign Up</Button>
                            </Link>
                          </PopoverBody>
                        </PopoverContent>
                      </Portal>
                    </Popover>
                  </span>
                )}
              </p></Box>
            <Box cursor={"pointer"} display="flex" > <GrRefresh style={{color: 'black', border:'1px', fontSize: '30px'}}/>Orders </Box>
            <Box cursor={"pointer"} display="flex" > <HiShoppingCart style={{color: 'black', border:'1px', fontSize: '30px'}}/>Cart </Box>

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
              <Flex gap={'40px'} flexDirection={'column'}>
            {/* <Box cursor={"pointer"} display="flex" > <HiUserCircle style={{color: 'black', border:'1px', fontSize: '30px'}}/> Sign in</Box> */}
            <Box cursor={"pointer"} display="flex" >  <p>
                <Link to="/signup">
                  <AiOutlineUser fontSize="20px" />
                </Link>
                {auth.data.isAuthenticated ? (
                  <Button
                    h="30px"
                    w="60px"
                    className="navLogout"
                    onClick={() => {
                      dispatch({ type: AUTH_LOGOUT });
                      toast({
                        title: "Logged out successfully",
                        status: "success",
                        duration: 3000,
                        isClosable: true,
                        position: "top",
                      });
                    }}
                  >
                    Logout
                  </Button>
                ) : (
                  <span className="navLogin">
                    <Popover>
                      <PopoverTrigger>
                        <Button>Get Started</Button>
                      </PopoverTrigger>
                      <Portal className="xxx">
                        <PopoverContent>
                          <PopoverArrow />
                          <PopoverCloseButton />
                          <PopoverBody>
                            <Link to="/login" className="xxx">
                              <Button colorScheme="blue">Login</Button>
                            </Link>
                            <br></br>
                            <br></br>
                            <Link to="/signup">
                              <Button colorScheme="blue">Sign Up</Button>
                            </Link>
                          </PopoverBody>
                        </PopoverContent>
                      </Portal>
                    </Popover>
                  </span>
                )}
              </p></Box>
            {/* <Box cursor={"pointer"} display="flex" > <GrRefresh style={{color: 'black', border:'1px', fontSize: '30px'}}/>Orders </Box> */}
            <Box cursor={"pointer"} display="flex" > <HiShoppingCart style={{color: 'black', border:'1px', fontSize: '30px'}}/>Cart </Box>

            </Flex>
            </Stack>
          </Box>
        ) : null}
      </Box>

    
    </div>
  )
}

export default Menubarnew