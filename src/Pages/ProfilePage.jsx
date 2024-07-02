import React from 'react'

import Sidebar from '../Components/Sidebar'

import ProfileHero from '../Components/ProfileHero'
import Highlights from '../Components/Highlights'
import PostGrid from '../Components/PostGrid'

const ProfilePage = () => {
  return (
    <div className="flex h-screen">
    <div className="hidden md:block w-64 bg-gradient-to-r from-purple-950 to-blue-700 text-white">
 
    </div>
    <div className="flex-grow w-full">
      <ProfileHero />
      <Highlights />
      <PostGrid />
    </div>
  </div>
  )
}

export default ProfilePage
