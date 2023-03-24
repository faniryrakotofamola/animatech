import React from 'react';
import Footer from '../includes/Footer';
import Navbar from '../includes/Navbar';
import OutilsEtTechnologies from '../includes/OutilsEtTechnologies';
import './css/devweb.css';

const DevWeb = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid banner_devweb">
        <div className="content_devweb">
          <h1 className="h1_banner_devweb">
            Développement <br /><span className='span_h1_banner_devweb'>web</span>
          </h1>
          <p className="p_banner_devweb">
            Un site web est la base d'une forte présence en ligne car il permet de présenter les produits ou services d'une entreprise, de communiquer avec les clients, d'améliorer la visibilité en ligne et d'offrir une expérience utilisateur complète
          </p>
        </div>

      </div>
      <div className="container-fluid bgcolor_purple cf2_devweb">
        <div className="row row0_devweb">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col_for_img">
            <img src="imagesAnima/devweb/1.png" className='img_section1_devweb' alt="" />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 ">
            <h1 className="h1_section1_devweb">
              Développement web sur mesure
            </h1>
            <p className="p_section1_devweb">
              Le développement web sur mesure est crucial pour toute entreprise qui veut se démarquer dans un monde en ligne saturé. Un site Web sur mesure permet de créer une expérience utilisateur unique et personnalisée pour les visiteurs, qui reflète l'identité de votre entreprise et améliore votre image de marque. En plus de cela, les sites Web sur mesure peuvent être facilement adaptés pour répondre aux besoins de votre entreprise à mesure qu'elle se développe, ce qui les rend plus évolutifs et plus rentables à long terme.Les sites Web sur mesure sont également plus sécurisés que les sites Web standard, car ils sont construits pour éliminer les failles de sécurité et les erreurs de codage, qui sont souvent présentes dans les modèles standard. En outre, les sites Web sur mesure sont optimisés pour les moteurs de recherche, ce qui améliore leur visibilité en ligne et leur capacité à attirer du trafic organique.En fin de compte, le développement web sur mesure offre de nombreux avantages pour les entreprises, notamment une personnalisation accrue, une évolutivité améliorée, une meilleure sécurité et des performances supérieures. Si vous cherchez à améliorer votre présence en ligne et à renforcer votre image de marque, il est temps de passer au développement web sur mesure.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid section2_devweb bgcolor_purple">
        <div className="content_section2_devweb">
          <h1 className="h1_section2_devweb">
            Quelles sont les étapes du développement
            d'une application web?
          </h1>
          <p className="p_section2_devweb">
            Les grandes étapes du développement d'une application web sont importantes car elles permettent de suivre un processus structuré et méthodique pour créer une application web fonctionnelle, performante et répondant aux besoins des utilisateurs.
          </p>
        </div>
        <div className="section3">
          <div className="row row0_devweb row1_section3">
            <div className="col-lg-6 img1_section3 img1_1_section3"></div>
            <div className="col-lg-6 col_row1_section3_devweb col_1_row1_section3_devweb bgColor_white">
              <p className="p_section3_devweb">
                <span className='span1_section3_devweb'>Définition des objectifs :</span> La première étape consiste à définir les objectifs de l'application web, les besoins des utilisateurs et les exigences fonctionnelles. Cette étape permet de déterminer les fonctionnalités clés de l'application et de comprendre les attentes des utilisateurs.
              </p>
            </div>
          </div>
          <div className="row row0_devweb row1_section3 row2_section3">

            <div className="col-lg-6 col_row1_section3_devweb bgColor_white">
              <p className="p_section3_devweb">
                <span className='span1_section3_devweb'>Rédaction du cahier des charges :</span> Cette étape consiste à documenter les spécifications fonctionnelles et techniques de l'application web. Le cahier des charges permet de formaliser les besoins et les attentes du client et de définir les exigences du projet.
              </p>
            </div>
            <div className="col-lg-6 img1_section3 img2_section3"></div>
          </div>
          <div className="row row0_devweb row1_section3">
            <div className="col-lg-6 img1_section3 img3_section3"></div>
            <div className="col-lg-6 col_row1_section3_devweb bgColor_white">
              <p className="p_section3_devweb">
                <span className='span1_section3_devweb'>Développement de l'application :</span>  Cette étape consiste à écrire le code pour créer l'application web. Elle comprend la mise en place de la structure, l'architecture du code, le développement des fonctionnalités, la configuration de la base de données, l'intégration de services tiers, le développement de l'interface utilisateur et le test des fonctionnalités.
              </p>
            </div>
          </div>
          <div className="row row0_devweb row1_section3 row2_section3">

            <div className="col-lg-6 col_row1_section3_devweb col_4_row1_section3_devweb bgColor_white">
              <p className="p_section3_devweb">
                <span className='span1_section3_devweb'>Déploiement :</span> Cette étape consiste à installer l'application web sur un serveur et à le rendre disponible au public. Elle inclut la configuration du serveur, l'installation de la base de données, la publication du contenu et la mise en ligne de l'application.
              </p>
            </div>
            <div className="col-lg-6 img1_section3 img4_section3"></div>
          </div>

        </div>


      </div>
      <OutilsEtTechnologies />
      <Footer />
    </>


  )
}

export default DevWeb