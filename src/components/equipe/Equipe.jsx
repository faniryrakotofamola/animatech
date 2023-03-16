import React, { useState } from 'react';
import Slider from "react-slick";
// import "../avisclient/css/avisclient.css";
import Navbar from '../includes/Navbar';
import "./css/equipe.css";

export default function Equipe() {
  const [state , setState] = useState({
    image: require("./equipe/bg.png")
  })
  const [biblio , setBiblio] = useState({})
  const [biblio2 , setBiblio2] = useState({})
  const [biblio3 , setBiblio3] = useState({})
  const [biblio4 , setBiblio4] = useState({})
  const [biblio5 , setBiblio5] = useState({})
  const [contenuTextEquipe , setcontenuTextEquipe] = useState({})
  const [contenuTextEquipe2 , setcontenuTextEquipe2] = useState({})
  const [contenuTextEquipe3 , setcontenuTextEquipe3] = useState({})
  const [contenuTextEquipe4 , setcontenuTextEquipe4] = useState({})
  const [contenuTextEquipe5 , setcontenuTextEquipe5] = useState({})
  const [textInContentEquipe , settextInContentEquipe] = useState({})
  const [textInContentEquipe2 , settextInContentEquipe2] = useState({})
  const [textInContentEquipe3 , settextInContentEquipe3] = useState({})
  const [textInContentEquipe4 , settextInContentEquipe4] = useState({})
  const [textInContentEquipe5 , settextInContentEquipe5] = useState({})
  const [image1 , setImage] = useState({})
  const [image2 , setImage2] = useState({})
  const [image3 , setImage3] = useState({})
  const [image4 , setImage4] = useState({})
  const [image5 , setImage5] = useState({})
 

  const style ={
    background:`url(${state.image}) center center/cover no-repeat`,
    width: '100%',
    height: '100vh'
  }
      function SampleNextArrow(props) {
      const {onClick } = props;
      return (
        <div className="arrow_right arrow_right_equipe" onClick={onClick} >
          <i className="fa fa-arrow-right" aria-hidden="true"></i>
        </div>
      );
    }

    function SamplePrevArrow(props) {
      const {onClick } = props;
      return (
        <div className="arrow_left arrow_left_equipe" onClick={onClick} >
          <i className="fa fa-arrow-left" aria-hidden="true"></i>
        </div>
      );
    }
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      // autoplay: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      appendDots:dots => (
        <div
          style={{
            borderRadius: "10px",
            padding: "10px"
          }}
        >
          <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
      ),
      customPaging: i => (
        <div
          className="dots_div"
          style={{
            width: "30px",
            height:"20px",
          }}
        >
        </div>
      ),
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
         {
          breakpoint: 991,
          settings: {
            dots: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            dots: false
          }
        },
         {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            dots: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
          }
        }
      ]
    };

    // ************************************* 
  const handleclick = () => {
    setState({
       image: require("./equipe/1.png")
    });
    setBiblio({
      opacity: 1,
      height:"fit-content",
      transition: "2s"
    });
    setBiblio2(null);;
    setBiblio3(null);
    setBiblio4(null);
    setBiblio5(null);
    
    setcontenuTextEquipe({
      height: "fit-content",
      opacity: 1,
      // transition: "4s",
      marginTop: "-261px"
    });
    setcontenuTextEquipe2({
      opacity: 0,
    });
    setcontenuTextEquipe3({
      opacity: 0,
    });
    setcontenuTextEquipe4({
      opacity: 0,
    });
    setcontenuTextEquipe5({
      opacity: 0,
    });
    setImage({
      position: "absolute",
      zIndex: 999999999999999,
      top: "-311px",
      left: "35px",
      transition:"10s",
    })
    setImage2()
    setImage3()
    setImage4()
    setImage5()
    settextInContentEquipe({
      opacity : 1,
      transition: "2s"
    })
    settextInContentEquipe2(null)
    settextInContentEquipe3(null)
    settextInContentEquipe4(null)
    settextInContentEquipe5(null)
  }

  // ****************************** 

    const handleclick2 = () => {
    setState({
       image: require("./equipe/2.png")
    });
    setBiblio2({
      opacity: 1,
      height:"fit-content",
      transition: "2s"
    });
    setBiblio(null);;
    setBiblio3(null);
    setBiblio4(null);
    setBiblio5(null);
    
    setcontenuTextEquipe2({
      height: "fit-content",
      opacity: 1,
      // transition: "4s",
      marginTop: "-261px"
    });
    setcontenuTextEquipe({
      opacity: 0,
    });
    setcontenuTextEquipe3({
      opacity: 0,
    });
    setcontenuTextEquipe4({
      opacity: 0,
    });
    setcontenuTextEquipe5({
      opacity: 0,
    });
    setImage2({
      position: "absolute",
      zIndex: 999999999999999,
      top: "-311px",
      left: "35px",
      transition:"10s",
    })
    setImage()
    setImage3()
    setImage4()
    setImage5()
    settextInContentEquipe({
      opacity : 1,
      transition: "2s"
   })
   settextInContentEquipe2({
      opacity : 1,
      transition: "2s"
    })
    settextInContentEquipe(null)
    settextInContentEquipe3(null)
    settextInContentEquipe4(null)
    settextInContentEquipe5(null)
  }

  // ********************* 3 /
      const handleclick3 = () => {
    setState({
       image: require("./equipe/bg.png")
    });
    setBiblio3({
      opacity: 1,
      height:"fit-content",
      transition: "2s"
    });
    setBiblio(null);;
    setBiblio2(null);
    setBiblio4(null);
    setBiblio5(null);
    
    setcontenuTextEquipe3({
      height: "fit-content",
      opacity: 1,
      // transition: "4s",
      marginTop: "-261px"
    });
    setcontenuTextEquipe({
      opacity: 0,
    });
    setcontenuTextEquipe2({
      opacity: 0,
    });
    setcontenuTextEquipe4({
      opacity: 0,
    });
    setcontenuTextEquipe5({
      opacity: 0,
    });
    setImage3({
      position: "absolute",
      zIndex: 999999999999999,
      top: "-311px",
      left: "35px",
      transition:"10s",
    })
    setImage()
    setImage2()
    setImage4()
   settextInContentEquipe3({
      opacity : 1,
      transition: "2s"
    })
    settextInContentEquipe(null)
    settextInContentEquipe2(null)
    settextInContentEquipe4(null)
    settextInContentEquipe5(null)
  }
      const handleclick4 = () => {
    setState({
       image: require("./equipe/4.png")
    });
    setBiblio4({
      opacity: 1,
      height:"fit-content",
      transition: "2s"
    });
    setBiblio(null);;
    setBiblio3(null);
    setBiblio2(null);
    setBiblio5(null);
    
    setcontenuTextEquipe4({
      height: "fit-content",
      opacity: 1,
      // transition: "4s",
      marginTop: "-261px"
    });
    setcontenuTextEquipe({
      opacity: 0,
    });
    setcontenuTextEquipe3({
      opacity: 0,
    });
    setcontenuTextEquipe2({
      opacity: 0,
    });
    setcontenuTextEquipe5({
      opacity: 0,
    });
    setImage4({
      position: "absolute",
      zIndex: 999999999999999,
      top: "-311px",
      left: "35px",
      transition:"10s",
    })
    setImage()
    setImage3()
    setImage2()
    setImage5()
   settextInContentEquipe4({
      opacity : 1,
      transition: "2s"
    })
    settextInContentEquipe2(null)
    settextInContentEquipe3(null)
    settextInContentEquipe5(null)
    settextInContentEquipe(null)
   
  }
      const handleclick5 = () => {
    setState({
       image: require("./equipe/5.png")
    });
    setBiblio5({
      opacity: 1,
      height:"fit-content",
      transition: "2s"
    });
    setBiblio(null);;
    setBiblio3(null);
    setBiblio4(null);
    setBiblio2(null);
    
    setcontenuTextEquipe5({
      height: "fit-content",
      opacity: 1,
      // transition: "4s",
      marginTop: "-261px"
    });
    setcontenuTextEquipe({
      opacity: 0,
    });
    setcontenuTextEquipe3({
      opacity: 0,
    });
    setcontenuTextEquipe4({
      opacity: 0,
    });
    setcontenuTextEquipe2({
      opacity: 0,
    });
    setImage5({
      position: "absolute",
      zIndex: 999999999999999,
      top: "-311px",
      left: "35px",
      transition:"10s",
    })
    setImage()
    setImage3()
    setImage4()
    setImage2()
    settextInContentEquipe5({
      opacity : 1,
      transition: "2s"
    })
    settextInContentEquipe2(null)
    settextInContentEquipe3(null)
    settextInContentEquipe4(null)
    settextInContentEquipe(null)
  }

  // console.log(state);
  return (
    
    <>
      <Navbar />
      {/* <div className="container-fluid cf_equipe"> */}
          {/* <div className="img">
            <h1 className='h1_equipe'>Julien Colomb</h1>
            <img src={state.image} alt="" className='image1' />
          </div> */}
          <div className='container-fluid slick_equipe' style={style}>
            <h1 className='titre_equipe'>rencontrer notre equipe</h1>
            <Slider {...settings}>
              <div className="container-fluid cf_equipe ">
                <div className="row row_equipe">
                    <div className="col-lg-12 col1_equipe">
                        <div className="content_equipe">
                          <img src="imagesAnima/equipe/1.png" className="img_equipe img_equipe1" style={image1} alt="" onClick={handleclick} />                          
                        </div>
                        <div className='contenu_txt_equipe' style={contenuTextEquipe}>
                            <div className="text_in_content_equipe" style={textInContentEquipe}>
                              <p className='p_equipe'>Julien Colomb</p>
                              <h2 className='fonction'>CO-FONDATEUR & DEVELOPEUR</h2>
                              <div className="icon_equipe">
                                <i className="fa fa-facebook all_icon_equipe facebook" aria-hidden="true"></i>
                                <i className="fa fa-linkedin all_icon_equipe" aria-hidden="true"></i>
                                <i className="fa fa-phone all_icon_equipe" aria-hidden="true"></i>
                                <i className="fa fa-twitter all_icon_equipe" aria-hidden="true"></i>
                              </div>

                            </div>
                            <p className='bibliographie_equipe' style={biblio}>
                              A 40 ans, Julien dispose de 20 ans d’expérience dans l’informatique et le développement.Natif de Marseille, il obtient brillamment un BTS Informatique et une Maîtrise en informatique au Conservatoire National des Arts et Métiers (CNAM).
                              Investi et professionnel, Julien travaille à Marseille avant d’accepter des postes clefs à Toulon, Valence ou encore Paris.En parallèle et à même pas 30 ans, il créé une entreprise de location de jeux vidéos sur internet. Sa première aventure aura duré environ dix ans.
                              Fort de ces expériences enrichissantes, il est alors embauché en tant que responsable de développement et responsable technique. C’est à ce moment-là qu’il rencontre Xavier et qu’ils décident, tous deux, de s’associer pour créer une agence de référencement : Sokeo.
                              Au-delà de son professionnalisme, ses compétences techniques et son expérience, Julien est un humain qui aime le football (l’OM) et le bon vin.
                            </p>
                        </div>
                        
                    </div>
                </div>
              </div>
              <div className="container-fluid cf_equipe ">
                <div className="row row_equipe">
                    <div className="col-lg-12 col1_equipe">
                        <div className="content_equipe">
                          <img src="imagesAnima/equipe/2.png" className="img_equipe img_equipe1" style={image2} alt="" onClick={handleclick2} />                          
                        </div>
                        <div className='contenu_txt_equipe' style={contenuTextEquipe2}>
                            <div className="text_in_content_equipe" style={textInContentEquipe2}>
                              <p className='p_equipe'>Julien Colomb</p>
                              <h2 className='fonction'>CO-FONDATEUR & DEVELOPEUR</h2>
                              <div className="icon_equipe">
                                <i className="fa fa-facebook all_icon_equipe facebook" aria-hidden="true"></i>
                                <i className="fa fa-linkedin all_icon_equipe" aria-hidden="true"></i>
                                <i className="fa fa-phone all_icon_equipe" aria-hidden="true"></i>
                                <i className="fa fa-twitter all_icon_equipe" aria-hidden="true"></i>
                              </div>

                            </div>
                            <p className='bibliographie_equipe' style={biblio2}>
                              A 40 ans, Julien dispose de 20 ans d’expérience dans l’informatique et le développement.Natif de Marseille, il obtient brillamment un BTS Informatique et une Maîtrise en informatique au Conservatoire National des Arts et Métiers (CNAM).
                              Investi et professionnel, Julien travaille à Marseille avant d’accepter des postes clefs à Toulon, Valence ou encore Paris.En parallèle et à même pas 30 ans, il créé une entreprise de location de jeux vidéos sur internet. Sa première aventure aura duré environ dix ans.
                              Fort de ces expériences enrichissantes, il est alors embauché en tant que responsable de développement et responsable technique. C’est à ce moment-là qu’il rencontre Xavier et qu’ils décident, tous deux, de s’associer pour créer une agence de référencement : Sokeo.
                              Au-delà de son professionnalisme, ses compétences techniques et son expérience, Julien est un humain qui aime le football (l’OM) et le bon vin.
                            </p>
                        </div>
                        
                    </div>
                </div>
              </div>
              <div className="container-fluid cf_equipe ">
                <div className="row row_equipe">
                    <div className="col-lg-12 col1_equipe">
                        <div className="content_equipe">
                          <img src="imagesAnima/equipe/3.png" className="img_equipe img_equipe1" style={image3} alt="" onClick={handleclick3} />                          
                        </div>
                        <div className='contenu_txt_equipe' style={contenuTextEquipe3}>
                            <div className="text_in_content_equipe" style={textInContentEquipe3}>
                              <p className='p_equipe'>Julien Colomb</p>
                              <h2 className='fonction'>CO-FONDATEUR & DEVELOPEUR</h2>
                              <div className="icon_equipe">
                                <i className="fa fa-facebook all_icon_equipe facebook" aria-hidden="true"></i>
                                <i className="fa fa-linkedin all_icon_equipe" aria-hidden="true"></i>
                                <i className="fa fa-phone all_icon_equipe" aria-hidden="true"></i>
                                <i className="fa fa-twitter all_icon_equipe" aria-hidden="true"></i>
                              </div>

                            </div>
                            <p className='bibliographie_equipe' style={biblio3}>
                              A 40 ans, Julien dispose de 20 ans d’expérience dans l’informatique et le développement.Natif de Marseille, il obtient brillamment un BTS Informatique et une Maîtrise en informatique au Conservatoire National des Arts et Métiers (CNAM).
                              Investi et professionnel, Julien travaille à Marseille avant d’accepter des postes clefs à Toulon, Valence ou encore Paris.En parallèle et à même pas 30 ans, il créé une entreprise de location de jeux vidéos sur internet. Sa première aventure aura duré environ dix ans.
                              Fort de ces expériences enrichissantes, il est alors embauché en tant que responsable de développement et responsable technique. C’est à ce moment-là qu’il rencontre Xavier et qu’ils décident, tous deux, de s’associer pour créer une agence de référencement : Sokeo.
                              Au-delà de son professionnalisme, ses compétences techniques et son expérience, Julien est un humain qui aime le football (l’OM) et le bon vin.
                            </p>
                        </div>
                        
                    </div>
                </div>
              </div>
              <div className="container-fluid cf_equipe ">
                <div className="row row_equipe">
                    <div className="col-lg-12 col1_equipe">
                        <div className="content_equipe">
                          <img src="imagesAnima/equipe/4.png" className="img_equipe img_equipe1" style={image4} alt="" onClick={handleclick4} />                          
                        </div>
                        <div className='contenu_txt_equipe' style={contenuTextEquipe4}>
                            <div className="text_in_content_equipe" style={textInContentEquipe4}>
                              <p className='p_equipe'>Julien Colomb</p>
                              <h2 className='fonction'>CO-FONDATEUR & DEVELOPEUR</h2>
                              <div className="icon_equipe">
                                <i className="fa fa-facebook all_icon_equipe facebook" aria-hidden="true"></i>
                                <i className="fa fa-linkedin all_icon_equipe" aria-hidden="true"></i>
                                <i className="fa fa-phone all_icon_equipe" aria-hidden="true"></i>
                                <i className="fa fa-twitter all_icon_equipe" aria-hidden="true"></i>
                              </div>

                            </div>
                            <p className='bibliographie_equipe' style={biblio4}>
                              A 40 ans, Julien dispose de 20 ans d’expérience dans l’informatique et le développement.Natif de Marseille, il obtient brillamment un BTS Informatique et une Maîtrise en informatique au Conservatoire National des Arts et Métiers (CNAM).
                              Investi et professionnel, Julien travaille à Marseille avant d’accepter des postes clefs à Toulon, Valence ou encore Paris.En parallèle et à même pas 30 ans, il créé une entreprise de location de jeux vidéos sur internet. Sa première aventure aura duré environ dix ans.
                              Fort de ces expériences enrichissantes, il est alors embauché en tant que responsable de développement et responsable technique. C’est à ce moment-là qu’il rencontre Xavier et qu’ils décident, tous deux, de s’associer pour créer une agence de référencement : Sokeo.
                              Au-delà de son professionnalisme, ses compétences techniques et son expérience, Julien est un humain qui aime le football (l’OM) et le bon vin.
                            </p>
                        </div>
                        
                    </div>
                </div>
              </div>
              <div className="container-fluid cf_equipe ">
                <div className="row row_equipe">
                    <div className="col-lg-12 col1_equipe">
                        <div className="content_equipe">
                          <img src="imagesAnima/equipe/5.png" className="img_equipe img_equipe1" style={image5} alt="" onClick={handleclick5} />                          
                        </div>
                        <div className='contenu_txt_equipe' style={contenuTextEquipe5}>
                            <div className="text_in_content_equipe" style={textInContentEquipe5}>
                              <p className='p_equipe'>Julien Colomb</p>
                              <h2 className='fonction'>CO-FONDATEUR & DEVELOPEUR</h2>
                              <div className="icon_equipe">
                                <i className="fa fa-facebook all_icon_equipe facebook" aria-hidden="true"></i>
                                <i className="fa fa-linkedin all_icon_equipe" aria-hidden="true"></i>
                                <i className="fa fa-phone all_icon_equipe" aria-hidden="true"></i>
                                <i className="fa fa-twitter all_icon_equipe" aria-hidden="true"></i>
                              </div>

                            </div>
                            <p className='bibliographie_equipe' style={biblio5}>
                              A 40 ans, Julien dispose de 20 ans d’expérience dans l’informatique et le développement.Natif de Marseille, il obtient brillamment un BTS Informatique et une Maîtrise en informatique au Conservatoire National des Arts et Métiers (CNAM).
                              Investi et professionnel, Julien travaille à Marseille avant d’accepter des postes clefs à Toulon, Valence ou encore Paris.En parallèle et à même pas 30 ans, il créé une entreprise de location de jeux vidéos sur internet. Sa première aventure aura duré environ dix ans.
                              Fort de ces expériences enrichissantes, il est alors embauché en tant que responsable de développement et responsable technique. C’est à ce moment-là qu’il rencontre Xavier et qu’ils décident, tous deux, de s’associer pour créer une agence de référencement : Sokeo.
                              Au-delà de son professionnalisme, ses compétences techniques et son expérience, Julien est un humain qui aime le football (l’OM) et le bon vin.
                            </p>
                        </div>
                        
                    </div>
                </div>
              </div>
             
            </Slider>
          </div>
      {/* </div> */}
    </>
  )
}
