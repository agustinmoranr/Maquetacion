import React from 'react'
import mastercardIcon from '../assets/mastercard-icon.png'
import visaIcon from '../assets/visa-icon.png'
import './styles/Contact.css'

const Contact = () => {
  return (
    <figure className="contact global-padding">
      <div className="contact__container">
        <div className="contact__container--phone">
          <h1>CONTÁCTANOS</h1>
          <div className="contact__container--phone-icon">
            <i className="material-icons">local_phone</i>
            <em>(555) 555 5555</em>
          </div>
        </div>
        <div className="contact__container--about">
          <h1>CONÓCENOS</h1>
          <ul>
            <li>Acerca de nosotros</li>
            <li>Nuestro equipo</li>
            <li>Nuestros servicios</li>
            <li>Responsabilidad social</li>
            <li>Atención a provedores</li>
          </ul>
        </div>
        <div className="contact__container--payments">
          <h1>COMPRA SEGURA</h1>
          <em>Aceptamos tarjetas de crédito, débito, prepago y pago en efectivo.</em>
          <div className="contact__container--payments-icons">
            <img src={mastercardIcon} alt="Mastercard" />
            <img src={visaIcon} alt="Visa" />
          </div>
        </div>
      </div>
    </figure>
  )
}

export default Contact
