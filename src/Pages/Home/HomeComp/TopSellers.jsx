import React from 'react'
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from './Carousel';
//import { Carousel } from 'react-responsive-carousel';
import axios from 'axios'
import SiderTwocard from './SiderTwocard';
import { Link, NavLink } from 'react-router-dom';
import Carousel2 from './Carousel2';

const TopSellers = ({ data }) => {



 

  const sider = {
    img: { width: '200%',height:'300px' },
    
    para: {
      textAlign: 'center', fontSize: '14px', marginLeft: '40px', marginRight: '-70px'
    }
  }


  return (

    <div className='topsell'>
      <Carousel2
        show={4}
        infiniteLoop
      >


        {data.map((image, index) => (
                          <Link to={`/product?category=`}>

          <SiderTwocard
            className="image"
            img={image.url}
            alt=""
            style={sider.img}
            key = { index }
            p = { image.p1 }
            text = { index.p1}

          />
          </Link>
        ))}

      </Carousel2>
    </div>


  )
}

export default TopSellers