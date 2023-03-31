import React, { Component } from 'react';
import Slider from "react-slick";
import "./css/exemple.css";




export default class Exemple extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      slidesToScroll: 1,
      // autoplay: true,
      focusOnSelect: true,
      speed: 100,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        // {
        //   breakpoint: 600,
        //   settings: {
        //     slidesToShow: 1,
        //     slidesToScroll: 1,
        //     initialSlide: 2,
        //     centerMode: false,

        //   }
        // },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,

          }
        }
      ]
    };
    return (
      <div className='container-fluid cf_exemple'>
        <Slider {...settings}>
          <div className='slick_equipe'>
            <div className="row row_exemple">
              <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5">
                <img src="imagesAnima/equipe/1.png" alt="" className="img_exemple" />
              </div>
              <div className="col-xl-7 col-lg-7 col-md-5 col-sm-7 col2_exemple">
                <h1 className='h1_exemple'>Julien Colomb</h1>
                <h2 className='h2_exemple'>CO-FONDATEUR & DEVELOPEUR</h2>
                <div className="icon_exemple">
                  <img src="imagesAnima/equipe/icon/facebook.png" alt="" className='icon_child_exemple' />
                  <img src="imagesAnima/equipe/icon/linkedIn.png" alt="" className='icon_child_exemple' />
                  <img src="imagesAnima/equipe/icon/phone.png" alt="" className='icon_child_exemple' />
                  <img src="imagesAnima/equipe/icon/twitter.png" alt="" className='icon_child_exemple' />
                </div>
              </div>
            </div>
            {/* <div className="row"> */}
            <p className='p_exemple'>
              A 40 ans, Julien dispose de 20 ans d’expérience dans l’informatique et le développement.Natif de Marseille, il obtient brillamment un BTS Informatique et une Maîtrise en informatique au Conservatoire National des Arts et Métiers (CNAM).
              Investi et professionnel, Julien travaille à Marseille avant d’accepter des postes clefs à Toulon, Valence ou encore Paris.En parallèle et à même pas 30 ans, il créé une entreprise de location de jeux vidéos sur internet. Sa première aventure aura duré environ dix ans.
              Fort de ces expériences enrichissantes, il est alors embauché en tant que responsable de développement et responsable technique. C’est à ce moment-là qu’il rencontre Xavier et qu’ils décident, tous deux, de s’associer pour créer une agence de référencement : Sokeo.
              Au-delà de son professionnalisme, ses compétences techniques et son expérience, Julien est un humain qui aime le football (l’OM) et le bon vin.
            </p>
            {/* </div> */}


          </div>
          <div className='slick_equipe'>
            <div className="row row_exemple">
              <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5">
                <img src="imagesAnima/equipe/2.png" alt="" className="img_exemple" />
              </div>
              <div className="col-xl-7 col-lg-7 col-md-5 col-sm-7 col2_exemple">
                <h1 className='h1_exemple'>Rabe Koto</h1>
                <h2 className='h2_exemple'>DEVELOPEUR</h2>
                <div className="icon_exemple">
                  <img src="imagesAnima/equipe/icon/facebook.png" alt="" className='icon_child_exemple' />
                  <img src="imagesAnima/equipe/icon/linkedIn.png" alt="" className='icon_child_exemple' />
                  <img src="imagesAnima/equipe/icon/phone.png" alt="" className='icon_child_exemple' />
                  <img src="imagesAnima/equipe/icon/twitter.png" alt="" className='icon_child_exemple' />
                </div>
              </div>
            </div>
            {/* <div className="row"> */}
            <p className='p_exemple'>
              A 40 ans, Julien dispose de 20 ans d’expérience dans l’informatique et le développement.Natif de Marseille, il obtient brillamment un BTS Informatique et une Maîtrise en informatique au Conservatoire National des Arts et Métiers (CNAM).
              Investi et professionnel, Julien travaille à Marseille avant d’accepter des postes clefs à Toulon, Valence ou encore Paris.En parallèle et à même pas 30 ans, il créé une entreprise de location de jeux vidéos sur internet. Sa première aventure aura duré environ dix ans.
              Fort de ces expériences enrichissantes, il est alors embauché en tant que responsable de développement et responsable technique. C’est à ce moment-là qu’il rencontre Xavier et qu’ils décident, tous deux, de s’associer pour créer une agence de référencement : Sokeo.
              Au-delà de son professionnalisme, ses compétences techniques et son expérience, Julien est un humain qui aime le football (l’OM) et le bon vin.
            </p>
            {/* </div> */}


          </div>
          <div className='slick_equipe'>
            <div className="row row_exemple">
              <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5">
                <img src="imagesAnima/equipe/3.png" alt="" className="img_exemple" />
              </div>
              <div className="col-xl-7 col-lg-7 col-md-5 col-sm-7 col2_exemple">
                <h1 className='h1_exemple'>Rakoto  Kapoka</h1>
                <h2 className='h2_exemple'>Commercials</h2>
                <div className="icon_exemple">
                  <img src="imagesAnima/equipe/icon/facebook.png" alt="" className='icon_child_exemple' />
                  <img src="imagesAnima/equipe/icon/linkedIn.png" alt="" className='icon_child_exemple' />
                  <img src="imagesAnima/equipe/icon/phone.png" alt="" className='icon_child_exemple' />
                  <img src="imagesAnima/equipe/icon/twitter.png" alt="" className='icon_child_exemple' />
                </div>
              </div>
            </div>
            {/* <div className="row"> */}
            <p className='p_exemple'>
              A 40 ans, Julien dispose de 20 ans d’expérience dans l’informatique et le développement.Natif de Marseille, il obtient brillamment un BTS Informatique et une Maîtrise en informatique au Conservatoire National des Arts et Métiers (CNAM).
              Investi et professionnel, Julien travaille à Marseille avant d’accepter des postes clefs à Toulon, Valence ou encore Paris.En parallèle et à même pas 30 ans, il créé une entreprise de location de jeux vidéos sur internet. Sa première aventure aura duré environ dix ans.
              Fort de ces expériences enrichissantes, il est alors embauché en tant que responsable de développement et responsable technique. C’est à ce moment-là qu’il rencontre Xavier et qu’ils décident, tous deux, de s’associer pour créer une agence de référencement : Sokeo.
              Au-delà de son professionnalisme, ses compétences techniques et son expérience, Julien est un humain qui aime le football (l’OM) et le bon vin.
            </p>
            {/* </div> */}


          </div>
          <div className='slick_equipe'>
            <div className="row row_exemple">
              <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5">
                <img src="imagesAnima/equipe/4.png" alt="" className="img_exemple" />
              </div>
              <div className="col-xl-7 col-lg-7 col-md-5 col-sm-7 col2_exemple">
                <h1 className='h1_exemple'>Rbezafy kely</h1>
                <h2 className='h2_exemple'>TRANSITAIRE</h2>
                <div className="icon_exemple">
                  <img src="imagesAnima/equipe/icon/facebook.png" alt="" className='icon_child_exemple' />
                  <img src="imagesAnima/equipe/icon/linkedIn.png" alt="" className='icon_child_exemple' />
                  <img src="imagesAnima/equipe/icon/phone.png" alt="" className='icon_child_exemple' />
                  <img src="imagesAnima/equipe/icon/twitter.png" alt="" className='icon_child_exemple' />
                </div>
              </div>
            </div>
            {/* <div className="row"> */}
            <p className='p_exemple'>
              A 40 ans, Julien dispose de 20 ans d’expérience dans l’informatique et le développement.Natif de Marseille, il obtient brillamment un BTS Informatique et une Maîtrise en informatique au Conservatoire National des Arts et Métiers (CNAM).
              Investi et professionnel, Julien travaille à Marseille avant d’accepter des postes clefs à Toulon, Valence ou encore Paris.En parallèle et à même pas 30 ans, il créé une entreprise de location de jeux vidéos sur internet. Sa première aventure aura duré environ dix ans.
              Fort de ces expériences enrichissantes, il est alors embauché en tant que responsable de développement et responsable technique. C’est à ce moment-là qu’il rencontre Xavier et qu’ils décident, tous deux, de s’associer pour créer une agence de référencement : Sokeo.
              Au-delà de son professionnalisme, ses compétences techniques et son expérience, Julien est un humain qui aime le football (l’OM) et le bon vin.
            </p>
            {/* </div> */}


          </div>
          <div className='slick_equipe'>
            <div className="row row_exemple">
              <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5">
                <img src="imagesAnima/equipe/5.png" alt="" className="img_exemple" />
              </div>
              <div className="col-xl-7 col-lg-7 col-md-5 col-sm-7 col2_exemple">
                <h1 className='h1_exemple'>JAOJAOBY BE</h1>
                <h2 className='h2_exemple'>SECTRETAIRES</h2>
                <div className="icon_exemple">
                  <img src="imagesAnima/equipe/icon/facebook.png" alt="" className='icon_child_exemple' />
                  <img src="imagesAnima/equipe/icon/linkedIn.png" alt="" className='icon_child_exemple' />
                  <img src="imagesAnima/equipe/icon/phone.png" alt="" className='icon_child_exemple' />
                  <img src="imagesAnima/equipe/icon/twitter.png" alt="" className='icon_child_exemple' />
                </div>
              </div>
            </div>
            {/* <div className="row"> */}
            <p className='p_exemple'>
              A 40 ans, Julien dispose de 20 ans d’expérience dans l’informatique et le développement.Natif de Marseille, il obtient brillamment un BTS Informatique et une Maîtrise en informatique au Conservatoire National des Arts et Métiers (CNAM).
              Investi et professionnel, Julien travaille à Marseille avant d’accepter des postes clefs à Toulon, Valence ou encore Paris.En parallèle et à même pas 30 ans, il créé une entreprise de location de jeux vidéos sur internet. Sa première aventure aura duré environ dix ans.
              Fort de ces expériences enrichissantes, il est alors embauché en tant que responsable de développement et responsable technique. C’est à ce moment-là qu’il rencontre Xavier et qu’ils décident, tous deux, de s’associer pour créer une agence de référencement : Sokeo.
              Au-delà de son professionnalisme, ses compétences techniques et son expérience, Julien est un humain qui aime le football (l’OM) et le bon vin.
            </p>
            {/* </div> */}


          </div>
        </Slider>
      </div>
    );
  }
}
