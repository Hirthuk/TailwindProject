import React from 'react'
import { services } from '../constants'
const Services = () => {
  return (
    <section>
      <div className='flex flex-1 service-box max-lg:service-box place-items-center gap-10  border-gray-500 rounded-2xl'>
        {services.map((item,index) => (
          <div key={index} id={index} className=' grid grid-cols-1 px-12 py-20 mt-10 border border-gray-200 rounded-2xl shadow-2xl gap-3'>
            <img className='bg-coral-red h-10 p-2 rounded-full' src={item.imgURL} alt="ServiceImage"/>
            <h1 className='text-3xl max-lg:text-2xl font-bold font-serif'>{item.label}</h1>
            <p className='text-xl'>{item.subtext}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
