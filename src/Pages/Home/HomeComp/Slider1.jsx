import React from 'react'
import SliderOne from './SliderOne'
import SliderTwo from './SliderTwo'
//import "./css/style.css"




const Slider1 = ({data2,img}) => {
  return (
    <div className='slider'>
        <SliderOne img={img}/>
        <SliderTwo data={data2}/>
</div>
  )
}

export default Slider1