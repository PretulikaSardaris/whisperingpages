import React, { useState, useContext } from 'react';
import { AppContext } from '../Context/AppContext';


const AddPost = () => {
  const { addPost } = useContext(AppContext);
  const [profileName, setProfileName] = useState('');
  const [bookName, setBookName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addPost({ profileName, bookName, description, image });
    setProfileName('');
    setBookName('');
    setDescription('');
    setImage('');
  }

  return (
    <div className='container bg-[#15142E]
    rounded-lg p-10 m-5'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-5 bg-[#15142E]rounded-md'>
        
          <input type="text" value={profileName} onChange={(e) => setProfileName(e.target.value)} placeholder="Profile Name" className='bg-[#15142E]'/>
          <input type="text" value={bookName} onChange={(e) => setBookName(e.target.value)} placeholder="Book Name" className='bg-[#15142E]'/>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" className='bg-[#15142E]'/>
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image URL" className='bg-[#15142E]'/>
          <button type="submit" className='text-white bg-slate-950'>Add Post</button>
      </form>
      </div>
  );
}

export default AddPost;
