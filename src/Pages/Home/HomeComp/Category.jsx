import { Box, Flex,Image ,Text} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { shopbycategory } from './HomeData'

const Category = ({shopbycategory}) => {
  return (
    <Box className='doctors3' backgroundColor={''} border='1px solid black' padding={'10px'}>
{shopbycategory.map((item)=>{
    return(
      <Link to={`/product`}>

        <Box >
    <Image
    borderRadius='full'
    boxSize='100px'
    border='10px solid  #D9DDDC'
    src={item.image}
    alt='Dan Abramov'
  />
<Text as='b' marginLeft={'15px'}>{item.name}</Text>
  </Box>
  </Link>
  )
})}
</Box>
  )
}

export default Category