import React from 'react'
import './styles/Footer.css'

const Footer = () => {
  return (
    <footer className="Footer global-padding">
      <em>All Rights Reservered</em>
      <div className="Footer__agreements">
        <a href="/">Términos y Condiciones</a>
        <a href="/">Aviso de Privacidad</a>
      </div>
    </footer>
  )
}

export default Footer
