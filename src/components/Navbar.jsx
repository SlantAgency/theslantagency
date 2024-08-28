import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='fixed z-[999] w-full px-4 lg:px-44 sm:px-18 py-4 font-["Neue Montreal"] flex justify-between items-center border bg-black'>
      <div>
        <img className='w-32 3xl:ml-20 3xl:w-40' src="https://i.ibb.co/t4shy0b/navlo.jpg" alt="" />
      </div>
      <div className='lg:hidden'>
        <button onClick={toggleMenu} className='text-white'>
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </div>
      <div className={`fixed top-0 left-0 h-full bg-black transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:static lg:transform-none lg:flex gap-10`}>
        <div className='flex flex-col gap-10 text-center mx-4 lgLmx-0 pr-4 lg:pr-0 py-6 lg:py-0 text-2xl lg:text-lg lg:flex-row'>
        <a href="#home" className='text-md capitalize font-semibold scale-100 hover:scale-110 transition duration-300 cursor-pointer p-4 sm:p-0 3xl:text-xl'>
            Home
          </a>
          <a href="#about" className='text-md capitalize font-semibold scale-100 hover:scale-110 transition duration-300 cursor-pointer p-4 sm:p-0 3xl:text-xl'>
            About
          </a>
          <a href="#services" className='text-md capitalize font-semibold scale-100 hover:scale-110 transition duration-300 cursor-pointer p-4 sm:p-0 3xl:text-xl'>
            Services
          </a>
          <a href="#contact" className='text-md capitalize font-semibold scale-100 hover:scale-110 transition duration-300 cursor-pointer p-4 sm:p-0 3xl:text-xl'>
            Contact
          </a>
          <a href="https://slantagency.github.io/faqs/" className='text-md capitalize font-semibold scale-100 hover:scale-110 transition duration-300 cursor-pointer p-4 sm:p-0 3xl:text-xl'>
            Faqs
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

    // <div className='fixed z-[999] w-full px-4 lg:px-44 sm:px-18 py-4 font-["Neue Montreal"] flex justify-between items-center border bg-black'>
    //   <div className='text-xl tracking-tighter font-["Founders Grotesk semibold"] font-semibold'>The Slet Agency</div>
    //   <div className='links flex gap-10'>
    //     {["Home", "About", "Services", "Contact"].map((item, index)=>(
    //       <a key={index} className={`text-md capitalize font-semibold scale-100 hover:scale-110 transition duration-300 cursor-pointer`}>{item}</a>
    //     ))}
    //   </div>
    // </div>