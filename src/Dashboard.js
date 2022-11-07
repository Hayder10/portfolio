import React from 'react'
import './index.css';
import profile from './media/yo.jpg'
import { Typewriter } from 'react-simple-typewriter';

function Dashboard() {
  return (
    <div className='dashboard container-fluid d-flex align-items-center'>
        <div className='row justify-content-around'>
          <div className='col-md-6 align-self-center'>
              <h2 className='display-3'>Hi! , I'm</h2>
              <h1 className='display-1'><Typewriter loop cursor delaySpeed={2000} words={['Rodrigo','Hayder']}/></h1>
              <h2 className='display-5 fst-italic'>Full Stack Developer</h2>
          </div>
          <div className='col-md-5 p-5'>
            <img src={profile} className='img-fluid rounded-circle' alt='error!'></img>
          </div>
      </div>
    </div>
  )
}

export default Dashboard