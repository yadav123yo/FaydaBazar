import React from 'react'
import { useNavigate ,Link} from 'react-router-dom'
import { Button, Text,Box } from '@chakra-ui/react'

const SiderTwocard = ({ img,p, style, text, btn, styleBtn, stylePara1, para1, stylePara,id }) => {
  //console.log(style)

  const nv = useNavigate();

  return (
    <Link to={`/product?category=`}>

    <Box className='card'>
      <Box style={{ padding: 8, }}>
        <img src={img} alt="placeholder" style={style} />
        <Text style={stylePara1}>{p}</Text>
        <Text style={stylePara}>{text}</Text>
        <Text as='b'>₹ {(10+Math.random()*3000).toFixed(2)}</Text>
        <Text fontSize='xs' > +₹ {(Math.random()*3).toFixed(2)} /2% <span style={{color:''}}>cashback</span></Text>
        <Text style={{color:'blue'}}> free shipping with $99 order</Text>

      </Box>
    </Box>
    </Link>
)
}

export default SiderTwocard