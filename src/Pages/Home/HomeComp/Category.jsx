import { Box, Flex,Image ,Text} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { shopbycategory } from './HomeData'

const Category = ({shopbycategory}) => {
  return (
    <Flex gap={'41px'} margin={'30px'} justifyContent={'center'} marginTop={'50px'} backgroundColor={'white'} padding={'40px'}>
{shopbycategory.map((item)=>{
    return(
      <Link to={`/products`}>

        <Box>
    <Image
    borderRadius='full'
    boxSize='160px'
    border='10px solid  #D9DDDC'
    src={item.image}
    alt='Dan Abramov'
  />
<Text as='b' marginLeft={'15px'}>{item.name}</Text>
  </Box>
  </Link>
  )
})}
</Flex>
  )
}

export default Category