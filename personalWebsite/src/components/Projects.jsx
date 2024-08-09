import React from 'react'
import rawg from '../assets/rawg.png';
import { Fade } from "react-awesome-reveal";
import GitHubImage from '../assets/github-svgrepo-com.svg';

function Projects() {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
      <h2 className='mb-8 text-blue-500 font-semibold'>Projects</h2>
      <div className='flex flex-col space-y-4'>
        <Fade direction='up'>
          <div className='flex items-center space-x-4'>
            <img src={rawg} alt="" className='w-64 h-56'/>
            <div className='flex flex-col text-center items-center'>
              <a href="https://game-hub-ahing1.vercel.app/">Video Game Discovery App</a>
              <a href="https://github.com/ahing1/game-hub">
                <img src={GitHubImage} alt="" className="w-7 h-7"/>
              </a>
              <p className='mt-4 w-64'>Clone of the RAWG Game Library</p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default Projects