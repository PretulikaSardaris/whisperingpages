import React, { useEffect, useContext, useState } from 'react';
import Sidebar from '../Components/Sidebar';
import ProfileHero from '../Components/ProfileHero';
import Highlights from '../Components/Highlights';
import PostGrid from '../Components/PostGrid';

import { auth, db } from '../Context/firebase';
import { doc, getDoc, collection, getDocs } from 'firebase/firestore';
import { usePosts } from '../Context/PostContext';

const ProfilePage = () => {
 
 const {user} = useAuth();
 const {profileData} = useUser();
 const { posts,
  
  addPost, }=usePosts()

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      if (user) {
        try {
          const postCollection = collection(db, 'posts');
          const postSnapshot = await getDocs(postCollection);
          const postList = postSnapshot.docs
            .map(doc => ({ id: doc.id, ...doc.data() }))
            .filter(post => post.userId === user.uid); // Filter posts by the logged-in user

          setPosts(postList);
        } catch (error) {
          console.error('Error fetching posts:', error);
        }
      }
      setLoading(false);
    };

    fetchPosts();
  }, [user, setPosts]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-grow w-full">
        <ProfileHero profileData={profileData} />
        <Highlights />
        <PostGrid />
      </div>
    </div>
  );
};

export default ProfilePage;
