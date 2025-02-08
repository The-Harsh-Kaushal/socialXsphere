import React from 'react'
import Navbar from './navbar'
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { faBan } from "@fortawesome/free-solid-svg-icons";
const Home = () => {
  return (
    <div className='flex flex-col h-screen w-full'> 
        <Navbar/>

       <div className='flex flex-1'>
      <div  className='flex w-[6%] '>

      </div>

      {/* main hero section */}
      <div className="h-full flex flex-1 flex-col justify-end items-center text-white pb-25 cormorant-unicase-light  ">
  
  {/* Div 1 - "Socio Sphere" */}
  <div className="text-center">
    <h1 className="text-8xl font-bold ">Socio<span className='helpfulgray'> Sphere</span></h1>
  </div>

  {/* Div 2 - Two child divs inside */}
  <div className="flex justify-center items-center w-full max-w-4xl mt-4">
    {/* Div 2.1 - Left */}
    <div className="w-[80%] text-center">
      <p className="text-7xl font-semibold">Where Connections</p>
    </div>
    {/* Div 2.2 - Right */}
    <div className="w-[20%] text-center">
      <p className="text-l text-gray-400">
        Real-time conversations,<br/> seamless experiences
      </p>
    </div>
  </div>

  {/* Div 3 - "Shape the Future" */}
  <div className="text-center mt-4">
    <h2 className="text-6xl font-semibold">Shape the Future</h2>
  </div>

</div>



<div className="flex w-[6%] justify-center items-end h-full">
  <span className='mb-11 cursor-pointer'>
    <FontAwesomeIcon icon={faBan} size="3x" color="gray" />
  </span>
</div>




       </div>
    </div>
  )
}
export default Home