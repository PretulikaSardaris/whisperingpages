import React, { useContext } from 'react';
import { BiLike } from "react-icons/bi";
import { FaRegCommentAlt } from "react-icons/fa";
import { FaRegShareSquare } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { useUser } from '../Context/UserContext';
import { usePosts } from '../Context/PostContext';

const Feeds = () => {
  const { profileData } = useUser();
  const { posts, loading } = usePosts();

  if (!profileData) {
    return <div>Loading or no profile data found...</div>;
  }

  if (loading) {
    return <div>Loading posts...</div>; // Handle loading state
  }

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <div className='container flex flex-col rounded-lg p-10 m-5' style={{
            background: 'url(https://i.pinimg.com/736x/a5/71/29/a57129d510be1af36e0754b3c72ea01f.jpg)',
            backgroundRepeat: 'no-repeat'
          }}>
            <div className="flex flex-row gap-3">
              <div className='flex flex-row text-center mt-10 ml-20 gap-5'>
                <img src={profileData.avatarUrl} className='w-12 h-12 lg:w-28 lg:h-28 border rounded-full' alt="" />
                <p className='font-playwrite font-bold text-xl'>{profileData.username}</p>
              </div>
            </div>
            {post.image && (
              <img className='w-96 h-[60vh] m-2 p-2 flex items-center justify-center rounded-3xl border-slate-600 border-spacing-2 border-2' src={post.image} alt="" />
            )}
            <div className='flex flex-row gap-10 justify-start m-3'>
              <BiLike size={30} color='purple' />
              <FaRegCommentAlt size={30} color='purple' />
              <FaRegShareSquare size={30} color='purple' />
              <FaRegBookmark size={30} color='purple' />
            </div>
            <div className='flex flex-col float-left m-3 font-bold text-purple-900'>
              <p>Description: {post.description}</p>
              <p>Comments: {post.comments}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Feeds;
