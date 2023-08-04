import React, { useState, useEffect } from 'react';
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link, ScrollLink } from 'react-scroll';

const Header = () => {
  const links = [
    { name: 'Home', link: 'home' },
    { name: 'About me', link: 'about' },
    { name: 'Projects', link: 'home' },
    { name: 'Contact me', link: 'contact' },
  ];

  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false); // Close the mobile menu when the component mounts
  }, []);

  return (
    <div className='w-full max-w-7xl'>
      <div className='md:flex items-center justify-between py-4 md:px-10 px-7'>
        {/* img */}
        <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
          <span className='text-primary text-white'>Preston Mayieka</span>
        </div>

        {/* md: mobile icons */}
        <div
          onClick={() => setOpen(!open)}
          className='w-7 h-7 right-8 top-6 cursor-pointer md:hidden text-white absolute'
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>

        {/* navbar */}
        <ul
          className={`sticky md:flex md:items-center md:pd-0 md:static md:z-auto z-10 left-0 w-full md:w-auto mt-4 md:pl-0 pl-9 bg-slate-400 sm:bg-transparent transition-all duration-500 ease-in-out ${
            open ? 'top-12' : 'top-0'
          }`}
        >
          {links.map((item, index) => (
            <li key={index} className='md:ml-8 md:my-0 my:7 font-semibold'>
              <Link
                to={item.link}
                activeClass='active'
                smooth={true}
                spy={true}
                className='text-white transition-all duration-500 hover:text-primary'
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
