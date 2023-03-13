import React from 'react';
import Navbar from '../includes/Navbar';
import './css/devweb.css';

const  DevWeb = () => {
  return (
    <>
      <Navbar />
      <div className='container-fluid img-fluid banner banner_devweb'>
        <div className="banner1">
          <div className="banner_text1">
          <p className='text_banner'>
            <span className='anima'>Développement<br /></span> <span className='techno web'> web</span>
          </p>
          <p className='text_banner1'>
              Un site web est la base d'une forte présence en ligne car il permet de présenter les produits ou services d'une entreprise, de communiquer avec les clients, d'améliorer la visibilité en ligne et d'offrir une expérience utilisateur complète
           </p>
        </div>
        </div>
      </div>
    </>
      
      
  )
}

export default DevWeb