/* eslint-disable no-unused-vars */

import React from 'react'
import './Title.css'
// eslint-disable-next-line react/prop-types
function Title({subtitle, title}) {
  return (
    <div className='title'>
        
        <h2>{subtitle}</h2>
        <p>    {title}   </p>
      
    </div>
  )
}

export default Title
