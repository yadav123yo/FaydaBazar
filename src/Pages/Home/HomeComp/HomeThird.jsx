import React from 'react'
import { Image, Text,Box,Flex ,Spacer} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const HomeThird = ({data}) => {
  return (
    <Box >
        <Flex  justifyContent={'center'} 
        gap={'160px'} margin={'30px'} padding={'40px'} className={'flex-container'}
        
        >
    {data.map((item)=>{
        return(
          <Link to={`/products`}>

    <Box  backgroundColor={''} alignItem='center' padding={'15px'} width={'330px'} height={'auto'} 
    
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

   
</Flex>
    </Box>
  )
}

export default HomeThird