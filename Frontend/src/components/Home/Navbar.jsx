import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Navbar = () => {
  return (
    <nav className='justify-between flex mt-8  '>
        <div className='pl-9 flex' >
          <h1 className='kalam-bold  text-2xl text-white border-b-0'>socio</h1>
        <h1 className='text-amber-200   text-red-500'> X </h1>
        <h1 className='kalam-bold text-2xl helpfulgray'>sphere</h1></div>
        <div className='pr-7'>
          <button className='px-3 roboto helpfulgray  text-l cursor-pointer '>Login</button>
          <button className='px-3 roboto  helpfulgray text-l cursor-pointer'>Sign Up</button>
        </div>
    </nav>
  )
}

export default Navbar