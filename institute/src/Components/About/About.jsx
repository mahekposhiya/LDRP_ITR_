/* eslint-disable no-unused-vars */

import React from 'react'
import './About.css'
// eslint-disable-next-line react/prop-types
const About = ({setPlayState}) => {


  return (
    <div className='about'>
       <div className="about-left">
        <img src="src/assets/LDRP-3.jpg" alt=""  className='about-img'/>
        <img src="src/assets/play-icon.png" alt=""  className='play-icon' onClick={()=>{setPlayState(true) }}/>
       </div>
       <div className="about-right">

        <h1>ABOUT INSTITUTE</h1>
        <h2>कर भला होगा भला</h2>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptate libero modi consequuntur ipsam voluptates rem earum corporis, at magnam dicta repellat minus quis sit, veniam magni consequatur aut quasi.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea animi repellendus eligendi dolore natus cumque explicabo expedita architecto fugit ratione.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, maiores non quaerat laudantium debitis quo doloremque temporibus voluptates vel necessitatibus.</p>
               </div>
    </div>
  )
}

export default About
