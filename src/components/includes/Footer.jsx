import React from 'react'
import { Link } from 'react-router-dom'
import "./css/Footer.css"

export default function Footer() {
  return (
    <div className="container-fluid cf_footer">
      <div className="row">
        <div className="col-lg-6">
          <div className="content_footer">
            <h1 className="h1_footer">
              JOIGNEZ-NOTRE ÉQUIPE
            </h1>
            <p className="p_footer">
              ANIMA Technologie est une entreprise de développement informatique qui propose de solution tel que le développement web, développement mobile et UI/UX design
            </p>
            <input type="email" className='input_email_footer' placeholder='Entrer votre adresse e-mail' /><button className='btn_email_footer'>E-mail</button>
          </div>
          <div className="reseau_sociaux_footer">
            <img src="imagesAnima/icon/insta.png" alt="" />
            <img src="imagesAnima/icon/facebook.png" alt="" />
            <img src="imagesAnima/icon/linkedIn.png" alt="" />
            <img src="imagesAnima/icon/twitter.png" alt="" />
          </div>
        </div>
        <div className="col-lg-6 col_footer">
          <div className="logo_footer">
            <img src="imagesAnima/LogoFooter.png" className='img_footer' alt="" />
          </div>
          <div className="telephone">
            <span className='span_footer_numero'>
              <i className="fa fa-phone mail_and_phone" aria-hidden="true"></i>
              <Link to="tel:+261 34 00 000 00" className='appel'>+261 34 00 000 00</Link>
              /
              <Link to="tel:+261 33 00 000 00" className='appel'>+261 33 00 000 00</Link>

            </span>
            <span className='span_footer_email'>
              <i className="fa fa-envelope mail_and_phone" aria-hidden="true"></i>
              anima.gascar@gmail.com
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
