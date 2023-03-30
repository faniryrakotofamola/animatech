import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from '../Loader/Loader'
import './css/contact.css'
export default function Contact() {

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
        <div className='body_contact'>
          <div className="container-fluid cf_contact">
            <div className="content_contact">
              <div className="row row_contact">
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col6_1_contact">
                  <div className="content_col_contact">
                    <Link to="/" ><img src="imagesAnima/contact/Vector.png" className='arrow_goback' alt="" /></Link>
                    <h1 className='h1_contact' data-aos="fade-right" data-aos-duration="1500" data-aos-offset="50" >Contactez-nous</h1>
                    <div className="form_group">
                      <input type="text" name="" id="" placeholder='Nom *' className='form-control form_control_contact' data-aos="fade-right" data-aos-duration="1500" /> <br />
                      <input type="email" name="" id="" placeholder='Email *' className='form-control form_control_contact' data-aos="fade-left" data-aos-duration="1500" /> <br />
                      <input type="text" name="" id="" placeholder='Objectif *' className='form-control form_control_contact' data-aos="fade-right" data-aos-duration="1500" /> <br />
                      <textarea name="message" id="" cols="30" rows="5" placeholder='Message' className='form-control form_control_contact' data-aos="fade-left" data-aos-duration="1500" ></textarea> <br />
                      <button className="btn-primary form-control btn_contact" data-aos="zoom-in" data-aos-duration="1500" data-aos-offset='0'>Envoyer</button>
                    </div>
                  </div>
                </div>
                <div className=" col-xl-6 col-lg-6 col-md-12 col-sm-12" id='col2_contact'>
                  <div className="trait_violet trait_violet0"></div>
                  <img src="imagesAnima/contact/bg.png" className='img_contact' alt="" />
                  <div className="trait_violet trait_violet1" data-aos="fade-right" data-aos-duration="1500" data-aos-offset='0'>
                    <Link to="#"><img src="imagesAnima/icon/insta.png" alt="" /></Link>
                    <Link to="https://www.facebook.com/people/ANIMA/100064087510294/"><img src="imagesAnima/icon/facebook.png" alt="" /></Link>
                    <Link to="https://www.linkedin.com/in/anima-technologie-b772b5265/"><img src="imagesAnima/icon/linkedIn.png" alt="" /></Link>
                    <Link to="#"><img src="imagesAnima/icon/twitter.png" alt="" /></Link>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
}
