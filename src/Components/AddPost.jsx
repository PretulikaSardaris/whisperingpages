import React, { useState, } from 'react';
import { usePosts } from '../Context/PostContext';
import { CiImageOn } from "react-icons/ci";
import {  useUser } from '../Context/UserContext';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

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
    let imageUrl = '';

    if (image) {
      const storage = getStorage();
      const imageRef = ref(storage, `images/${image.name}`);
      await uploadBytes(imageRef, image);
      imageUrl = await getDownloadURL(imageRef);
    }

    const postData = {
      description,
      imageUrl,
      username: profileData.username,
      avatarUrl: profileData.avatarUrl,
      userId: profileData.uid,
      createdAt: new Date().toISOString(),
    };
    
    await addPost(postData);
    setDescription('');
    setImage(null);
  }

  return (
    <div className='container rounded-lg p-10 m-5 bg-yellow-800 bg-opacity-40' >
      <div className='flex flex-row text-center mt-10 ml-20 gap-5'>
        <img src={profileData.avatarUrl} className='w-12 h-12 lg:w-20 lg:h-20 border rounded-full' alt="" />
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