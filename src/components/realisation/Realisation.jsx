import React, { useEffect, useState } from 'react'
import Loader from '../Loader/Loader'
import AvisClient from '../avisclient/AvisClient'
import Footer from '../includes/Footer'
import Navbar from '../includes/Navbar'
import './css/Realisation.css'

export default function Realisation() {
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
        <div className="container-fluid cf_realisation">
          <div className="content">
            <h1 className='h1_realisation' data-aos="flip-left" data-aos-duration="1500">
              Nos realisations
            </h1>
            <p className='p_realisation' data-aos="flip-right" data-aos-duration="1500">
              Voici les raisons de nous choisir <br />
              Réalisations effectuées par Anima Technologie
            </p>
          </div>
        </div>
        <section className='container-fluid'>
          <div className="row row1_realisation" data-aos="fade-up" data-aos-duration="1500">
            <div className="col-lg-7 col1_realisation" >
              <div className="content_realisation_section1">
                <h1 className='h1_1_realisation'>Lorem ipsum dolor sit</h1>
                <p className='p_1_realisation'>
                  Lorem ipsum dolor sit amet consectetur. Ut dui magna nunc id. Sit id a aliquam at iaculis porttitor id nisl sapien. Libero semper pharetra quis at orci eget aenean. Urna mi fusce viverra a purus senectus faucibus suscipit. Amet pulvinar a sit sit ac sagittis integer. Quis egestas quam urna enim tempus tincidunt lectus phasellus et. Sed urna tristique accumsan neque tellus nisi proin sed id. Tortor odio phasellus urna id. Semper nulla fringilla volutpat integer. Id egestas sem tortor metus placerat eu in et sit. <br />
                  Consequat sit nisl enim nibh a mauris sed. Eu egestas aliquam adipiscing eu vitae. Malesuada ullamcorper vel lectus venenatis pharetra ac a. Feugiat.
                </p>
                <button className='offre'>
                  Voir l’offre
                </button>
              </div>
            </div>
            <div className="col-lg-5 col2_realisation col2_1_realisation">
              <img src="imagesAnima/realisation/1.png" className='img_section1_realisation' alt="" />
            </div>
          </div>
          <div className="row row2_realisation" data-aos="fade-right" data-aos-duration="1500">
            <div className="col-lg-5 col2_realisation col2_1_realisation">
              <img src="imagesAnima/realisation/1.png" className='img_section1_realisation img1_section1_realisation' alt="" />
            </div>
            <div className="col-lg-7 col1_realisation">
              <div className="content_realisation_section1">
                <h1 className='h1_1_realisation'>Lorem ipsum dolor sit</h1>
                <p className='p_1_realisation'>
                  Lorem ipsum dolor sit amet consectetur. Ut dui magna nunc id. Sit id a aliquam at iaculis porttitor id nisl sapien. Libero semper pharetra quis at orci eget aenean. Urna mi fusce viverra a purus senectus faucibus suscipit. Amet pulvinar a sit sit ac sagittis integer. Quis egestas quam urna enim tempus tincidunt lectus phasellus et. Sed urna tristique accumsan neque tellus nisi proin sed id. Tortor odio phasellus urna id. Semper nulla fringilla volutpat integer. Id egestas sem tortor metus placerat eu in et sit. <br />
                  Consequat sit nisl enim nibh a mauris sed. Eu egestas aliquam adipiscing eu vitae. Malesuada ullamcorper vel lectus venenatis pharetra ac a. Feugiat.
                </p>
                <button className='offre'>
                  Voir l’offre
                </button>
              </div>
            </div>
          </div>
          <div className="row row1_realisation" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="300">
            <div className="col-lg-7 col1_realisation">
              <div className="content_realisation_section1">
                <h1 className='h1_1_realisation'>Lorem ipsum dolor sit</h1>
                <p className='p_1_realisation'>
                  Lorem ipsum dolor sit amet consectetur. Ut dui magna nunc id. Sit id a aliquam at iaculis porttitor id nisl sapien. Libero semper pharetra quis at orci eget aenean. Urna mi fusce viverra a purus senectus faucibus suscipit. Amet pulvinar a sit sit ac sagittis integer. Quis egestas quam urna enim tempus tincidunt lectus phasellus et. Sed urna tristique accumsan neque tellus nisi proin sed id. Tortor odio phasellus urna id. Semper nulla fringilla volutpat integer. Id egestas sem tortor metus placerat eu in et sit. <br />
                  Consequat sit nisl enim nibh a mauris sed. Eu egestas aliquam adipiscing eu vitae. Malesuada ullamcorper vel lectus venenatis pharetra ac a. Feugiat.
                </p>
                <button className='offre'>
                  Voir l’offre
                </button>
              </div>
            </div>
            <div className="col-lg-5 col2_realisation col2_1_realisation">
              <img src="imagesAnima/realisation/1.png" className='img_section1_realisation' alt="" />
            </div>
          </div>
          <div className="row row2_realisation" data-aos="fade-right" data-aos-duration="1500" data-aos-offset="300">
            <div className="col-lg-5 col2_realisation col2_1_realisation">
              <img src="imagesAnima/realisation/1.png" className='img_section1_realisation img1_section1_realisation' alt="" />
            </div>
            <div className="col-lg-7 col1_realisation">
              <div className="content_realisation_section1">
                <h1 className='h1_1_realisation'>Lorem ipsum dolor sit</h1>
                <p className='p_1_realisation'>
                  Lorem ipsum dolor sit amet consectetur. Ut dui magna nunc id. Sit id a aliquam at iaculis porttitor id nisl sapien. Libero semper pharetra quis at orci eget aenean. Urna mi fusce viverra a purus senectus faucibus suscipit. Amet pulvinar a sit sit ac sagittis integer. Quis egestas quam urna enim tempus tincidunt lectus phasellus et. Sed urna tristique accumsan neque tellus nisi proin sed id. Tortor odio phasellus urna id. Semper nulla fringilla volutpat integer. Id egestas sem tortor metus placerat eu in et sit. <br />
                  Consequat sit nisl enim nibh a mauris sed. Eu egestas aliquam adipiscing eu vitae. Malesuada ullamcorper vel lectus venenatis pharetra ac a. Feugiat.
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
