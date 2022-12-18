import React from 'react'
import { Image, Text,Box,Flex ,Spacer,Grid} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const HomeThird = ({data}) => {
  return (
      <Box className='doctors'>

    {data.map((item)=>{
        return(
          <Link to={`/product?category=`}>

    <Box  backgroundColor={''} alignItem='center' padding={'0px'} width={'330px'} height={'auto'} 
    
    > 
    <Box boxShadow= {'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}>         
      <Image src={item.img}/></Box>
           
    <Text  textAlign='center' style={{fontWeight:'bold'}} >{item.order}</Text>
    <Box alignItem="center">
            <Text textAlign='center' style={{fontWeight:'bold'}}>{item.free}</Text>

    </Box>


</Box>
</Link>

)
    })}

   
</Box>
  )
}

export default HomeThird