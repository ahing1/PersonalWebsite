import React from 'react'
import AboutImage from '../assets/pexels-darina-belonogova-8004048.jpg'

function About() {
  return (
    <div className='h-screen flex flex-row justify-center items-center space-y-8'>
        <img src={AboutImage} alt="" className='object-cover w-96 ml-56'/>
        <div className='flex flex-col items-center'>
          <h2 className='text-blue-500 font-semibold mr-40'>
            About Me
          </h2>
          <p className='text-center ml-16 mr-56 p-4'>
            I'm currently a Computer Science Student at Stevens Institute of Technology.
            I love to learn and always looking to improve whether its professionally or personally.
            I've taken a big interest into AI and plan on getting my Master's in Computer Science with a Concentration in Machine Learning to truly understand AI to its core.
            With this knowledge I will try and help as many people as I can through tech.
          </p>
        </div>
    </div>
  )
}

export default About