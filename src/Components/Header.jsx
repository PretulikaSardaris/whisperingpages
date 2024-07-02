import React, { useEffect, useState } from 'react';
import { FaHome } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import { FaAmazon } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { TiMessages } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`flex flex-row justify-between z-20 items-center gap-5 w-full h-14 transition-all duration-300 ${isScrolled ? 'fixed top-0 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900' : 'bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900'}`}>
      {/* Logo and Searchbar */}
      <div className='flex items-center space-x-2 ml-4'>
       <Link to="/"> <img src="https://st2.depositphotos.com/3573725/6541/v/950/depositphotos_65413443-stock-illustration-book-logo.jpg" className='w-12 h-12 rounded-full' alt="books" /></Link>
        <input type="text" placeholder='Search for books' className='w-48 p-2 rounded-3xl bg-gray-200 text-gray-900 focus:outline-none' />
      </div>

      {/* Navlinks */}
      <div className='flex'>
        <ul className='flex flex-row justify-center items-center gap-12 mr-4'>
          <li><FaHome color='gray' className='hover:shadow-glow' size={30} /></li>
          <li><ImBooks color='gray' className='hover:shadow-glow' size={30} /></li>
          <li><FaAmazon color='gray' className='hover:shadow-glow' size={30} /></li>
        </ul>
      </div>

      {/* Notification */}
      <div>
        <ul className='flex justify-end items-center gap-12 mr-4'>
          <li><IoIosNotifications color='gray' className='hover:shadow-glow' size={30} /></li>
          <li><TiMessages color='gray' className='hover:shadow-glow' size={30} /></li>
         <Link to="/login"> <li><CgProfile color='gray' className='hover:shadow-glow' size={30} /></li></Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
