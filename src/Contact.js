import React from 'react'

function Contact() {
  const handleClick = (url) => {
    window.open(url,'__blank','noopener,noreferrer');
  }
  return (
    <div className='contact container d-flex flex-column justify-content-center'>
      <div className="row">
        <div className="col-md-12">
          <h1 className="display-6">
          If you have anything to tell me, I'll leave my social media here!
          </h1>
        </div>
        <div className="col-md-4 pt-5">
          <h1 className='display-6'><i className="fa-brands fa-2xl fa-linkedin" onClick={() => {handleClick('https://www.linkedin.com/in/rodrigo-cabrera10/')}}></i></h1>
        </div>
        <div className="col-md-4 pt-5">
          <h1 className='display-6'><i className="fa-brands fa-2xl fa-square-github" onClick={() => {handleClick('https://github.com/Hayder10')}}></i></h1>
        </div>
        <div className="col-md-4 pt-5">
          <h1 className='display-6'><i className="fa-brands fa-2xl fa-square-instagram" onClick={() => {handleClick('https://www.instagram.com/rodrigo_hayder10/')}}></i></h1>
        </div>
        
      </div>
    </div>
  )
}

export default Contact