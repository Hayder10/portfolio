import React from 'react'
import javascript from './media/javascript.png'
import react from './media/react.png'
import bootstrap from './media/bootstrap.png'
import html from './media/html.png'
import css from './media/css.png'
import python from './media/python.png'
import flask from './media/flask.png'
import sqlalch from './media/sqlalchemy.png'
import sql from './media/sql.png'


function Skills() {
    return (
        <div className='container d-flex flex-column justify-content-center'>
            <div className='row'>
                <div className='col-md-12'>
                    <h1 className='display-4 fst-italic text-start px-3 py-5'>Frontend</h1>
                </div>
            </div>
            <div className='row d-flex justify-content-around'>
                <div className='col-md-2'>
                    <img src={javascript} className='img-fluid' alt='Error!'></img>
                </div>
                <div className='col-md-2'>
                    <img src={react} className='img-fluid' alt='Error!'></img>
                </div>
                <div className='col-md-2 align-self-center'>
                    <img src={bootstrap} className='img-fluid' alt='Error!'></img>
                </div>
                <div className='col-md-2'>
                    <img src={html} className='img-fluid' alt='Error!'></img>
                </div>
                <div className='col-md-2'>
                    <img src={css} className='img-fluid' alt='Error!'></img>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12'>
                    <h1 className='display-4 fst-italic text-end px-3 pt-5 pb-3'>Backend</h1>
                </div>
            </div>
            <div className='row d-flex justify-content-around'>
                <div className='col-md-3 col-offset-md-5 p-5'>
                    <img src={python} className='img-fluid' alt='Error!'></img>
                </div>
                <div className='col-md-3 p-5'>
                    <img src={flask} className='img-fluid' alt='Error!'></img>
                </div>
                <div className='col-md-3 p-5'>
                    <img src={sqlalch} className='img-fluid' alt='Error!'></img>
                </div>
                <div className='col-md-3 p-5'>
                    <img src={sql} className='img-fluid' alt='Error!'></img>
                </div>
            </div>
        </div>
    )
}

export default Skills