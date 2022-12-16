import React from 'react'
import { Link } from 'react-router-dom'


const SliderOne = ({img}) => {
  return (
    <Link to={`/product`}>

    <div className={'Sliderone'}>
        <img width="100%" src={img} alt="" />
    </div>
    </Link>
  )
}

export default SliderOne