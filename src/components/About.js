import React from 'react'
import image from './image2.jpeg';


const About = () => {
  return (
    <div className='about'>
        <div className='flex'>
            <img src={image} className='img-responsive' />
        <h1>This is my about component!</h1>
        </div>
        <footer>
        <h1>Created By <a href="#">Christopher chinia</a> |  2022 All rights reserved.</h1>
        </footer>
    </div>
  )
}

export default About