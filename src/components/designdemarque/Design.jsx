import React from 'react'
import Footer from '../includes/Footer'
import Navbar from '../includes/Navbar'
import './css/design.css'

export default function Design() {
  return (
    <>
      <Navbar />
      <div className="container-fluid banner_devweb banner_design">
        <div className="content_devweb">
          <h1 className="h1_banner_devweb">
            Design <span className='span_h1_banner_devweb'>de marque</span>
          </h1>
          <p className="p_banner_devweb">
            l’UX et l’UI sont essentiels pour votre site web car ils peuvent aider à attirer des visiteurs, réduire les taux de rebond, augmenter le temps de visite, améliorer les taux de conversion et créer une image de marque forte. En investissant dans la conception UX/UI de votre site web ou application mobile, vous pouvez améliorer l’expérience utilisateur et augmenter les chances de réussite de votre entreprise en ligne.
          </p>
        </div>

      </div>
      <div className="container-fluid bgcolor_purple cf2_design" data-aos="zoom-in-up" data-aos-duration="1500">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col_for_img">
            <img src="imagesAnima/devweb/1.png" className='img_section1_devweb' alt="" />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 ">
            <h1 className="h1_section1_devweb">
              UI & uX
            </h1>
            <p className="p_section1_devweb">
              L’expérience utilisateur (UX) et l’interface utilisateur (UI) sont des éléments clés pour tout site web réussi. L’UX concerne la façon dont les utilisateurs interagissent avec votre site web, tandis que l’UI est la conception visuelle et la présentation de votre site. Ensemble, ces deux éléments forment l’expérience globale de votre site web pour l’utilisateur.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid section2_devweb bgcolor_purple">
        <div className="content_section2_devweb">
          <h1 className="h1_section2_devweb">
            Quelles sont les étapes du design
            de marque
          </h1>
          <p className="p_section2_devweb p_section2_design">
            Les grandes étapes du développement d'une application web sont importantes car elles permettent de suivre un processus structuré et méthodique pour créer une application web fonctionnelle, performante et répondant aux besoins des utilisateurs.
          </p>
        </div>
        <div className="section3">
          <div className="row row1_section3 row1_section3_design" data-aos="fade-up" data-aos-duration="2000">
            <div className="col-lg-6 img1_section3 img1_1_section3 img1_design"></div>
            <div className="col-lg-6 col_row1_section3_devweb col_1_row1_section3_devweb bgColor_white">
              <p className="p_section3_devweb">
                <span className='span1_section3_devweb'>Attirer des visiteurs :</span> Un design attrayant et une navigation facile peuvent attirer plus de visiteurs sur votre site web. Si votre site est difficile à naviguer ou à comprendre, les utilisateurs seront plus enclins à quitter votre site plutôt que de continuer à explorer.
              </p>
            </div>
          </div>
          <div className="row row1_section3 row2_section3 row1_section3_design" data-aos="fade-right" data-aos-duration="2000">

            <div className="col-lg-6 col_row1_section3_devweb bgColor_white ">
              <p className="p_section3_devweb">
                <span className='span1_section3_devweb'>Réduire les taux de rebond :</span> Un taux de rebond élevé signifie que les visiteurs quittent rapidement votre site web après y être arrivés. Un design optimisé UX/UI peut aider à réduire ces taux de rebond en créant une expérience utilisateur plus agréable et plus facile à utiliser.
              </p>
            </div>
            <div className="col-lg-6 img1_section3 img2_section3 img2_design" ></div>
          </div>
          <div className="row row1_section3 row1_section3_design" data-aos="fade-left" data-aos-duration="2000">
            <div className="col-lg-6 img1_section3 img3_section3 img3_design"></div>
            <div className="col-lg-6 col_row1_section3_devweb bgColor_white">
              <p className="p_section3_devweb">
                <span className='span1_section3_devweb'>Augmenter le temps de visite :</span> Les utilisateurs qui trouvent votre site web facile à naviguer et à utiliser sont plus susceptibles de passer plus de temps sur votre site web. Cela peut se traduire par une augmentation du temps passé à explorer vos produits et services, ce qui peut finalement conduire à une conversion plus élevée.
              </p>
            </div>
          </div>
          <div className="row row1_section3 row2_section3 row1_section3_design" data-aos="fade-down" data-aos-duration="2000">

            <div className="col-lg-6 col_row1_section3_devweb col_4_row1_section3_devweb bgColor_white">
              <p className="p_section3_devweb">
                <span className='span1_section3_devweb'>Améliorer les taux de conversion :</span> Un design UX/UI efficace peut aider à améliorer les taux de conversion en créant une expérience utilisateur positive et en facilitant la navigation et la recherche de produits. Si les utilisateurs peuvent facilement trouver ce qu’ils cherchent, ils sont plus susceptibles de convertir en clients payants.

              </p>
            </div>
            <div className="col-lg-6 img1_section3 img4_section3 img4_design"></div>
          </div>
        </div>
      </div>
      <div className="container-fluid section2_devweb bgcolor_purple">
        <div className="content_section2_devweb">
          <h1 className="h1_section2_devweb h1_section2_outils">
            Outils et technologies
          </h1>
          <p className="p_section2_devweb p_section2_outils">
            Figma, Adobe XD,
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}
