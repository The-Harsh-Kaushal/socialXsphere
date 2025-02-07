import React from 'react'

const Navbar = () => {
  return (
    <nav className='justify-between flex mt-3  '>
        <div className='pl-9 flex' >
          <h1 className='kalam-bold  text-2xl text-white border-b-0'>socio</h1>
        <h1 className='text-amber-200 rock-3d-regular text-3xl'> X </h1>
        <h1 className='kalam-bold text-2xl helpfulgray'>sphere</h1></div>
        <div className='pr-7'>
          <button className='px-3 roboto helpfulgray  text-l '>Login</button>
          <button className='px-3 roboto  helpfulgray text-l'>Sign Up</button>
        </div>
    </nav>
  )
}

export default Navbar