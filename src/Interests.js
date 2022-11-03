import React from 'react'

function Interests() {
  return (
    <div className='interests container d-flex flex-column justify-content-center'>
      <div className="row g-5">
        <div className="col-md-12" data-aos='fade-right' data-aos-delay='200'>
          <h1 className="display-6 fst-italic">
            Let me talk about myself a little bit...
          </h1>
        </div>
        <div className="col-md-12" data-aos='fade-left' data-aos-delay='300'>
          <h1 className="display-6">I'm an absolute nerd, I love getting into stuff and start learning very deeply about what I'm interested in.</h1>
        </div>
        <div className="col-md-12" data-aos='fade-right' data-aos-delay='400'>
          <h1 className="display-6">I like videogames, philosophy and Martial Arts.</h1>
        </div>
        <div className="col-md-12" data-aos='fade-left' data-aos-delay='500'>
          <h1 className="display-6">You can talk to me about whatever thing comes to your mind, I love listening to people!.</h1>
        </div>
        <div className="col-12 mt-5" data-aos='fade-down' data-aos-delay='1500'>
          <i className="fa-solid fa-angles-down fa-2xl"></i>
        </div>
      </div>
    </div>
  )
}

export default Interests