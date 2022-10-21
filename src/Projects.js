import React from 'react'
import dojo from './media/dojo.png'
import binventory from './media/binventory.png'
import battleship from './media/battleship.png'
import starwars from './media/starwars.png'
import cards from './media/cards.png'
import login from './media/login.png'

function Projects() {
  const handleClick = (url) => {
    window.open(url,'__blank','noopener,noreferrer');
  }
  return (
    <div className='projects container d-flex flex-column justify-content-center'>
      <div className='row'>
        <div className='col-md-12'>
          <h1 className='display-4 my-5' data-aos='fade-right' data-aos-delay='200'>Some of my projects...</h1>
        </div>
      </div>
      <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
        <div className="col" data-aos='flip-up' data-aos-delay='400'>
          <div className="card" onClick={() => handleClick('https://dojo-hermanos-bascur.vercel.app')}>
            <img src={dojo} className="card-img" alt="Error!" />
            <div className="card-img-overlay d-flex flex-column justify-content-center">
              <h5 className="card-title fw-bold">Dojo Hermanos Bascur</h5>
              <p className="card-text">Martial Arts Gym Webpage, In charge of designing and building of the site.</p>
              <p className="card-text"><small>Made with JavaScript & React</small></p>
            </div>
          </div>
        </div>
        <div className="col" data-aos='flip-up' data-aos-delay='600'>
          <div className="card" onClick={() => {handleClick('https://bussiness-inventory.vercel.app')}}>
            <img src={binventory} className="card-img" alt="Error!" />
            <div className="card-img-overlay d-flex flex-column justify-content-center">
              <h5 className="card-title fw-bold">Business Inventory</h5>
              <p className="card-text">WebApp to track product stock and profit for small businesses. In charge of the Backend Side of Development</p>
              <p className="card-text"><small>Made with React & MaterialUI , Python & Flask</small></p>
            </div>
          </div>
        </div>
        <div className="col" data-aos='flip-up' data-aos-delay='800'>
          <div className="card" onClick={() => {handleClick('https://battleship-react.vercel.app')}}>
            <img src={battleship} className="card-img" alt="Error!" />
            <div className="card-img-overlay d-flex flex-column justify-content-center">
              <h5 className="card-title fw-bold">Battleship</h5>
              <p className="card-text">Simple Game based on Battleship where you fight against the CPU.</p>
              <p className="card-text"><small>Made with JavaScript & React with tools such as Flux and ContextAPI</small></p>
            </div>
          </div>
        </div>
        <div className="col" data-aos='flip-up' data-aos-delay='1000'>
          <div className="card h-100" onClick={() => {handleClick('https://starwarsblog-five.vercel.app')}}>
            <img src={starwars} className="card-img" alt="Error!" />
            <div className="card-img-overlay d-flex flex-column justify-content-center">
              <h5 className="card-title fw-bold">Star Wars Blog</h5>
              <p className="card-text">Webpage that showcases Star Wars Characters, Vehicles and Planets. With functionality to add favorites. All data is received via API Consumption.</p>
              <p className="card-text"><small>Made with JavaScript & React</small></p>
            </div>
          </div>
        </div>
        <div className="col" data-aos='flip-up' data-aos-delay='1200'>
          <div className="card h-100" onClick={() => {handleClick('https://bubble-sort-cards.vercel.app')}}>
            <img src={cards} className="card-img h-100" alt="Error!" />
            <div className="card-img-overlay d-flex flex-column justify-content-center">
              <h5 className="card-title fw-bold">Bubble Sort Cards</h5>
              <p className="card-text">Simple Web App where you draw any amount of cards and it sorts them, made to learn DOM Manipulation</p>
              <p className="card-text"><small>Made with Vanilla JavaScript & DOM</small></p>
            </div>
          </div>
        </div>
        <div className="col" data-aos='flip-up' data-aos-delay='1400'>
          <div className="card" onClick={() => {handleClick('https://login-jwtf-ront-end.vercel.app')}}>
            <img src={login} className="card-img" alt="Error!" />
            <div className="card-img-overlay d-flex flex-column justify-content-center">
              <h5 className="card-title fw-bold">Simple Login with Auth</h5>
              <p className="card-text">Basic Login with JWT Token Authentication, and protection of private views (/private), made to learn basic Authentication on Backend and the use of sessionStorage on Frontend.</p>
              <p className="card-text"><small>Made with JavaScript & React, Python, Flask, Werkzeug & JWT.</small></p>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-12' data-aos='zoom-in' data-aos-delay='1800'>
          <h1 className='display-6 my-5'>Check out my GitHub!<br /><i className="fa-brands fa-xl fa-square-github" onClick={() => handleClick('https://github.com/Hayder10')}></i></h1>
        </div>
      </div>


    </div>
  )
}

export default Projects