import React, { useEffect, useState } from 'react'
import Loader from '../Loader/Loader'
import AvisClient from '../avisclient/AvisClient'
import Footer from '../includes/Footer'
import Navbar from '../includes/Navbar'
import "./css/recrutement.css"

export default function Recrutement() {
  const [Load, setLoad] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoad(false)
    }, 2000)
  })


  console.log(Load);
  return Load
    ?
    (
      <Loader />
    )
    :
    (
      <>
        <Navbar />
        <div className="container-fluid cf_realisation cf_recrutement">
          <div className="content" data-aos="fade-left" data-aos-duration="1500">
            <h1 className='h1_realisation h1_recrutement'>
              Nos<br />recrutements
            </h1>
            <p className='p_realisation' data-aos="flip-right" data-aos-duration="1500">
              Rejoignez-nous <br />
              Opportunités proposées par l’agence web Sokeo. Postes basés à Marseille 13001
            </p>
          </div>
        </div>
        <section className='container-fluid cf_section_recrutement'>
          <div className="row row1_realisation" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="200">
            <div className="col-lg-7 col1_realisation col1_recrutement">
              <div className="content_realisation_section1 content_recutement_section1">
                <h1 className='h1_1_realisation h1_1_recrutement'>
                  Développeur PHP Back <br />End à Marseille en CDI
                </h1>
                <p className='p_1_realisation'>
                  Missions Développement de nouveaux outils internes ou sites web Réaliser les tests et corriger les anomalies Assurer la maintenance et l’évolution des applications Participer aux <br />
                  Missions Développement de nouveaux outils internes ou sites web Réaliser les tests et corriger les anomalies Assurer la maintenance et l’évolution des applications Participer aux <br />
                  Missions Développement de nouveaux outils internes ou sites web Réaliser les tests et corriger les anomalies Assurer la maintenance et l’évolution des applications Participer aux <br />
                </p>
                <button className='offre'>
                  Voir l’offre
                </button>
              </div>
            </div>
            <div className="col-lg-5 col2_realisation col2_1_realisation">
              <img src="imagesAnima/recrutement/1.png" className='img_section1_realisation' alt="" />
            </div>
          </div>
          <div className="row row2_realisation" data-aos="fade-right" data-aos-duration="1500" data-aos-offset="200">
            <div className="col-lg-5 col2_realisation col2_1_realisation">
              <img src="imagesAnima/recrutement/2.png" className='img_section1_realisation img1_section1_realisation' alt="" />
            </div>
            <div className="col-lg-7 col1_realisation col1_recrutement">
              <div className="content_realisation_section1 content_recutement_section1 content2_recutement_section1">
                <h1 className='h1_1_realisation h1_1_recrutement'>Stage Développement web Marseille</h1>
                <p className='p_1_realisation p_1_recrutement'>
                  Missions Développement pour nos clients ou nos projets internes Tests et recettes Mise en production Maintenance corrective et évolutive Ce stage est idéal pour les <br />
                  Missions Développement pour nos clients ou nos projets internes Tests et recettes Mise en production Maintenance corrective et évolutive Ce stage est idéal pour les <br />
                  Missions Développement pour nos clients ou nos projets internes Tests et recettes Mise en production Maintenance corrective et évolutive Ce stage est idéal pour les <br />
                </p>
                <button className='offre'>
                  Voir l’offre
                </button>
              </div>
            </div>
          </div>
          <div className="row row1_realisation" data-aos="fade-left" data-aos-duration="1500" data-aos-offset="200">
            <div className="col-lg-7 col1_realisation col1_recrutement">
              <div className="content_realisation_section1 content_recutement_section1">
                <h1 className='h1_1_realisation h1_1_recrutement'>
                  Développeur PHP Back <br />End à Marseille en CDI
                </h1>
                <p className='p_1_realisation'>
                  Missions Développement de nouveaux outils internes ou sites web Réaliser les tests et corriger les anomalies Assurer la maintenance et l’évolution des applications Participer aux <br />
                  Missions Développement de nouveaux outils internes ou sites web Réaliser les tests et corriger les anomalies Assurer la maintenance et l’évolution des applications Participer aux <br />
                  Missions Développement de nouveaux outils internes ou sites web Réaliser les tests et corriger les anomalies Assurer la maintenance et l’évolution des applications Participer aux <br />
                </p>
                <button className='offre'>
                  Voir l’offre
                </button>
              </div>
            </div>
            <div className="col-lg-5 col2_realisation col2_1_realisation">
              <img src="imagesAnima/recrutement/3.png" className='img_section1_realisation' alt="" />
            </div>
          </div>
          <div className="row row2_realisation" data-aos="fade-right" data-aos-duration="1500" data-aos-offset="200">
            <div className="col-lg-5 col2_realisation col2_1_realisation">
              <img src="imagesAnima/recrutement/4.png" className='img_section1_realisation img1_section1_realisation' alt="" />
            </div>
            <div className="col-lg-7 col1_realisation col1_recrutement">
              <div className="content_realisation_section1 content_recutement_section1 content2_recutement_section1">
                <h1 className='h1_1_realisation h1_1_recrutement'>Stage Développement web Marseille</h1>
                <p className='p_1_realisation p_1_recrutement'>
                  Missions Développement pour nos clients ou nos projets internes Tests et recettes Mise en production Maintenance corrective et évolutive Ce stage est idéal pour les <br />
                  Missions Développement pour nos clients ou nos projets internes Tests et recettes Mise en production Maintenance corrective et évolutive Ce stage est idéal pour les <br />
                  Missions Développement pour nos clients ou nos projets internes Tests et recettes Mise en production Maintenance corrective et évolutive Ce stage est idéal pour les <br />
                </p>
                <button className='offre'>
                  Voir l’offre
                </button>
              </div>
            </div>
          </div>
        </section>
        <AvisClient />
        <Footer />
      </>
    )
}
