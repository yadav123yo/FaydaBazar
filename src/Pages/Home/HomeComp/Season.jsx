import React from 'react'
import { Image, ButtonGroup,Box,Flex ,Spacer} from '@chakra-ui/react'

const Season = ({img}) => {
  return (
    <Box marginTop={'30px'} bg='red.200' 
    width={[
      '185%', // 0-30em
      '130%', // 30em-48em
      '110%', // 48em-62em
      '100%', // 62em+
    ]}>
        <Image src={img}/>
    </Box>
  )
}

export default Season