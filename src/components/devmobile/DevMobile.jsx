import React from 'react';
import Navbar from '../includes/Navbar';
import './css/DevMobile.css';

export default function DevMobile() {
  return (
    <>
      <Navbar />
      <div className="container-fluid cf_devmob container_devmobile">
        <div className="content">
          <h1 className='h1_devmobile'>
            Développement <br />
            <span className='span_devmobile'>Mobile</span>  
          </h1>
          <p className='p_content'>Conception et développement mobile : Android, iOS et Applications natives ou hybrides, Interfaces ergonomiques et intuitives avec des fonctionnalités mobiles innovantes : QR Code NFC… Notre équipe de développeurs d’applications mobiles prend en charge tous types de projets. Pour votre première application mobile, choisissez une équipe qui sera attentive à toutes vos exigences.</p>
        </div>
      </div>
      <section className="section1">
        <div className="container-fluid">
          <div className="row pt-5 pb-5">
            <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12 col1_section1">
              <div className="">
                <img src="imagesAnima/devmobile/1.png" className='img_section1' alt="imagesection1" />
              </div>
            </div>
            <div className="col-lg-6 col-lg-6 col-xl-6 col-sm-12 col-md-12">
              <h2 className='h2_section1' >Développement mobile</h2>
              <p className="p_section1">
                Le développement d'applications mobiles sur mesure est une pratique de plus en plus courante dans le monde du numérique. Cette tendance s'explique en partie par la popularité des smartphones et des tablettes, qui ont profondément transformé notre façon de consommer du contenu et d'interagir avec les marques. Il offre de nombreux avantages pour les entreprises qui souhaitent offrir une expérience utilisateur personnalisée et améliorer leur relation client. Cependant, il est important de suivre une approche méthodique et de disposer d'une expertise technique solide pour garantir le succès du projet.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="section2">
        <div className="container-fluid cf_devmob">
          <div className="row row1">
            <div className="col-lg-8 col-lx-8 col-md-12 col1_section2">
              <p className='p_section2'>
                iOS et Android sont deux systèmes d'exploitation mobiles qui ont des différences significatives en termes de fabricant, d'interface utilisateur, d'applications, de sécurité, de personnalisation et de gestion des mises à jour. iOS est développé exclusivement par Apple et a une interface utilisateur simple et épurée, tandis qu'Android est utilisé par plusieurs fabricants et offre une interface plus personnalisable. En termes de sécurité, iOS est considéré comme plus sécurisé qu' Android, mais Android a amélioré sa sécurité ces dernières années.
              </p>
            </div>
            <div className="col-lg-4 col-xl-4 col-md-12 col-sm-12 col2_section2">
              <img src="imagesAnima/devmobile/2.png" className='img1_section2' alt="" />
            </div>
          </div>
        </div>
        <div className="container-fluid cf_devmob">
          <div className="row ">
            <div className="col-lg-4 col2_section2">
              <img src="imagesAnima/devmobile/3.png" className='img1_section2 img2_section2' alt="" />
            </div>
            <div className="col-lg-8 col1_section2">
              <p className='p_section2'>
                  Pour créer une application mobile pour iOS, le langage de programmation utilisé est principalement Objective-C ou Swift. Objective-C est un langage de programmation orienté objet et il était le principal langage de programmation pour le développement iOS avant l'introduction de Swift. Swift, également un langage de programmation orienté objet, est maintenant largement utilisé pour développer des applications iOS.<br />
                  Pour Android, le langage de programmation principal est Java, mais Kotlin est également devenu populaire ces dernières années. Java est un langage de programmation orienté objet qui est utilisé depuis longtemps pour le développement d'applications Android. Kotlin, en revanche, est plus récent et a été introduit en 2011. Il est considéré comme plus concis et plus sûr que Java, et est devenu rapidement populaire pour le développement d'applications Android.<br />
                  En outre, pour développer des applications mobiles iOS et Android, il est également possible d'utiliser des cadres de développement multi plateformes tels que React Native, Flutter et Xamarin, qui permettent aux développeurs de coder une seule application qui peut être utilisée à la fois sur iOS et Android. Ces cadres utilisent généralement des langages de programmation tels que JavaScript, Dart ou C#.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
