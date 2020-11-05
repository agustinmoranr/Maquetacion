import React from 'react'
import './styles/GridSection.css'

const GridSection = ({ children, title }) => {
  return (
    <section className="GridSection global-padding">
      <div className="GridSection__title">
        <h1>{title}</h1>
      </div>
      <div className="GridSection__container">
        {children}
      </div>
      <div className="GridSection__forward">
        <a href="/" >
          <h2>Ver más</h2>
          <i className="material-icons">arrow_forward</i>
        </a>
      </div>
    </section>
  )
}

export default GridSection
