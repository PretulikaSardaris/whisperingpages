import React from 'react'
import { BiLike } from "react-icons/bi";
import { FaCommentAlt } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";

const Feeds = () => {
  return (
    <div>
      <div>
        <div className='flex flex-col m-10 p-10 border-2- border-black'>
        <img className='w-64 h-72 m-2 p-2' src="https://cdn.pixabay.com/photo/2017/01/07/15/07/bible-1960635_640.jpg" alt="" />
        <div className='flex flex-row gap-10 justify-center'>
        <BiLike size={30}/>
        <FaCommentAlt size={30}/>
        <FaShare size={30}/>
        <FaBookmark size={30}/>
        </div>
        <p>Name</p>
        <p>Description</p>
        <p>Comments</p>
        </div>
      </div>
      <div><img src="" alt="" /></div>
    </div>
  )
}

export default Feeds
