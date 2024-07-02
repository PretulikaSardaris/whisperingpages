import React, { useEffect, useState } from 'react';
import { FaHome } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import { FaAmazon } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { TiMessages } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';

const Header = () => {
  

    

  return (
    <div className='w-full h-28 bg-pink-200 mt-1 p-5 rounded-2xl '>
      <p className='w-full font-semibold text-2xl  font-mono italic'>"Some books leave us free and some books make us free."</p>
      <p className='text-gray-800'>– Ralph Waldo Emerson

</p>
    </div>
  );
};

export default Header;
