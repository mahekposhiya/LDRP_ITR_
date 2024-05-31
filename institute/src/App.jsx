/* eslint-disable no-unused-vars */

import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Department from './Components/Departments/Department'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Activities from './Components/Activities/Activities'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'

function App() {

 const [playState , setPlayState] = useState(false);

  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="container">
        <Title subtitle='OUR DEPARTMENTS' title='What We Offer'></Title>
        <Department></Department>
         <About setPlayState={setPlayState}></About>
         <Title
         subtitle='GALLERY' title='Campus Photos'></Title>
         <Campus></Campus>
         <Title
         subtitle='ACTIVITIES' title='what you like'></Title>
        <Activities></Activities>
        <Title
         subtitle='Contact Us' title='Get in touch'></Title>
         <Contact></Contact>
         <Footer></Footer>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}></VideoPlayer>
    
     
     </div>

  
  )
}

export default App
