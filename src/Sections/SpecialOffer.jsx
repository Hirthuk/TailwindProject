import React from 'react'
import { offer } from '../assets/images'
import { arrowRight } from '../assets/icons'

const SpecialOffer = () => {
  return (
   <section className='w-full flex flex-col gap-12 lg:flex-row-reverse'>
    <div className='flex flex-col gap-8 w-full'>
      <h1 className='text-4xl text-coral-red font-bold font-palanquin'>Special  <span className='font-montserrat text-black'>Offer</span></h1>
      <div className='flex flex-col gap-3 font-montserrat text-[18px] text-slate-700'>
        <p>
        Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.
        </p>
        <p>
        Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.
        </p>
      </div>
      <div className='flex flex-row w-1/2 md:w-[100%] gap-2 mt-2'>
        <button className='bg-coral-red w-1/2 max-md:w-full  flex items-center justify-center gap-2 h-12 rounded-full text-white font-palanquin font-semibold'>
        <h1>Shop now</h1>
        <img className='w-5 h-5 ' src={arrowRight} alt="arrow" />
        </button>
        <button className='bg-white max-md:w-full w-1/2 flex items-center justify-center border border-gray-950 rounded-full text-[17px]'>Learn more</button>
      </div>
    </div>
    <div>
      <img src={offer} alt="" srcset="" />
    </div>
   </section>
  )
}

export default SpecialOffer
