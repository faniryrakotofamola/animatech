import React from 'react'
import Navbar from '../includes/Navbar'
import "./css/Home.css"

function Home() {
  return (
    <>
      <Navbar />
      <div className='container-fluid img-fluid banner'>
        <div className="banner1">
          <div className="banner_text1">
          <p className='text_banner'>
            <span className='anima'>Anima<br /></span> <span className='techno'> Technologie </span>
          </p>
          <p className='text_banner1'>Créer un avenir numérique solide avec nos services de développement informatique de pointe </p>
          <div className="boutton2">
            <button className="btn_header">
              <div className="i_btn">
                <i className='fa fa-calendar'></i>
              </div>
              <div className="p_btn">
                <p>Besoin de plus d’information?</p>
              </div>         
            </button>
            <button className="btn_header1">
              <div className="i_btn1">
                <i className='fa fa-phone'></i>
              </div>
              <div className="p_btn1">
                <p>Discutons de vos projets !</p>
              </div>         
            </button>
          </div>
        </div>
        </div>
      </div>
      
    </>
  )
}

export default Home