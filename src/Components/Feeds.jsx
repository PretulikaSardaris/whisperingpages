import React, { useEffect, useState } from 'react';
import { BiLike, BiSolidLike } from "react-icons/bi";
import { FaRegCommentAlt, FaRegShareSquare, FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";

import EditModal from './EditPost';
import { useUser } from '../Context/UserContext';
import { usePosts } from '../Context/PostContext';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const Feeds = () => {
  const { profileData } = useUser();
  const { posts, loading, addLike, editPost  , setPosts , deletePost , addBookmark} = usePosts();

  const [like, setLike] = useState(false);
  const [noLike, setNoLike] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState("");
  const [activePostId, setActivePostId] = useState(null);
  const[bookmark , setBookmark] = useState(false)
  
  useEffect(() => {
    console.log('Profile Data:', profileData);
  }, [profileData]); 

  
const handleBookmark = () => {
 setBookmark(prev => ! prev)

}

  const handleLike = async (postId) => {
    // Toggle like state
    const newLikeState = !like;
    setLike(newLikeState);
    setNoLike(prev => (newLikeState ? prev + 1 : prev - 1));

    // Call addLike to handle database update and notification
    await addLike(postId, profileData.userId, profileData.username);
  };

 

  const handleEditClick = (post) => {
    setEditContent(post.content); // Set content of the post to be edited
    setActivePostId(post.id); // Show edit form for this post
    setIsEditing(true); // Open modal
  };

  const handleSaveEdit = async (newContent) => {
    try {
      await editPost(activePostId, { content: newContent });
      // Update local state with the new content
      setPosts(prevPosts =>
        prevPosts.map(post =>
          post.id === activePostId ? { ...post, content: newContent } : post
        )
      );
      setEditContent(newContent);
      setIsEditing(false);
      setActivePostId(null);
    } catch (error) {
      console.error("Error saving edit:", error);
    }
  };

  const handleDelete = async (postId) => {
    try {
      await deletePost(postId);
      // Optionally reset active post ID if needed
      setActivePostId(null);
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };


  if (loading) {
    return <div>Loading...</div>;
  }

  if (!profileData) {
    return <div>No profile data found...</div>;
  }

  return (
    <div className='flex flex-col'>
      {posts.map(post => (
        <div key={post.id} className='bg-yellow-700 bg-opacity-30 backdrop-filter p-8 rounded-lg shadow-glow w-auto flex flex-col text-black'>
          <div className='container flex flex-row gap-5'>
            <img src={post.avatarUrl} className='w-12 h-12 lg:w-20 lg:h-20 border rounded-full' alt="" />
            <div className='flex flex-col'>
              <p className='font-playwrite font-bold text-xl'>{post.username}</p>
              <p className='text-black  '>Posted on : 
                <span className='font-bold'>
                 {new Date(post.createdAt).toLocaleString()}
                  </span></p>
            </div>
            
              <div>
            <FaEdit size={30}  className='cursor-pointer hover:bg-yellow-600 p-1 hover:rounded-md' onClick={() => handleEditClick(post)}>Edit</FaEdit>
            <MdDelete size={30} className='cursor-pointer hover:bg-yellow-600 p-1 hover:rounded-md'
                onClick={() => handleDelete(post.id)}>Delete</MdDelete>
</div>
              
          </div>
          {isEditing && activePostId === post.id && (
            <EditModal
              isOpen={isEditing}
              onClose={() => setIsEditing(false)}
              onSave={handleSaveEdit}
              initialContent={editContent}
            />
          )}
          <div className='flex flex-col text-2xl font-playwrite'>
            {post.id === activePostId ? editContent : post.description}
            {post.imageUrl && (
              <img className='w-96 h-[60vh] m-2 p-2 flex items-center justify-center rounded-3xl border-orange-100 border-spacing-1 border-2' src={post.imageUrl} alt="" />
            )}
            <div className='flex flex-row gap-10 justify-start m-5 p-3 rounded-md bg-yellow-900 bg-opacity-50 cursor-pointer'>
              <div className='flex flex-col items-center' onClick={() => handleLike(post.id)}>
                {like ? (<BiSolidLike size={30} color='black' />) : (<BiLike size={30} color='black' />)}
                <p>{noLike}</p>
              </div>
              <div className='flex flex-col items-center'>
                <FaRegCommentAlt size={30} color='black' />
                <p>no</p>
              </div>
              <div className='flex flex-col items-center'>
                <FaRegShareSquare size={30} color='black' />
                <p>no</p>
              </div>
              <div onClick={handleBookmark}>
                {
                  !bookmark ?
                  (
<FaRegBookmark size={30} color='black'  />
                  ) : (
<FaBookmark size={30} color='black'/>
                  )
                }
              </div>
              
            </div>
          </div>
          <div className='w-full h-[1px] bg-orange-900'></div>
        </div>
      ))}
    </div>
  );
}

export default Feeds;
