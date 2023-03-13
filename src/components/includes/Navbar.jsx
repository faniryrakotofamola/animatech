import React from 'react'
import "./css/Navbar.css"

function Navbar() {
  return (
      <div className="container-fluid navbar1">

          <nav className="navbar navbar-expand-lg navbar-light ">
            <a className="navbar-brand" href="#">
              <img src="/imagesAnima/Logo.png" className='logo' alt="logo" />
             
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Acceuil <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                    Développement Informatique
                    <i className="fa fa-angle-down ml-1 font-weight-bold" aria-hidden="true"></i>
                  
                  </a>
                  <div className="dropdown-menu dropdown1">
                    <a className="dropdown-item dropdown-item0" href="#">Développement web</a>
                    <a className="dropdown-item dropdown-item0" href="#">Développement MOBILE</a>
                    <a className="dropdown-item dropdown-item0" href="#">Développement de logiciels sur mesure</a>
                    <a className="dropdown-item dropdown-item0" href="#">Design de marque</a>
                  </div>
                </li>
                <li className="nav-item dropdown ">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                    La société
                     <i className="fa fa-angle-down ml-1 font-weight-bold" aria-hidden="true"></i>
                  </a>
                  <div className="dropdown-menu dropdown2">
                    <a className="dropdown-item dropdown-item1" href="#">Réalisations</a>
                    <a className="dropdown-item dropdown-item1" href="#">L’équipe</a>             
                    <a className="dropdown-item dropdown-item1" href="#">Recrutement</a>
                  </div>
                </li>
                
                  <li className="nav-item">
                  <a className="nav-link">contact</a>
                </li>
              </ul>
              
            </div>
          </nav>
          
    </div>
    
  )
}

export default Navbar