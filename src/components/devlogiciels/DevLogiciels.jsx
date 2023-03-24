import React from 'react'
import "../devweb/css/devweb.css"
import Footer from '../includes/Footer'
import Navbar from '../includes/Navbar'
import OutilsEtTechnologiesLogiciels from '../includes/OutilsEtTechnologiesLogiciels'
import "./css/devlogiciels.css"

export default function DevLogiciels() {
  return (
    <>
      <Navbar />
      <div className="container-fluid banner_devweb banner_devlogiciel">
        <div className="content_devweb">
          <h1 className="h1_banner_devweb">
            Développement <span className='span_h1_banner_devweb'>de logiciels</span>
          </h1>
          <p className="p_banner_devweb">
            Le logiciel offre de nombreux avantages aux entreprises et aux utilisateurs. En effet, les logiciels peuvent aider à réduire les coûts, à améliorer la productivité, à personnaliser les processus métier, à gérer les données de manière plus efficace et à stimuler l'innovation.          </p>
        </div>
      </div>
      <div className="container-fluid section2_devweb bgcolor_purple">
        <div className="content_section2_devweb">
          <h1 className="h1_section2_devweb">
            Avantage de Logiciel Sur Mesure
          </h1>
          <p className="p_section2_devweb p_section2_logiciels">
            Les grandes étapes du développement d'une application mobile sont importantes car elles permettent de suivre un processus structuré et méthodique pour créer une application web fonctionnelle, performante et répondant aux besoins des utilisateurs.
          </p>
        </div>
        <div className="section3">
          <div className="row row1_section3 row1_section3_devlogiciel">
            <div className="col-lg-6 img1_section3 img1_1_section3 img1_logiciels"></div>
            <div className="col-lg-6 col_row1_section3_devweb col_1_row1_section3_devweb bgColor_white">
              <p className="p_section3_devweb">
                <span className='span1_section3_devweb'>Définition des objectifs :</span> La première étape consiste à définir les objectifs de l'application web, les besoins des utilisateurs et les exigences fonctionnelles. Cette étape permet de déterminer les fonctionnalités clés de l'application et de comprendre les attentes des utilisateurs.
              </p>
            </div>
          </div>
          <div className="row row1_section3 row2_section3 row1_section3_devlogiciel">

            <div className="col-lg-6 col_row1_section3_devweb bgColor_white">
              <p className="p_section3_devweb">
                <span className='span1_section3_devweb'>Rédaction du cahier des charges :</span> Cette étape consiste à documenter les spécifications fonctionnelles et techniques de l'application web. Le cahier des charges permet de formaliser les besoins et les attentes du client et de définir les exigences du projet.
              </p>
            </div>
            <div className="col-lg-6 img1_section3 img2_section3 img2_logiciels"></div>
          </div>
          <div className="row row1_section3 row1_section3_devlogiciel">
            <div className="col-lg-6 img1_section3 img3_section3 img3_logiciels"></div>
            <div className="col-lg-6 col_row1_section3_devweb bgColor_white">
              <p className="p_section3_devweb">
                <span className='span1_section3_devweb'>Développement de l'application :</span>  Cette étape consiste à écrire le code pour créer l'application web. Elle comprend la mise en place de la structure, l'architecture du code, le développement des fonctionnalités, la configuration de la base de données, l'intégration de services tiers, le développement de l'interface utilisateur et le test des fonctionnalités.
              </p>
            </div>
          </div>
          <div className="row row1_section3 row2_section3 row1_section3_devlogiciel">

            <div className="col-lg-6 col_row1_section3_devweb col_4_row1_section3_devweb bgColor_white">
              <p className="p_section3_devweb">
                <span className='span1_section3_devweb'>Déploiement :</span> Cette étape consiste à installer l'application web sur un serveur et à le rendre disponible au public. Elle inclut la configuration du serveur, l'installation de la base de données, la publication du contenu et la mise en ligne de l'application.
              </p>
            </div>
            <div className="col-lg-6 img1_section3 img4_section3 img4_logiciels"></div>
          </div>

        </div>


      </div>
      <OutilsEtTechnologiesLogiciels />
      <Footer />
    </>

  )
}
