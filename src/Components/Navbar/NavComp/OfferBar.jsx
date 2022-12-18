import React from 'react'
import { Text,Box} from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

// 2. Update the breakpoints as key-value pairs
const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
}

// 3. Extend the theme
const theme = extendTheme({ breakpoints })

const OfferBar = () => {
  return (
    <Box backgroundColor={'#0A1172'} padding={'5px'} 
    width={{ base: '100%', sm: '100%', md: '100%', lg: '100%' }} 
>
        <Text textAlign={'center'} color={'white'} fontSize={['sm', 'md', 'lg', 'xl']}>

1st time customers save 25% on SHOP.COM exclusive brands using code FIRST25OFF. Max $25 discount. Terms Apply. Click Here



    </Text>
    </Box>
    )
}

export default OfferBar