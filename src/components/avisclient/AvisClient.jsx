import React, { Component } from "react";
import Slider from "react-slick";
import "./css/avisclient.css";

export default class AvisClient extends Component {
  render() {
    function SampleNextArrow(props) {
      const {onClick } = props;
      return (
        <div className="arrow_right" onClick={onClick} >
          <i className="fa fa-arrow-right" aria-hidden="true"></i>
        </div>
      );
    }

    function SamplePrevArrow(props) {
      const {onClick } = props;
      return (
        <div className="arrow_left" onClick={onClick} >
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
      autoplay: true,
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
      )
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 col1_avis">
                    <div className="content_avis">
                      <img src="imagesAnima/realisation/2.png" className="img_avis" alt="" />
                      <h2 className="h2_avis">Pierre Ratokodimimanana</h2>
                      <div className="comment_avis">
                        <p className="span_avis">
                          <i className="fa fa-quote-left span1_avis" aria-hidden="true"></i><br />
                        </p>
                        <p className="p_h2">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at dictum ex. Duis pulvinar, urna et consectetur vulputate, nisi magna tempor diam, eget luctus nisi ex non erat. Duis pulvinar enim<br />
                        </p>
                        <p className="span_avis span_avis1">
                          <i className="fa fa-quote-right span1_avis" aria-hidden="true"></i>
                        </p>
                      </div>
                    </div>
                </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 col1_avis">
                    <div className="content_avis">
                      <img src="imagesAnima/realisation/2.png" className="img_avis" alt="" />
                      <h2 className="h2_avis">Pierre Ratokodimimanana</h2>
                      <div className="comment_avis">
                        <p className="span_avis">
                          <i className="fa fa-quote-left span1_avis" aria-hidden="true"></i><br />
                        </p>
                        <p className="p_h2">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at dictum ex. Duis pulvinar, urna et consectetur vulputate, nisi magna tempor diam, eget luctus nisi ex non erat. Duis pulvinar enim<br />
                        </p>
                        <p className="span_avis span_avis1">
                          <i className="fa fa-quote-right span1_avis" aria-hidden="true"></i>
                        </p>
                      </div>
                    </div>
                </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 col1_avis">
                    <div className="content_avis">
                      <img src="imagesAnima/realisation/2.png" className="img_avis" alt="" />
                      <h2 className="h2_avis">Pierre Ratokodimimanana</h2>
                      <div className="comment_avis">
                        <p className="span_avis">
                          <i className="fa fa-quote-left span1_avis" aria-hidden="true"></i><br />
                        </p>
                        <p className="p_h2">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at dictum ex. Duis pulvinar, urna et consectetur vulputate, nisi magna tempor diam, eget luctus nisi ex non erat. Duis pulvinar enim<br />
                        </p>
                        <p className="span_avis span_avis1">
                          <i className="fa fa-quote-right span1_avis" aria-hidden="true"></i>
                        </p>
                      </div>
                    </div>
                </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 col1_avis">
                    <div className="content_avis">
                      <img src="imagesAnima/realisation/2.png" className="img_avis" alt="" />
                      <h2 className="h2_avis">Pierre Ratokodimimanana</h2>
                      <div className="comment_avis">
                        <p className="span_avis">
                          <i className="fa fa-quote-left span1_avis" aria-hidden="true"></i><br />
                        </p>
                        <p className="p_h2">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at dictum ex. Duis pulvinar, urna et consectetur vulputate, nisi magna tempor diam, eget luctus nisi ex non erat. Duis pulvinar enim<br />
                        </p>
                        <p className="span_avis span_avis1">
                          <i className="fa fa-quote-right span1_avis" aria-hidden="true"></i>
                        </p>
                      </div>
                    </div>
                </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 col1_avis">
                    <div className="content_avis">
                      <img src="imagesAnima/realisation/2.png" className="img_avis" alt="" />
                      <h2 className="h2_avis">Pierre Ratokodimimanana</h2>
                      <div className="comment_avis">
                        <p className="span_avis">
                          <i className="fa fa-quote-left span1_avis" aria-hidden="true"></i><br />
                        </p>
                        <p className="p_h2">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at dictum ex. Duis pulvinar, urna et consectetur vulputate, nisi magna tempor diam, eget luctus nisi ex non erat. Duis pulvinar enim<br />
                        </p>
                        <p className="span_avis span_avis1">
                          <i className="fa fa-quote-right span1_avis" aria-hidden="true"></i>
                        </p>
                      </div>
                    </div>
                </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 col1_avis">
                    <div className="content_avis">
                      <img src="imagesAnima/realisation/2.png" className="img_avis" alt="" />
                      <h2 className="h2_avis">Pierre Ratokodimimanana</h2>
                      <div className="comment_avis">
                        <p className="span_avis">
                          <i className="fa fa-quote-left span1_avis" aria-hidden="true"></i><br />
                        </p>
                        <p className="p_h2">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at dictum ex. Duis pulvinar, urna et consectetur vulputate, nisi magna tempor diam, eget luctus nisi ex non erat. Duis pulvinar enim<br />
                        </p>
                        <p className="span_avis span_avis1">
                          <i className="fa fa-quote-right span1_avis" aria-hidden="true"></i>
                        </p>
                      </div>
                    </div>
                </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 col1_avis">
                    <div className="content_avis">
                      <img src="imagesAnima/realisation/2.png" className="img_avis" alt="" />
                      <h2 className="h2_avis">Pierre Ratokodimimanana</h2>
                      <div className="comment_avis">
                        <p className="span_avis">
                          <i className="fa fa-quote-left span1_avis" aria-hidden="true"></i><br />
                        </p>
                        <p className="p_h2">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at dictum ex. Duis pulvinar, urna et consectetur vulputate, nisi magna tempor diam, eget luctus nisi ex non erat. Duis pulvinar enim<br />
                        </p>
                        <p className="span_avis span_avis1">
                          <i className="fa fa-quote-right span1_avis" aria-hidden="true"></i>
                        </p>
                      </div>
                    </div>
                </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 col1_avis">
                    <div className="content_avis">
                      <img src="imagesAnima/realisation/2.png" className="img_avis" alt="" />
                      <h2 className="h2_avis">Pierre Ratokodimimanana</h2>
                      <div className="comment_avis">
                        <p className="span_avis">
                          <i className="fa fa-quote-left span1_avis" aria-hidden="true"></i><br />
                        </p>
                        <p className="p_h2">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at dictum ex. Duis pulvinar, urna et consectetur vulputate, nisi magna tempor diam, eget luctus nisi ex non erat. Duis pulvinar enim<br />
                        </p>
                        <p className="span_avis span_avis1">
                          <i className="fa fa-quote-right span1_avis" aria-hidden="true"></i>
                        </p>
                      </div>
                    </div>
                </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 col1_avis">
                    <div className="content_avis">
                      <img src="imagesAnima/realisation/2.png" className="img_avis" alt="" />
                      <h2 className="h2_avis">Pierre Ratokodimimanana</h2>
                      <div className="comment_avis">
                        <p className="span_avis">
                          <i className="fa fa-quote-left span1_avis" aria-hidden="true"></i><br />
                        </p>
                        <p className="p_h2">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at dictum ex. Duis pulvinar, urna et consectetur vulputate, nisi magna tempor diam, eget luctus nisi ex non erat. Duis pulvinar enim<br />
                        </p>
                        <p className="span_avis span_avis1">
                          <i className="fa fa-quote-right span1_avis" aria-hidden="true"></i>
                        </p>
                      </div>
                    </div>
                </div>
            </div>
          </div>
          
          
          
        </Slider>
      </div>
    );
  }
}