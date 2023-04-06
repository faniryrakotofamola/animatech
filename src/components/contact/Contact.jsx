import emailjs from "emailjs-com"
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from '../Loader/Loader'
import './css/contact.css'
export default function Contact() {

  const [Load, setLoad] = useState(true)
  const [status, setStatus] = useState("Envoyer")

  useEffect(() => {
    emailjs.init()
    setTimeout(() => {
      setLoad(false)
    }, 2000)
  })

  function SendEmail(e) {
    e.preventDefault();
    emailjs.sendForm("service_n9fnh0b", "template_dy434fl", e.target, "8TSuI_4oG26uJJ5iS")
      .then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
    e.target.reset()
  }

  // function SendEMail(e) {
  //   e.preventDefault();
  //   console.log(e.target)

  //   emailjs.send('gmail', "service_n9fnh0b", "template_dy434fl", e.target)
  //     .then((result) => {
  //       console.log(result.text);
  //     }, (error) => {
  //       console.log(error.text);
  //     });

  //   e.target.reset()
  // }
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

                    {/* ***** FORM ******  */}

                    <h1 className='h1_contact' data-aos="fade-right" data-aos-duration="1500" data-aos-offset="50" >Contactez-nous</h1>
                    <form action="" method='post' onSubmit={SendEmail}  >
                      <div className="form_group">
                        <input type="text" name="nom" id="" placeholder='Nom *' className='form-control form_control_contact' data-aos="fade-right" data-aos-duration="1500" required /> <br />
                        <input type="email" name="email" id="" placeholder='Email *' className='form-control form_control_contact' data-aos="fade-left" data-aos-duration="1500" required /> <br />
                        <input type="text" name="objectif" id="" placeholder='Objectif *' className='form-control form_control_contact' data-aos="fade-right" data-aos-duration="1500" required /> <br />
                        <textarea name="message" id="message" cols="30" rows="5" placeholder='Message' className='form-control form_control_contact' data-aos="fade-left" data-aos-duration="1500" required></textarea> <br />
                        <button type='submit' className="btn-primary form-control btn_contact" data-aos="zoom-in" data-aos-duration="1500" data-aos-offset='0'>{status}</button>
                      </div>
                    </form>

                    {/* ********* FIN FORM ********** */}
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
