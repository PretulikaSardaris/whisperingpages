import React, { useState, useEffect } from 'react';

const Modal = ({ isOpen, onClose, onSave }) => {
  const [profileData, setProfileData] = useState({
    username: '',
    avatarUrl: '',
    bio: '',
    favAuthor: '',
    bookRecommendation: '',
    currentlyReading: '',
  });

  useEffect(() => {
    if (!isOpen) return;
    setProfileData({
      username: '',
      avatarUrl: '',
      bio: '',
      favAuthor: '',
      bookRecommendation: '',
      currentlyReading: '',
    });
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAvatarChange = (e) => {
    if (e.target.files[0]) {
      const file = e.target.files[0];
      setProfileData((prevData) => ({
        ...prevData,
        avatarUrl: URL.createObjectURL(file),
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (profileData.username && profileData.avatarUrl) {
      onSave(profileData);
    } else {
      alert('Please fill in all required fields.');
    }
  };

  if (!isOpen) return null;

  return (
    <div style={{ backgroundImage: 'url(https://img.freepik.com/premium-photo/old-crumpled-paper-background-brown-crumpled-paper-texture-abstract-old-brown-paper-as-vintage-wallpaper-backdrop-ai-generated_538213-2882.jpg)' ,backgroundRepeat: 'no-repeat ',  backgroundSize: 'cover',
      backgroundPosition: 'center', }} className="fixed inset-0  bg-opacity-90 flex items-center justify-center">

      <div  className="p-10 rounded-lg shadow-glow w-2/3" >
        <h2 className="text-3xl text-center text-black font-bold mb-4">Setup Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4  rounded-md p-3">
            <label className="block text-black text-md  font-bold m-2" htmlFor="username">
              Username
            </label>
            <input 
              className='appearance-none border rounded w-full lg:w-1/2 p-2  text-black leading-tight focus:outline-none focus:shadow-outline'
              id='username'
              type='text'
              name="username"
              value={profileData.username}
              onChange={handleChange}
              required
              placeholder='Enter your username'
            />
          </div>
          <div className='mb-4  p-3'>
            <label className="block text-black text-md font-bold mb-2" htmlFor="avatar">
              Profile Picture
            </label>
            <input
              id="avatar"
              type="file"
              className="shadow appearance-none border rounded w-full lg:w-1/2 py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              name="avatarUrl"
              onChange={handleAvatarChange}
              required
            />
            {profileData.avatarUrl && <img src={profileData.avatarUrl} alt="Avatar Preview" className="mt-2 w-24 h-24 rounded-full" />}
          </div>
          <div className="mb-4  p-3">
            <label className="block text-black text-md font-bold mb-2" htmlFor="bio">
              Bio
            </label>
            <textarea
              id="bio"
              name="bio"
              className="shadow appearance-none border rounded w-full lg:w-1/2 py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              rows="2"
              value={profileData.bio}
              onChange={handleChange}
              placeholder="Tell us something about yourself"
            ></textarea>
          </div>
          <div className="mb-4  p-3">
            <label className="block text-black text-md font-bold mb-2" htmlFor="favAuthor">
              Favorite Author
            </label>
            <input
              id="favAuthor"
              type="text"
              name="favAuthor"
              className="shadow appearance-none border rounded w-full lg:w-1/2 py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              value={profileData.favAuthor}
              onChange={handleChange}
              placeholder="Your favorite author"
            />
          </div>
          <div className="mb-4  p-3">
            <label className="block text-black text-md font-bold mb-2" htmlFor="bookRecommendation">
              Book Recommendation
            </label>
            <input
              id="bookRecommendation"
              type="text"
              name="bookRecommendation"
              className="shadow appearance-none border rounded w-full lg:w-1/2  py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              value={profileData.bookRecommendation}
              onChange={handleChange}
              placeholder="A book you recommend"
            />
          </div>
          <div className="mb-4  p-3">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="currentlyReading">
              Currently Reading
            </label>
            <input
              id="currentlyReading"
              type="text"
              name="currentlyReading"
              className="shadow appearance-none border rounded w-full lg:w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={profileData.currentlyReading}
              onChange={handleChange}
              placeholder="What you're currently reading"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="bg-orange-900 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={onClose}
            > 
              Cancel
            </button>
            <button
              type="submit"
              className="bg-yellow-900 hover:bg-yellow-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
