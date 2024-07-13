import React, { useContext, useEffect, useState } from 'react'
import { BiHomeCircle } from "react-icons/bi";
import { HiOutlineSearchCircle } from "react-icons/hi";
import { IoMdAddCircleOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoMdLogIn } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FaRegBookmark } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { signOut as firebaseSignOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Context/firebase';
import { useAuth } from '../Context/AuthContext';

const Footer = () => {

  const {user, logout} = useAuth();

  const handleSignOut = () => {
    logout().then(() => {
    
      console.log('Signed out successfully');
    }).catch((error) => {
      console.error('Error signing out: ', error);
    });
  };

  
  return (
    <footer className="md:hidden bg-gradient-to-r from-orange-900 via-black to-red-950 py-4">
      <div className=' container'>
        <div className='flex flex-row gap-10 items-center justify-center'>
          <Link to='/'> 
          <BiHomeCircle className='hover:shadow-glow' color='white' size={30} />
          </Link>

          <HiOutlineSearchCircle className='hover:shadow-glow cursor-pointer' color='white' size={30} />

          <IoMdAddCircleOutline className='hover:shadow-glow cursor-pointer' color='white' size={30} />
         <Link to='/profile'>
          <CgProfile className='hover:shadow-glow' color='white' size={30} />
          </Link>
          <Link to='/bookmark' className='hover:shadow-glow cursor-pointer '>
            <FaRegBookmark  color='white' size={25} /></Link>
            
{user ? (
 <FaSignOutAlt size={30} className='hover:shadow-glow' color='white' onClick={() => handleSignOut()}/>
) : (

  <Link to='/login' > <IoMdLogIn className='hover:shadow-glow' color='white' size={30} /></Link>
)}


        </div>
      </div>
    </footer>
  )
}

export default Footer
