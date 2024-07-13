// src/components/SidebarItem.js
import React from 'react';
import { Link } from 'react-router-dom';

const SidebarItem = ({ to, icon: Icon, label }) => (
  <Link to={to}>
    <li className='flex items-center space-x-2 p-2 cursor-pointer group'>
      <Icon color='white' size={30} />
      <span className='hidden md:block group-hover:block'>{label}</span>
    </li>
  </Link>
);

export default SidebarItem;
