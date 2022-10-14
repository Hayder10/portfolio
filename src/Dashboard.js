import React from 'react'
import './index.css';
import profile from './media/hayderkazuya.jpg'

function Dashboard() {
  return (
    <div className='dashboard container-fluid d-flex align-items-center'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-8 d-flex flex-column justify-content-center'>
              <h2 className='display-3'>Hi! , I'm</h2>
              <h1 className='display-1'>Rodrigo Cabrera</h1>
              <h2 className='display-5 fst-italic'>Full Stack Developer</h2>
          </div>
          <div className='col-md-4 py-5 d-flex justify-content-center'>
            <img src={profile} className='img-fluid rounded-circle py-5' alt='error!'></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard