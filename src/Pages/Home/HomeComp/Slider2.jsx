import React from 'react'
import SliderOne from './SliderOne'
import SliderTwo from './SliderTwo'
//import "./css/style.css"




const Slider2 = ({data2,img}) => {
  return (
    <div className='slider'>
        <SliderTwo data={data2}/>
        <SliderOne img={img}/>

</div>
  )
}

export default Slider2