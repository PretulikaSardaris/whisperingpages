// Notification.jsx
import React from 'react';
import { useUser } from '../Context/UserContext';

const Notification = ({ notifications, show }) => {
  const{profileData} = useUser();

  if (!show) return null; // Hide if not shown

  return (
    <div className="fixed top-5 right-5 bg-yellow-800 bg-opacity-80 border border-gray-300 shadow-lg w-80 lg:w-96 p-4 z-50" style={{
      backgroundImage: 'url(https://i.pinimg.com/550x/28/f4/4a/28f44aba1e4b794a267daaa6fc35e264.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
    <h3 className="font-bold mb-2 ">Notifications</h3>
    <div className='flex flex-row'>
      <img src={profileData.avatarUrl} className='w-8 h-8 lg:w-14 lg:h-14 border rounded-full' alt="" />
      <p>{profileData.username}  liked your post</p>
      <br />
      <p>time</p>
    </div>
    
    
  </div>
  );
};

export default Notification;
