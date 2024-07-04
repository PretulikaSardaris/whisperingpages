import React from 'react'
import { BiLike } from "react-icons/bi";
import { FaRegCommentAlt } from "react-icons/fa";
import { FaRegShareSquare } from "react-icons/fa";
import { FaRegBookmark  } from "react-icons/fa";

const Bookmark = () => {
  return (
    <div>
      <div>
        <div className='flex flex-col  m-5 p-5  border-slate-600 border-spacing-3 border-2 rounded-xl gap-3'>
        <img className='w-96 h-[60vh] m-2 p-2 flex items-center justify-center rounded-3xl border-slate-600 border-spacing-2 border-2' src="https://cdn.pixabay.com/photo/2017/01/07/15/07/bible-1960635_640.jpg" alt="" />
        <div className='flex flex-row gap-10  justify-start m-3'>
        <BiLike size={30} color='purple'/>
        <FaRegCommentAlt size={30} color='purple' />
        <FaRegShareSquare  size={30} color='purple'/>
        <FaRegBookmark  size={30} color='purple'/>
        </div>
        <div className='flex flex-col float-left m-3 font-bold text-purple-900 '>
        <p>Name :</p>
        <p>Description :</p>
        <p>Comments :</p>
        </div>
        
        </div>
      </div>
      <div className='w-full h-[1px] bg-slate-600 mx-5'>

      </div>
      
    </div>
  )
}

export default Bookmark
