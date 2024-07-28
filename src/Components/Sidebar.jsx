import React from 'react';
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoBookmark } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { TiGroup } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { IoMdLogIn } from "react-icons/io";
import { FaSignsPost } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import SidebarItem from './SidebarItem';




const Sidebar = ({ toggleNotifications}) => (
  <div className='hidden md:block  fixed  left-0 h-screen md:w-64' >
    <div className='p-1  m-1 text-black text text-center mt-10 font-playwrite text-xl'>
      Whisperin Pages
    </div>
  <div className=' text-black  font-semibold text-xl'>
    <ul className='space-y-4 p-4'>
      <SidebarItem to="/" icon={FaHome} label="Home" />
      <SidebarItem  onClick = {toggleNotifications} icon={IoIosNotifications} label="Notification" />
      <SidebarItem to="/bookmark" icon={IoBookmark } label="Bookmark" />
      <SidebarItem to="/communities" icon={TiGroup} label="Communities" />
      <SidebarItem to="/profile" icon={CgProfile} label="Profile" />
      <SidebarItem to="/login" icon={IoMdLogIn} label="Login/Logout" />
      <SidebarItem to="/post" icon={FaSignsPost} label="Post" />
    </ul>
  </div>
</div>
  );


export default Sidebar;
