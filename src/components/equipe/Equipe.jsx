import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import Footer from "../includes/Footer";
import Navbar from "../includes/Navbar";
import "./css/equipe.css";
import data from "./dataEquipe";


const Equipe = () => {
  // console.log(data);

  const [Popup, setPopup] = useState({});
  const [View, setView] = useState(false);
  const [Load, setLoad] = useState(true)

  // console.log(Popup);


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
    : (
      <>
        <Navbar />
        <div className="container-fluid cf_exemple">
          <div className="row">
            {data.map((datas, index) => (
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col_equipe" key={datas.id} >
                <div className="content_equipe">
                  <img src={datas.photo} alt="" className="image_equipe" data-aos="fade-down" data-aos-duration="1500" />
                  <i className="fa fa-arrow-right show_details_popup" data-aos="fade-up" data-aos-duration="1500" onClick={() => { setView(true); setPopup(datas) }}></i>
                  <h1 className="h1_nom_equipe">{datas.nom} </h1>
                  <p className="p_fonction_equipe">{datas.fonction}</p>
                </div>
              </div>
            ))}
          </div>


        </div>
        {View &&
          <div className=" container-fluid popup">
            <div className="content_popup">
              <button className="ml-auto btn_close_popup" data-aos="fade-right" onClick={() => setView(false)}>
                <i className="fa fa-close"></i>
              </button>
              <div className="content_popup_equipe">
                <div className="row row_popup">
                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                    <img src={Popup.photo} alt="" className="img_popup" data-aos="fade-right" data-aos-duration="1500" />
                  </div>
                  <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12">
                    <h1 className="h1_popup" data-aos="fade-down" data-aos-duration="1500">{Popup.nom_complet}</h1>
                    <h2 className="h2_popup" data-aos="fade-up" data-aos-duration="1500">{Popup.fonction}</h2>
                    <p className="p_popup" data-aos="fade-left" data-aos-duration="1500">{Popup.bio}</p>
                  </div>
                </div>
              </div>
            </div>
          </div >
        }
        <Footer />
      </>


    );
};

export default Equipe;
