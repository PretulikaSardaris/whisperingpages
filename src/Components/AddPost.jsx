import React, { useState, } from 'react';
import { usePosts } from '../Context/PostContext';
import { CiImageOn } from "react-icons/ci";
import {  useUser } from '../Context/UserContext';

const AddPost = () => {
  const [description, setDescription] = useState('');
  const { addPost } = usePosts();
  const { profileData } = useUser();
  const [image, setImage] = useState(null);

  if (!profileData) {
    return <div>Loading or no profile data found...</div>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = {
      description,
      image,
      username: profileData.username,
      avatarUrl: profileData.avatarUrl,
    };
    
    await addPost(postData);
    setDescription('');
    setImage(null);
  }

  return (
    <div className='container rounded-lg p-10 m-5' style={{
      background: 'url(https://img.freepik.com/premium-photo/grunge-background-with-old-paper-frame-text-image_900706-13887.jpg)',
      backgroundRepeat: 'no-repeat',
      position: 'relative',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
    }}>
      <div className='flex flex-row text-center mt-10 ml-20 gap-5'>
        <img src={profileData.avatarUrl} className='w-12 h-12 lg:w-28 lg:h-28 border rounded-full' alt="" />
        <p className='font-playwrite font-bold text-xl md:text-2xl lg:text-3xl'>{profileData.username}</p>
      </div>

      <div>
        <form onSubmit={handleSubmit} className='flex flex-col gap-5 rounded-md p-5 m-5'>
          <textarea 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            placeholder="Description" 
            className="w-full p-3 text-black text-xl font-semibold font-playwrite bg-transparent resize-none focus:outline-none"
          />
          <div className='flex items-center gap-3 ml-20'>
            <label className="flex items-center cursor-pointer">
              <CiImageOn size={30} color='white' className="text-2xl text-gray-500 hover:text-gray-700" />
              <input
                type="file"
                className="hidden"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </label>
            <button type='submit' className='bg-red-950 rounded-lg text-white font-playwrite m-3 p-2'>Add Post</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddPost; 