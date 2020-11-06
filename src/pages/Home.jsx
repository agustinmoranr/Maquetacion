import React from 'react'
import Contact from '../components/Contact'
import GridSection from '../components/GridSection'
import GridSectionItem from '../components/GridSectionItem'
import Navbar from '../components/Navbar'
import Layout from '../components/layout'

import flier from '../assets/flier.png'
import Hammer from '../assets/Hammer-item.png'
import warrantyArticle from '../assets/warranty-article.png'
import Truper from '../assets/Truper.png'
import coplex from '../assets/coplex.png'
import phillips from '../assets/phillips.png'
import teka from '../assets/teka.png'
import steren from '../assets/steren.png'
import './styles/Home.css'
import './styles/index.css'

const Home = () => {
  return (
    <>
      <Layout>

      <Navbar />
      <aside className="Flier">
        <div className="Flier__img">
          <img src={flier} alt="" />
        </div>
      </aside>

      <GridSection title="Nuevos Productos">
        <GridSectionItem title="Martillo Truper" price="$205.68" img={Hammer}/>
        <GridSectionItem title="Martillo Truper" price="$205.68" img={Hammer}/>
        <GridSectionItem title="Martillo Truper" price="$205.68" img={Hammer}/>
        <GridSectionItem title="Martillo Truper" price="$205.68" img={Hammer}/>
        <GridSectionItem title="Martillo Truper" price="$205.68" img={Hammer}/>
        <GridSectionItem title="Martillo Truper" price="$205.68" img={Hammer}/>
      </GridSection>

      <article className="warrantyArticle">
        <div className="warrantyArticle__container global-padding">
          <img src={warrantyArticle} alt="dssda" />
        </div>
      </article>

      <GridSection title="Más vendidos">
        <GridSectionItem title="Martillo Truper" price="$205.68" img={Hammer}/>
        <GridSectionItem title="Martillo Truper" price="$205.68" img={Hammer}/>
        <GridSectionItem title="Martillo Truper" price="$205.68" img={Hammer}/>
        <GridSectionItem title="Martillo Truper" price="$205.68" img={Hammer}/>
        <GridSectionItem title="Martillo Truper" price="$205.68" img={Hammer}/>
        <GridSectionItem title="Martillo Truper" price="$205.68" img={Hammer}/>
      </GridSection>

      <article className="partners">
        <ul className="partners__container global-padding">
          <li><img src={Truper} alt="dssda" /></li>
          <li><img src={phillips} alt="dssda" /></li>
          <li><img src={coplex} alt="dssda" /></li>
          <li><img src={teka} alt="dssda" /></li>
          <li><img src={steren} alt="dssda" /></li>
        </ul>
      </article>

      <Contact />

      </Layout>
    </>
  )
}

export default Home
