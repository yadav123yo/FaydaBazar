import React from 'react'
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from './Carousel';
//import { Carousel } from 'react-responsive-carousel';
import axios from 'axios'
import SiderTwocard from './SiderTwocard';
import { Link, NavLink } from 'react-router-dom';

const SliderTwo = ({ data }) => {



 

  const sider = {
    img: { width: '100%',height:'300px' },
    
    para: {
      textAlign: 'center', fontSize: '14px', marginLeft: '40px', marginRight: '-70px'
    }
  }


  return (

    <div >
      <Carousel
        show={3}
        infiniteLoop
      >


        {data.map((image, index) => (
                         <>
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
          </>
        ))}

      </Carousel>
    </div>


  )
}

export default SliderTwo