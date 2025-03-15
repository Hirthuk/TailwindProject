import React from 'react'
import { headerLogo } from '../assets/images'
import { navLinks } from "../constantsFolder/index"
import { hamburger } from '../assets/icons'

const Nav = () => {
  return (
    <header className='padding-x py-10 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img src={headerLogo} alt="Logo" width={129} height={29} />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((items) => (
            <li key={items.label}>
              <a className='font-montserrat leading-normal text-lg text-slate-600' href={items.href}>
                {items.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='hidden max-lg:block'>
         <img height={25} width={25} src={hamburger} alt="Logo" />
        </div>
      </nav>
    </header>

  )
}

export default Nav
