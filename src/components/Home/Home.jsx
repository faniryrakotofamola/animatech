import React from 'react'
import Navbar from '../includes/Navbar'
import "./css/Home.css"

function Home() {
  return (
    <>
      <Navbar />
      <div className='container-fluid img-fluid banner_home'>
        <div className="banner1">
          <div className="banner_text1">
          <p className='text_banner'>
            <span className='anima'>Anima<br /></span> <span className='techno'> Technologie </span>
          </p>
          <p className='text_banner1'>Créer un avenir numérique solide avec nos services de développement informatique de pointe </p>
          <div className="boutton2">
            <button className="btn_accueil"><i className='fa fa-calendar '></i><span className='span_accueil'>Besoin de plus d’information ?</span></button>
            <button  className="btn_accueil1"><i className='fa fa-phone'></i><span className='span_accueil'>Discutons de vos projets !</span></button>         
          </div>
        </div>
        </div>
      </div>
      
    </>
  )
}

export default Home