import React from 'react'
import { Button, InputGroup,Box,Input ,InputRightElement} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

const SearchBar = () => {
  return (
    <Box width={{base:'100%',sm:'100%',md:'100%' ,lg:'100%'}}>
        <InputGroup>
      <Input type='text' 
      backgroundColor='rgb(245,245,246)'
      borderRadius='20px 20px 20px 20px'
      fontFamily={"Roboto"}
      fontWeight={"400"} 
      color='#333333'
      //width='700px'
      width={[
        '200px', // 0-30em
        '450px', // 30em-48em
        '555px', // 48em-62em
        '700px', // 62em+
      ]}
      placeholder='Search From Here'
      height='40px'
      padding='20px'
      marginTop="7px"
      />

    {/* <InputRightElement
      pointerEvents='none'
      children={<SearchIcon
       backgroundColor={'black'} 
      h='40px' 
      // width={[
      //   '40px', // 0-30em
      //   '20px', // 30em-48em
      //   '35px', // 48em-62em
      //   '40px', // 62em+
      // ]}
      borderRadius='0px 20px 20px 0px' 
      color={"#c3c5cc"}
      margin-bottom={'24px'}
      />} */}
      
    
  </InputGroup>

    </Box>
    
  )
}

export default SearchBar