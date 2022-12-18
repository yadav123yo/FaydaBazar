import { Box, Flex,Image ,Text} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const FooterBottom = ({}) => {

    const shopbycategory=[
        {
            'image':"https://img.shop.com/Image/images/ir/Shop-ranks-19-in-newsweek-circle.png"
        },
        {
            'image':"https://img.shop.com/Image/images/ir/DC360_2022_rank_10_top_500_primary_merch_category.png"
        },   
             {
            'image':"https://img.shop.com/Image/images/ir/DC360_2022_rank_55_top_100.png"
        },        {
            'image':"https://img.shop.com/Image/images/ir/Shop-ranks-13-in-NC-circle.png"
        },        {
            'image':"https://img.shop.com/Image/images/ir/commonwealth_2022_rank_22_top_2000_tw_english.png"
        },
        {
            "image":"https://img.shop.com/Image/resources/images/torch-tafe2018-badge.png"
        },        {
            "image":"https://seal-greensboro.bbb.org/seals/blue-seal-153-100-marketamericashopcom-4002355.png"
        } ,    
           {
            "image":"https://seal-greensboro.bbb.org/seals/blue-seal-153-100-marketamericashopcom-4002355.png"
        }
    ]
  return (
    <Box backgroundColor={'#D9DDDC'} className='respo' width={{base:'100%',sm:'100%',md:'118%' ,lg:'100%'}} >
    <Flex gap={'41px'}  justifyContent={'center'}   padding={'10px'} backgroundColor={'#D9DDDC'} className=''>
{shopbycategory.map((item)=>{
    return(

        <Box className='respo'>
    <Image
    borderRadius='full'
    boxSize='70px'
    src={item.image}
    alt='Dan Abramov'
  />
  </Box>
  )
})}
</Flex>
<Box> <img src=''/></Box>
</Box>

  )
}

export default FooterBottom