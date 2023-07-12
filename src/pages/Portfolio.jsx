import React from 'react'
import PortfolioCard from '../components/PortfolioCard'
import Testimonial from '../components/Testimonial'

const Portfolio = () => {
  return (
    <section id='portfolio' className='data-section'>
        <PortfolioCard/>
        <Testimonial/>
    </section>
  )
}

export default Portfolio