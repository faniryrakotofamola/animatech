import React from 'react';
import { Link } from 'react-router-dom';
import '../devmobile/css/DevMobile.css';
import Footer from '../includes/Footer';
import Navbar from '../includes/Navbar';
import "./css/Home.css";

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
              <Link to="/contact">
                <button className="btn_accueil"><i className='fa fa-calendar '></i><span className='span_accueil'>Besoin de plus d’information ?</span></button>
              </Link>
              <Link to="/contact">
                <button className="btn_accueil1"><i className='fa fa-phone'></i><span className='span_accueil'>Discutons de vos projets !</span></button>
              </Link>

            </div>
          </div>
        </div>
      </div>
      <div className="section2">
        <div className="container-fluid cf_devmob">
          <div className="row row1">
            <div className="col-lg-8 col-lx-8 col-md-12 col1_section2_Home">
              <h1 className='h1_home'>Développement web</h1>
              <p className='p_section2'>
                Nous offrons des services de développement web personnalisés pour aider nos clients à créer des sites web performants, modernes et conviviaux. Nos services de développement web comprennent la conception, la programmation et l'intégration de sites web, ainsi que l'optimisation pour les moteurs de recherche (SEO).
              </p>
            </div>
            <div className="col-lg-4 col-xl-4 col-md-12 col-sm-12 col2_section2">
              <img src="imagesAnima/acceuil/1.png" className='img1_section2' alt="" />
            </div>
          </div>
        </div>
        <div className="container-fluid cf_devmob">
          <div className="row ">
            <div className="col-lg-4 col2_section2">
              <img src="imagesAnima/acceuil/2.png" className='img1_section2 img2_section2' alt="" />
            </div>
            <div className="col-lg-8 col1_section2_Home">
              <h1 className='h1_home'>Développement mOBILE</h1>
              <p className='p_section2'>
                Développement mobile : Nous proposons également des services de développement mobile pour aider nos clients à créer des applications mobiles iOS et Android de haute qualité, répondant aux besoins spécifiques de leur entreprise. Nous pouvons vous aider à concevoir, programmer et déployer votre application mobile.              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section2">
        <div className="container-fluid cf_devmob">
          <div className="row row1">
            <div className="col-lg-8 col-lx-8 col-md-12 col1_section2_Home">
              <h1 className='h1_home'>Développement de logiciels sur mesure</h1>
              <p className='p_section2 p_section2_home'>
                Développement de logiciels sur mesure : Nous offrons des services de développement de logiciels personnalisés pour répondre aux besoins spécifiques de votre entreprise. Nous pouvons vous aider à créer des logiciels sur mesure pour la gestion de projet, la gestion de la relation client (CRM), l'automatisation des processus métier et bien plus encore.              </p>
            </div>
            <div className="col-lg-4 col-xl-4 col-md-12 col-sm-12 col2_section2">
              <img src="imagesAnima/acceuil/3.png" className='img1_section2' alt="" />
            </div>
          </div>
        </div>
        <div className="container-fluid cf_devmob">
          <div className="row ">
            <div className="col-lg-4 col2_section2">
              <img src="imagesAnima/acceuil/4.png" className='img1_section2 img2_section2' alt="" />
            </div>
            <div className="col-lg-8 col1_section2_Home">
              <h1 className='h1_home'>Conseils et consultation</h1>
              <p className='p_section2 p_section2_home'>
                Conseils et consultation : Nous proposons également des services de consultation pour aider les entreprises à élaborer des stratégies informatiques efficaces et adaptées à leurs besoins spécifiques. Nous pouvons vous aider à planifier votre stratégie informatique, à élaborer un plan d'action et à choisir les technologies appropriées pour votre entreprise.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section2">
        <div className="container-fluid cf_devmob">
          <div className="row row1">
            <div className="col-lg-8 col-lx-8 col-md-12 col1_section2_Home">
              <h1 className='h1_home'>Design de marque</h1>
              <p className='p_section2 p_section2_home'>
                Nous pouvons également aider les entreprises à créer des identités de marque cohérentes et attrayantes pour leurs sites web et applications mobiles. Nous travaillons avec les clients pour créer des conceptions de logos, des palettes de couleurs, des typographies et des styles visuels cohérents pour aider les entreprises à se différencier de la concurrence et à renforcer leur marque.
              </p>
            </div>
            <div className="col-lg-4 col-xl-4 col-md-12 col-sm-12 col2_section2">
              <img src="imagesAnima/acceuil/5.png" className='img1_section2' alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* *************** PORTFOLIO *****************************  */}
      <div className="container-fluid bg_home">
        <h1 className='h1_portfolio'>PORTFOLIO</h1>
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link  nav_link_portfolio active" id="pills-home-tab" data-toggle="pill" data-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Web</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link nav_link_portfolio" id="pills-profile-tab" data-toggle="pill" data-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">App</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link nav_link_portfolio" id="pills-contact-tab" data-toggle="pill" data-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Design</button>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
            <div className="row tab1">
              <div className="box_tab1">box tab1</div>
              <div className="box_tab1">box tab1</div>
              <div className="box_tab1">box tab1</div>
              <div className="box_tab1">box tab1</div>
              <div className="box_tab1">box tab1</div>
              <div className="box_tab1">box tab1</div>
            </div>
          </div>
          <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
            <div className="row tab1">
              <div className="box_tab1">box tab2</div>
              <div className="box_tab1">box tab2</div>
              <div className="box_tab1">box tab2</div>
              <div className="box_tab1">box tab2</div>
              <div className="box_tab1">box tab2</div>
              <div className="box_tab1">box tab2</div>
            </div>
          </div>
          <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
            <div className="row tab1">
              <div className="box_tab1">box tab3</div>
              <div className="box_tab1">box tab3</div>
              <div className="box_tab1">box tab3</div>
              <div className="box_tab1">box tab3</div>
              <div className="box_tab1">box tab3</div>
              <div className="box_tab1">box tab3</div>
            </div>
          </div>
        </div>
      </div>
      {/* ************************* FOOTER ************************  */}
      <Footer />
    </>
  )
}

export default Home