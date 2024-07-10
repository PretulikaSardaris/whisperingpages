import React, { useContext } from 'react'
import { BiLike } from "react-icons/bi";
import { FaRegCommentAlt } from "react-icons/fa";
import { FaRegShareSquare } from "react-icons/fa";
import { FaRegBookmark  } from "react-icons/fa";
import { AppContext } from '../Context/AppContext';

const Feeds = () => {
  const{posts} = useContext(AppContext);

  return (
    <div>
      {
        posts.map(post => (
<div key={post.id} className='bg-[131826]'>
<div className='flex flex-col  m-5 p-5  border-slate-600 border-spacing-3 border-2 rounded-xl gap-3 bg-[131826]'>
          <div className="flex flex-row gap-3">
          <div className="w-10 h-10 rounded-full bg-slate-200"> 
           </div> <div className="text-[#FAFAFB]  font-semibold font-serif">
            {post.profileName}
            <p>{post.bookName}</p>
            </div>
          </div>
        {post.image && (
          <img className='w-96 h-[60vh] m-2 p-2 flex items-center justify-center rounded-3xl border-slate-600 border-spacing-2 border-2' src={post.image} alt="" />
        )}
         <div className='flex flex-row gap-10  justify-start m-3 '>
        <BiLike size={30} color='purple'/>
        <FaRegCommentAlt size={30} color='purple' />
        <FaRegShareSquare  size={30} color='purple'/>
        <FaRegBookmark  size={30} color='purple'/>
        </div>
        <div className='flex flex-col float-left m-3 font-bold text-purple-900 '>
       
        <p>Description : {post.description}</p>
        <p>Comments : {post.comments}</p>
        </div>
        
        </div></div>

        ))
      }
       
    </div>
  )
}

export default Feeds
