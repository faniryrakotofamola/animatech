import React from 'react'
import '../devweb/css/devweb.css'
import "./css/OutilsEtTechnologies.css"

export default function OutilsEtTechnologies() {
  return (
    <div className="container-fluid section2_devweb bgcolor_purple">
      <div className="content_section2_devweb">
        <h1 className="h1_section2_devweb h1_section2_outils" data-aos="zoom-out-left" data-aos-duration="1500" data-aos-offset="100">
          Outils et technologies
        </h1>
        <p className="p_section2_devweb p_section2_outils" data-aos="zoom-in-left" data-aos-duration="1500" data-aos-offset="100">
          HTML5, CSS3, JavaScript, TypeScript, Node.JS, Express, NestJS, React.JS, PHP, Laravel, Symfony, WordPress, Prestashop, MySQL, PostgreSQL, MongoDB, Git, GitHub, GitLab, Docker.
        </p>
        <img src="imagesAnima/devweb/6.png" className='image_outils' alt="" data-aos="zoom-in" data-aos-duration="1500" data-aos-offset="100" />
      </div>
    </div>
  )
}
