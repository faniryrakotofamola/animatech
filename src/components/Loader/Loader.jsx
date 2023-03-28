import React from 'react'
import "./css/Loader.css"

export default function Loader() {
  return (
    <>
      <div className="container-fluid cf_loader">
        <div className="content_Loader">
          <img src="imagesAnima/LogoLoader.png" alt="logo loader" className='logo_loader' />
          <h1 className='h1_loader'>
            <span className='letter'>A</span>
            <span className='letter'>N</span>
            <span className='letter'>I</span>
            <span className='letter'>M</span>
            <span className='letter'>A</span> &nbsp;&nbsp;
            <span className='letter'>T</span>
            <span className='letter'>E</span>
            <span className='letter'>C</span>
            <span className='letter'>H</span>
            <span className='letter'>N</span>
            <span className='letter'>O</span>
            <span className='letter'>L</span>
            <span className='letter'>O</span>
            <span className='letter'>G</span>
            <span className='letter'>I</span>
            <span className='letter'>E</span>
            <span className='letter'>S</span>
          </h1>
        </div>
      </div>
    </>
  )
}
