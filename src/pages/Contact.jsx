import React from 'react'
import ContactCard from '../components/ContactCard'
import ContactInfo from '../components/ContactInfo'

const Contact = () => {
  return (
    <section className='contactBg py-[100px] bg-secondary data-section' id='contact'>
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[50px]">
            <ContactCard/>
            <ContactInfo/>
        </div>
    </section>
  )
}

export default Contact