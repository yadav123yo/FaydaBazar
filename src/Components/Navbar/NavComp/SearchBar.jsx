import React from 'react'
import { Button, InputGroup,Box,Input ,InputRightElement} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

const SearchBar = () => {
  return (
    <Box>
        <InputGroup>
      <Input type='text' 
      backgroundColor='rgb(245,245,246)'
      borderRadius='20px 20px 20px 20px'
      fontFamily={"Roboto"}
      fontWeight={"400"} 
      color='#333333'
      width='700px'
      placeholder='Search SHOP.COM'
      height='40px'
      padding='20px'
      />

    <InputRightElement
      pointerEvents='none'
      children={<SearchIcon
       backgroundColor={'black'} 
      h='40px' 
      width={"40px"}
      borderRadius='0px 20px 20px 0px' 
      color={"#c3c5cc"}
      margin-bottom={'24px'}
      />}
    />
  </InputGroup>

    </Box>
    
  )
}

export default SearchBar