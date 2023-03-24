import React from 'react'
import { Link } from 'react-router-dom'
import "./css/Navbar.css"

function Navbar() {
  return (
    <div className="container-fluid navbar1">

      <nav className="navbar navbar-expand-lg navbar-light ">
        <Link className="navbar-brand" to="/">
          <img src="/imagesAnima/Logo.png" className='logo' alt="logo" />

        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Acceuil <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" data-toggle="dropdown" role="button" aria-expanded="true">
                Développement Informatique
                <i className="fa fa-angle-down ml-1 font-weight-bold" aria-hidden="true"></i>

              </Link>
              <div className="dropdown-menu dropdown1">
                <Link className="dropdown-item dropdown-item0" to="/devweb">Développement Web</Link>
                <Link className="dropdown-item dropdown-item0" to="/devmobile">Développement Mobile</Link>
                <Link className="dropdown-item dropdown-item0" to="/devlogiciels">Développement de Logiciels Sur Mesure</Link>
                <Link className="dropdown-item dropdown-item0" to="/design">Design De Marque</Link>
              </div>
            </li>
            <li className="nav-item dropdown ">
              <Link className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                La société
                <i className="fa fa-angle-down ml-1 font-weight-bold" aria-hidden="true"></i>
              </Link>
              <div className="dropdown-menu dropdown2">
                <Link className="dropdown-item dropdown-item1" to="/réalisation">Réalisations</Link>
                <Link className="dropdown-item dropdown-item1" to="#">L’équipe</Link>
                <Link className="dropdown-item dropdown-item1" to="/recrutement">Recrutement</Link>
              </div>
            </li>

            <li className="nav-item navItem_contact">
              <Link className="nav-link navlink_contact" to="/contact">contact</Link>
            </li>
          </ul>

        </div>
      </nav>

    </div>

  )
}

export default Navbar