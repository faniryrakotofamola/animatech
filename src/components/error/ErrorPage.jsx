import React from 'react'
import { Link } from 'react-router-dom'
import "./css/error.css"

function ErrorPage() {
  return (
    <div className="container-fluid cf_error">
      <Link to="/" ><img src="imagesAnima/contact/Vector.png" className='arrow_goback arrow_goback_error' alt="" /></Link>
      <h1 className='h1_error'>Page Not Found <br />
        <hr className='hr_error' />
        404 Error</h1>
    </div>
  )
}

export default ErrorPage