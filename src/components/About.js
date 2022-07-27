import React from 'react'
import image from './image2.jpeg';


const About = () => {
  return (
    <div className='about'>
        <div className='flex'>
            <img src={image} className='img-responsive' />
            <div className='content'>
        <h1>About book libraries</h1>
        <p> lorem ipsum dolor sit amet, consect</p>
        </div>
        </div>
        <footer>
        <h1>Created By <a href="#">Christopher chinia</a> |  2022 All rights reserved.</h1>
        </footer>
    </div>
  )
}

export default About