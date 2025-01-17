import React, { useContext, useState } from 'react'
import { RiUserFollowFill } from "react-icons/ri";
import { MdMessage } from "react-icons/md";
import { useUser } from '../Context/UserContext';



export default function ProfileHero  () {
  const { profileData } = useUser();


   
  const defaultProfileData = {
    avatarUrl: '',
    username: 'No name provided',
    bio: 'No bio provided',
    favAuthor: 'No favorite author provided',
    bookRecommendation: 'No book recommendation provided',
    currentlyReading: 'Not currently reading anything',
  };

  const userProfile = { ...defaultProfileData, ...profileData };
  
  return (
    <div className='container m-5 p-5  md:m-10 md:p-10 w-full '>
        <div className='flex flex-row '>
        <img src={profileData.avatarUrl} className='w-24 h-24 lg:w-28 lg:h-28 border rounded-full mt-10' alt="" />
        <div className='flexflex-col'>
            <p className='text-2xl md:text-3xl lg:text-4xl font-serif font-bold m-2 p-2'>{profileData.username || "No name provided"}</p>
            <div className='flex flex-col justify-around m-1 p-1 gap-2'>
                <div className='flex flex-row'>
                  <button className='bg-gradient-to-r from-red-900 to-black w-full h-8  text-white rounded-lg m-1 p-1 flex items-center justify-center'> <span className='mr-2'>Follow</span>

                <RiUserFollowFill  size={30} color='white' className='m-1 p-1' />
                </button></div>
           
           
            <div className='flex flex-row'>
              <button className='bg-gradient-to-r from-red-900 to-black w-full h-8 text-white rounded-lg m-1 p-1 flex items-center justify-center'>
                <span className='mr-2'>Message</span>
                <MdMessage size={20} color='white' />
              </button>
            </div>

                
            </div>

        </div>
        </div>
<div>Know Me
<ul className='list-disc pl-5'>
          <li> <span className='font-bold font-serif'>Bio : </span>{profileData.bio || "No bio provided"}</li>
          <li><span className='font-bold font-serif'>Fav Author </span>: {profileData.favAuthor || "No favorite author provided"}</li>
          <li><span className='font-bold font-serif'>Book Recommendation </span>: {profileData.bookRecommendation || "No book recommendation provided"}</li>
          <li><span className='font-bold font-serif'>Currently Reading </span>: S{profileData.currentlyReading || "Not currently reading anything"}</li>
        </ul>
</div>
<div><button className='bg-gradient-to-r from-red-900 to-black w-1/2 h-8  text-white rounded-lg m-1 p-1 flex items-center justify-center'>Edit profile</button></div>
      

    </div>
  )
}


