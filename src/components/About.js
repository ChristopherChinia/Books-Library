import React from 'react';
import image from './image2.jpeg';


const About = () => {
  return (
    <div className='about'>
        <div className='flex'>
            <img src={image} className='img-responsive' alt='' />
            <div className='content'>
        <h1>About book library</h1>
        
        <p>
 MIT License
Copyright (c) [2022] Christopher Chinia<br />
Permission is hereby granted, free of charge, <br />to any person obtaining a copy 
of this software and<br /> associated documentation files (the "Software"), to <br />deal
in the Software without restriction, including <br />without limitation the rights
to use, copy, modify, <br />merge, publish, distribute, sublicense, and/or sell<br />
copies of the Software, and to permit persons to whom<br /> the Software is
furnished to do so, subject to the following<br /> conditions:<br />
The above copyright notice and this permission notice <br />shall be included in all
copies or substantial portions<br /> of the Software.
THE SOFTWARE IS PROVIDED "AS IS",<br /> WITHOUT WARRANTY OF ANY KIND, EXPRESS OR<br />
IMPLIED, INCLUDING BUT NOT LIMITED TO THE<br /> WARRANTIES OF MERCHANTABILITY,
FITNESS FOR <br />A PARTICULAR PURPOSE AND NONINFRINGEMENT.<br /> IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT<br /> HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR<br /> OTHER
LIABILITY, WHETHER IN AN ACTION OF <br />CONTRACT, TORT OR OTHERWISE, ARISING FROM,<br />
OUT OF OR IN CONNECTION WITH THE SOFTWARE<br /> OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
</p>
        <button className='btn'> Learn more</button>
        </div>
        </div>
        <footer>
        <h1>Created By Christopher Chinia |  2022 All rights reserved.</h1>
        </footer>
    </div>
  )
}

export default About