import React from 'react'
import '../devweb/css/devweb.css'
import "./css/OutilsEtTechnologies.css"

export default function OutilsEtTechnologiesLogiciels() {
  return (
    <div className="container-fluid section2_devweb bgcolor_purple">
      <div className="content_section2_devweb">
        <h1 className="h1_section2_devweb h1_section2_outils" data-aos="zoom-out-left" data-aos-duration="1500" data-aos-offset="100">
          Outils et technologies
        </h1>
        <p className="p_section2_devweb p_section2_outils" data-aos="zoom-in-left" data-aos-duration="1500" data-aos-offset="100">
          JAVA, HTML, XML, SQL, C ou encore PHP
        </p>
        <img src="imagesAnima/devlogiciel/5.png" className='image_outils' alt="" data-aos="zoom-in" data-aos-duration="1500" data-aos-offset="100" />
      </div>
    </div>
  )
}
