import React from 'react';
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { TiGroup } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { IoMdLogIn } from "react-icons/io";
import { FaSignsPost } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import SidebarItem from './SidebarItem';

const Sidebar = () => (
  <div className='hidden md:block  fixed  left-0 h-screen md:w-64 bg-[#131826]'>
    <div className='p-1  m-1 text-white text text-center mt-10 font-playwrite text-xl'>
      Whisperin Pages
    </div>
  <div className=' text-slate-400  font-bold '>
    <ul className='space-y-4 p-4'>
      <SidebarItem to="/" icon={FaHome} label="Home" />
      <SidebarItem to="/notifications" icon={IoIosNotifications} label="Notification" />
      <SidebarItem to="/bookmark" icon={CiBookmark} label="Bookmark" />
      <SidebarItem to="/communities" icon={TiGroup} label="Communities" />
      <SidebarItem to="/profile" icon={CgProfile} label="Profile" />
      <SidebarItem to="/login" icon={IoMdLogIn} label="Login/Logout" />
      <SidebarItem to="/post" icon={FaSignsPost} label="Post" />
    </ul>
  </div>
</div>
  );


export default Sidebar;
