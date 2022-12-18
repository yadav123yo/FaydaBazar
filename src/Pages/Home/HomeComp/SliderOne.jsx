import React from 'react'
import { Link } from 'react-router-dom'


const SliderOne = ({img}) => {
  return (
    <Link to={`/product?category=`}>

    <div className={'Sliderone'}>
        <img width="80%" marginRight="1000px" style={{marginLeft:"90px",margin:"auto"}} src={img} alt="" />
    </div>
    </Link>
  )
}

export default SliderOne