import React from 'react'
import LinkedInImage from '../assets/linkedin-fill-svgrepo-com.svg';
import GitHubImage from '../assets/github-svgrepo-com.svg';
import ProfilePic from '../assets/profile.jpg';
import About from './About';

function Home() {
  return (
    <div>
      <div className="min-h-screen flex justify-center items-center flex-col home__container">
          <p className='mb-8 text-5xl font-bold'>
            AI and Web Dev Enthusiast
          </p>
          <div className='flex items-center flex-row mb-8'>
            <div className='flex flex-col'>
              <p className='text-2xl w-64 mr-24 text-left mb-4'>
                Hi I'm Andrew Hing! A student at Stevens Institute of Technology
              </p>
              <div className="inline-flex space-x-4">
                <a href="https://www.linkedin.com/in/andrew-hing21/">
                  <img src= {LinkedInImage} alt="" className="w-7 h-7"/>
                </a>
                <a href="https://github.com/ahing1">
                  <img src={GitHubImage} alt="" className="w-7 h-7"/>
                </a>
              </div>
            </div>
            <img src={ProfilePic} alt="" className='rounded-full object-cover w-80 h-80 mb-4'/>
          </div>
      </div>

      <div>
        <About />
      </div>
      
    </div>
  )
}

export default Home
