import React from 'react'
import '../devweb/css/devweb.css'
import "./css/OutilsEtTechnologies.css"

export default function OutilsEtTechnologies() {
  return (
    <div className="container-fluid section2_devweb bgcolor_purple">
      <div className="content_section2_devweb">
        <h1 className="h1_section2_devweb h1_section2_outils">
          Outils et technologies
        </h1>
        <p className="p_section2_devweb p_section2_outils">
          HTML5, CSS3, JavaScript, TypeScript, Node.JS, Express, NestJS, React.JS, PHP, Laravel, Symfony, WordPress, Prestashop, MySQL, PostgreSQL, MongoDB, Git, GitHub, GitLab, Docker.
        </p>
        <img src="imagesAnima/devweb/6.png" className='image_outils' alt="" />
      </div>
    </div>
  )
}
