import React from 'react'
import { IoHome } from "react-icons/io5";
import { MdExplore } from "react-icons/md";
import { BsFillSignpostSplitFill } from "react-icons/bs";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-950 to-blue-700 m-3 p-3 py-8">
    <div className='md:hidden container mx-auto px-4 '>
      <div className='flex flex-row gap-10 items-center justify-center'>
      <IoHome color='white' size={30}/>
      <MdExplore color='white' size={30} />
      <BsFillSignpostSplitFill color='white' size={30}/>
      <MdOutlineLibraryAdd color='white' size={30}/>
      <CgProfile color='white' size={30}/>
      
      </div>
    </div>
    </footer>
  )
}

export default Footer
