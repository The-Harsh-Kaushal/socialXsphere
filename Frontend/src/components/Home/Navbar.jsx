import React from 'react'

const Navbar = () => {
  return (
    <nav className='justify-between flex mt-3'>
        <div className='pl-9 flex' ><h1 className='kalam-bold text-primary text-2xl'>socio</h1>
        <h1 className=''> X </h1>
        <h1 className='kalam-bold text-2xl'>sphere</h1></div>
        <div className='pr-7'>
          <button className='px-3'>Login</button>
          <button className='px-3'>Sign Up</button>
        </div>
    </nav>
  )
}

export default Navbar