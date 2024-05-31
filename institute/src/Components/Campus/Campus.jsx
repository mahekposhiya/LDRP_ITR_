/* eslint-disable no-unused-vars */



import React, { useRef } from 'react'
import './Campus.css'
import image_1 from '../../assets/LDRP-2.jpg'
import image_2 from '../../assets/LDRP-5.jpg'
import image_3 from '../../assets/LDRP-1.jpg'

import white_arw from '../../assets/white-arrow.png'


const Campus = () => {

return(

  <div className='campus'>
    <div className="gallery">
      <img src={image_1} alt="" />
      <img src={image_3} alt="" />
      <img src={image_2} alt="" />
      {/* <img src={image_1} alt="" /> */}
   
      
      
    </div>
    <button className='btn dark-btn'>See more here <img src={white_arw} alt="" /></button>
  </div>
  

      
   
  )
}

export default Campus
