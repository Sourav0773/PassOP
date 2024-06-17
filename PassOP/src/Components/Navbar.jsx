// eslint-disable-next-line no-unused-vars
import React from 'react';

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white'>
      <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">
        <div className="logo font-bold text-white text-2xl">
          <span className="text-red-500">&lt;</span>
          Pass
          <span className="text-red-500">OP/&gt;</span>
        </div>
        <ul>
          {/* <li className='flex gap-4'>
            <a className='hover:font-bold' href="/">Home</a>
            <a className='hover:font-bold' href="#">About</a>
            <a className='hover:font-bold' href="#">Contact</a>
          </li> */}
        </ul>
        <a href="https://github.com/Sourav0773" target="_blank" rel="noopener noreferrer">
          <button className='text-white bg-red-700 my-5 rounded-full flex justify-between items-center ring-white ring-1'>
            <img className="invert w-10 p-1" src="icons/github.svg" alt="Github" />
            <span className='font-bold px-2'>GitHub</span>
          </button>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;

