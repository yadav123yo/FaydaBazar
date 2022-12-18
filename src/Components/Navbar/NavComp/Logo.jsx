import React from 'react'
import { Text,Box} from '@chakra-ui/react'

const Logo = () => {
  return (
    <Box width={[
      '100%', // 0-30em
      '160%', // 30em-48em
      '105%', // 48em-62em
      '100%', // 62em+
    ]}>        
      <img width='60%'  style={{marginBottom:"10px"}} src='https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fi.postimg.cc%2FLsK7W4Lj%2Ffayda-bazar.png' />
    </Box>
  )
}

export default Logo