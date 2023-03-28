import React from 'react'
import '../devweb/css/devweb.css'
import "./css/OutilsEtTechnologies.css"

export default function OutilsEtTechnologiesMobiles() {
  return (
    <div className="container-fluid section2_devweb bgcolor_purple">
      <div className="content_section2_devweb">
        <h1 className="h1_section2_devweb h1_section2_outils" data-aos="zoom-out-left" data-aos-duration="1500" data-aos-offset="200">
          Outils et technologies
        </h1>
        <p className="p_section2_devweb p_section2_outils" data-aos="zoom-in-left" data-aos-duration="1500" data-aos-offset="250">
          React Native, React Native Debugger, Redux, Expo, ESLint, Flutter, Firebase
        </p>
        <img src="imagesAnima/devlogiciel/5.png" className='image_outils' alt="" data-aos="zoom-out-right" data-aos-duration="1500" data-aos-offset="250" />
      </div>
    </div>
  )
}
