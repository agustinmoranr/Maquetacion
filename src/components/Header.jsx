import React from 'react'
import logo from '../assets/logo.png'
import './styles/Header.css'
import '../pages/styles/index.css'

const Header = () => {
  return (
    <header className="header global-padding">
      <nav className="header__container">
        <span className="header__container--img">
          <a href="/"><img src={logo} alt="img" /></a>
        </span>
        <span className="header__container--search">
          <input type="text" placeholder="Buscar producto..." />
          <i className="material-icons">search</i>
        </span>
        <ul className="header__container--options">
          <li className="header__container--options-item">
            <a className="options-item-reference" href="">
              <i className="material-icons">account_circle</i>
              <p>Mi cuenta</p>
            </a>
          </li>
          <li className="header__container--options-item">
            <a className="options-item-reference" href="">
              <i className="material-icons">favorite</i>
              <p>Mis Favoritos</p>
            </a>
          </li>
          <li className="header__container--options-item">
            <a className="options-item-reference" href="">
              <i className="material-icons">publish</i>
              <p>Cargar Pedido Masivo</p>
            </a>
          </li>
          <li className="header__container--options-item">
          <a className="options-item-reference" href="">
            <i className="material-icons">shopping_cart</i>
            <p>Mi carrito</p>
          </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
