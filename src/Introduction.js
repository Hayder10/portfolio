import React from 'react'


function Introduction() {
  return (
    <div className='introduction container-fluid d-flex flex-column justify-content-center'>
        <div className='row'>
            <div className='col-12'>
                <h1 className='display-5' data-aos='fade-right' data-aos-delay='200'>This is an awesome introduction of myself...</h1>
                <h1 className='display-6 mt-5' data-aos='fade-left' data-aos-delay='700'>As you can see, I'm a developer.<br />
                But I don't limit myself to technology only<br />I'm continuously developing myself on every way possible<br />
                Curious by nature, driven, open-minded and always eager to learn something new.
                </h1>     
            </div>
        </div>
    </div>
  )
}

export default Introduction