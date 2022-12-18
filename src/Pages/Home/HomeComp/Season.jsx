import React from 'react'
import { Image, ButtonGroup,Box,Flex ,Spacer} from '@chakra-ui/react'

const Season = ({img}) => {
  return (
    <Box marginTop={'30px'} bg='red.200' className='season'  >
        <Image src={img}/>
    </Box>
  )
}

export default Season