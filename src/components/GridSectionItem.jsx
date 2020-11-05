import React from 'react'
import './styles/GridSectionItem.css'

const GridSectionItem = ( { title, img, price } ) => {
  return (
    <div className="SectionItem item-padding">
      <div className="SectionItem__tool">
        <div className="SectionItem__img">
          <button className="SectionItem__details--button"><i className="material-icons">favorite_border</i></button>
          <img src={img} alt="" />
        </div>
        <h2>{title}</h2>
      </div>
      <div className="SectionItem__details">
        <em>{price}</em>
        <div className="SectionItem__details--cart">
          <button type="button">
            <i className="material-icons">shopping_cart</i>
            <em>Agregar al carrito</em>
          </button>
        </div>
      </div>
    </div>
  )
}

export default GridSectionItem
