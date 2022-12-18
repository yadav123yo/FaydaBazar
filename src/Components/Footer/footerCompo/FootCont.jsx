import React from 'react'
import { Button, Input,Box,Flex ,Text,InputRightElement, InputGroup} from '@chakra-ui/react'
import { BsPinterest } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineTwitter } from "react-icons/ai";
const FootCont = () => {
  return (
    <div>
        <Box className='footerbar' padding={'5px'} width={{base:'130%',sm:'100%',md:'100%' ,lg:'100%'}}>
        <Flex  justifyContent={"space-between"} margin='20px' className='newres'>
             <Flex gap={'00px'} backgroundColor='' justifyContent={'space-between'} className='newres'>
            <Text fontSize={'xs'} color='white'>Get Email Deals & Earn Cashback</Text>
            <InputGroup>
            <Input type="text" placeholder="Enter Email Adress" padding={'15px'}/>

<InputRightElement
pointerEvents='none'
children={<Box></Box>}

/>
            </InputGroup>
           

            </Flex > 
            <Flex gap={'40px'} className='newres'>
            <Box cursor={"pointer"} display="flex" color='white' >Link To This Page & Tell All Your Friends!</Box>
            <Button cursor={"pointer"} height={'30px'} borderRadius={'20px'}>copy link</Button>

            </Flex>

        </Flex>
        <Box className='menubar' >
        <Flex  justifyContent={"space-between"}>
             <Flex gap={'10px'}>
             <Text fontSize={'xs'} as='b'  color='white'> About Us |</Text>
            <Text fontSize={'xs'} as='b'  color='white'>Help |</Text>
            <Text fontSize={'xs'} as='b'  color='white'>Accessibility Statement |</Text>
            <Text fontSize={'xs'} as='b'  color='white'>Contact Us |</Text>
            <Text fontSize={'xs'} as='b'  color='white'>Partner With Us |</Text>
            <Text fontSize={'xs'} as='b'  color='white'>Services |</Text>
            <Text fontSize={'xs'} as='b'  color='white'>Country/Region |</Text>
            <Text fontSize={'xs'} as='b'  color='white'>Connect |</Text>
            <Text fontSize={'xs'} as='b'  color='white'> Your Own SHOP Site |</Text>


            </Flex > 
            <Flex gap={'10px'}>
            <Box cursor={"pointer"}  > <TfiEmail fontSize={'20px'}  color='white'/></Box>
            <Box cursor={"pointer"}  > <FiFacebook fontSize={'20px'}  color='white'/></Box>
            <Box cursor={"pointer"}  > <AiOutlineTwitter fontSize={'20px'}  color='white'/></Box>
            <Box cursor={"pointer"}  > <BsPinterest fontSize={'20px'}  color='white'/></Box>

            </Flex>

        </Flex>
        

    </Box>

    </Box>


    </div>
  )
}

export default FootCont