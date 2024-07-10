import React, { useEffect, useState } from 'react'

import Sidebar from '../Components/Sidebar'

import ProfileHero from '../Components/ProfileHero'
import Highlights from '../Components/Highlights'
import PostGrid from '../Components/PostGrid'
import { auth, db } from '../Context/firebase'
import { doc, getDoc } from 'firebase/firestore'

const ProfilePage = () => {

  const[profileData , setProfileData] = useState(null);
  const[loading , setLoading] = useState(true);
  const user = auth.currentUser;

  useEffect(() => {
     const fetchProfileData = async() => { 
if(user){
  const docRef = doc(db , 'users' , user.uid);
  const docSnap = await getDoc(docRef);
  if(docSnap.exists()){
    setProfileData(docSnap.data());

  }else{
    console.log('No such document!');
  }
  setLoading(false);
}
     }
     fetchProfileData();
  }, [user]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!profileData) {
    return <div>No profile data found.</div>;
  }

  return (
    <div className="flex h-screen">
  
    <div className="flex-grow w-full">
      <ProfileHero profileData={profileData} />
      <Highlights />
      <PostGrid />
    </div>
  </div>
  )
}

export default ProfilePage
