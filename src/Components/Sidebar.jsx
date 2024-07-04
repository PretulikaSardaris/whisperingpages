import React from 'react';
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { TiMessages } from "react-icons/ti";
import { TiGroup } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { IoMdLogIn } from "react-icons/io";
import { FaSignsPost } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='hidden md:block fixed top-15 left-0 h-screen w-28 md:w-64 bg-zinc-900 text-gray-300'>
      <div className='p-4 m-5'>
        <ul className='space-y-4'>
          <li className='flex items-center space-x-2 cursor-pointer group'>
            <FaHome color='gray' size={30} />
            <span className='hidden md:block group-hover:block'>Home</span>
          </li>
          <li className='flex items-center space-x-2 cursor-pointer group'>
            <FaSearch color='gray' size={30} />
            <span className='hidden md:block group-hover:block'>Search</span>
          </li>
          <li className='flex items-center space-x-2 cursor-pointer group'>
            <IoIosNotifications color='gray' size={30} />
            <span className='hidden md:block group-hover:block'>Notification</span>
          </li>
         
          <li className='flex items-center space-x-2 cursor-pointer group'>
            <CiBookmark color='gray' size={30} />
            <span className='hidden md:block group-hover:block'>Bookmark</span>
          </li>
          <li className='flex items-center space-x-2 cursor-pointer group'>
            <TiGroup color='gray' size={30} />
            <span className='hidden md:block group-hover:block'>Communities</span>
          </li>
          <Link to="/profile"> <li className='flex items-center space-x-2 cursor-pointer group'>
            
            <CgProfile color='gray' size={30} />
            <span className='hidden md:block group-hover:block'>Profile</span>
          </li></Link>
          <li className='flex items-center space-x-2 cursor-pointer group'>
            <IoMdLogIn color='gray' size={30} />
            <span className='hidden md:block group-hover:block'>Login/Logout</span>
          </li>
          <li className='flex items-center space-x-2 cursor-pointer group'>
            <FaSignsPost color='gray' size={30} />
            <span className='hidden md:block group-hover:block'>Post</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
