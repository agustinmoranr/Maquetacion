import React from 'react'
import './styles/Navbar.css'

const Navbar = () => {
  return (
    <menu className="Navbar global-padding">
      <nav className="Navbar__container">
        <article>
          <select className="Navbar__container--options" name="Departamentos" id="">
            <option value="">DEPARTAMENTOS</option>
            <option value="">Herramientas</option>
            <option value="">Herramientas</option>
            <option value="">Herramientas</option>
          </select>
          <select className="Navbar__container--options" name="" id="">
            <option value="">MARCAS</option>
            <option value="">Trupper</option>
            <option value="">Trupper</option>
            <option value="">Trupper</option>
          </select>
        </article>
        <span className="Navbar__container--offers">
          <a href="/" className="offers-label">
            <h2 className="offers-label-title">OFERTAS</h2>
            <i className="material-icons">local_offer</i>
          </a>
        </span>
      </nav>
    </menu>
  )
}

export default Navbar
