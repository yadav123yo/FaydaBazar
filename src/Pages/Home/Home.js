import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { Button, ButtonGroup,Box } from '@chakra-ui/react'
import Season from './HomeComp/Season'
import HomeThird from './HomeComp/HomeThird'
import { data2, data3, data4, freeShipping, shopbycategory,freeShipping2, gifts, gifts2, gifts3, shopbycategory2, gifts4, data5 } from './HomeComp/HomeData'
import './Home.css'
import Category from './HomeComp/Category'
import HomeFourth from './HomeComp/HomeFourth'
import Slider1 from './HomeComp/Slider1'
import Slider2 from './HomeComp/Slider2'
import TopSellers from './HomeComp/TopSellers'
const Home = () => {
  return (
    <Box className={'bodywhole'}>
      {/* <Navbar/> */}
      <Season
      img={'https://img.shop.com/Image/homepage/shop-gbr-102789-holiday-hot-toys-banners-1600x300-img-min1669996056936.jpg'}/>
    <HomeThird data={freeShipping}/>
    <HomeThird data={gifts}/>
<Category shopbycategory={shopbycategory}/>
<HomeFourth data={gifts2}/>
<Slider1 data2={data2} img={'https://img.shop.com/Image/homepage/layered-usa-104750-holiday-collection-banner-bgsq1668531326212.jpg'}/>
<HomeFourth data={gifts3}/>
<Slider1 data2={data3} img={'https://img.shop.com/Image/homepage/motives-usa-can-eng-105076-2022-holiday-banner-600x600-img-min1666019864593.jpg'}/>
<HomeThird data={freeShipping2}/>
<Slider2 data2={data4} img={'https://img.shop.com/Image/homepage/motives-usa-can-eng-105076-2022-holiday-banner-600x600-img-min1666019864593.jpg'}/>
<Category shopbycategory={shopbycategory2}/>
<HomeThird data={gifts4}/>
<TopSellers data={data5}/>
    </Box>
  )
}

export default Home