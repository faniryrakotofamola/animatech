import React from 'react';
import Slider from "react-slick";
// import "../avisclient/css/avisclient.css";
import Navbar from '../includes/Navbar';
import "./css/equipe.css";

export default function Equipe() {
  // const [state , setState] = useState({
  //   image: require("./equipe/bg.png")
  // })

  // const style ={
  //   backgroundImage:`url(${state.image})`,
  //   width:"100%", 
  //   height:'80vh',
  //   backgroundRepeat : "no-repeat",
  //   backgroundPosition: "center",
  //   backgroundSize: "100% 80vh",

  
  // }
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
      // responsive: [
      //   {
      //     breakpoint: 992,
      //     settings: {
      //       slidesToShow: 3,
      //       slidesToScroll: 3,
      //       infinite: true,
      //       dots: true
      //     }
      //   },
      //   {
      //     breakpoint: 768,
      //     settings: {
      //       slidesToShow: 2,
      //       slidesToScroll: 2,
      //       initialSlide: 1
      //     }
      //   },
      //   {
      //     breakpoint: 576,
      //     settings: {
      //       slidesToShow: 1,
      //       slidesToScroll: 1,
      //       initialSlide: 2
      //     }
      //   },
      //   {
      //     breakpoint: 480,
      //     settings: {
      //       slidesToShow: 1,
      //       slidesToScroll: 1,
      //       dots: false
      //     }
      //   }
      // ]
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
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

  // console.log(state);
  return (
    
    <>
      <Navbar />
      {/* <div className="container-fluid cf_equipe"> */}
          {/* <div className="img">
            <h1 className='h1_equipe'>Julien Colomb</h1>
            <img src={state.image} alt="" className='image1' />
          </div> */}
          <div className='container-fluid slick_equipe'>
            <Slider {...settings}>
              <div className="container-fluid cf_equipe">
                <div className="row">
                    <div className="col-lg-12 col1_equipe">
                        <div className="content_equipe">
                          <img src="imagesAnima/realisation/2.png" className="img_equipe" alt="" />                          
                        </div>
                    </div>
                </div>
              </div>
              <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 col1_equipe">
                        <div className="content_equipe">
                          <img src="imagesAnima/realisation/2.png" className="img_equipe" alt="" />                          
                        </div>
                    </div>
                </div>
              </div>
              <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 col1_equipe">
                        <div className="content_equipe">
                          <img src="imagesAnima/realisation/2.png" className="img_equipe" alt="" />                          
                        </div>
                    </div>
                </div>
              </div>
              <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 col1_equipe">
                        <div className="content_equipe">
                          <img src="imagesAnima/realisation/2.png" className="img_equipe" alt="" />                          
                        </div>
                    </div>
                </div>
              </div>
              <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 col1_equipe">
                        <div className="content_equipe">
                          <img src="imagesAnima/realisation/2.png" className="img_equipe" alt="" />                          
                        </div>
                    </div>
                </div>
              </div>
              <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 col1_equipe">
                        <div className="content_equipe">
                          <img src="imagesAnima/realisation/2.png" className="img_equipe" alt="" />                          
                        </div>
                    </div>
                </div>
              </div>
              
              
              
              {/* <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div> */}
            </Slider>
          </div>
      {/* </div> */}
    </>
  )
}
