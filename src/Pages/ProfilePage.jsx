import React, { useEffect, useContext, useState } from 'react';
import Sidebar from '../Components/Sidebar';
import ProfileHero from '../Components/ProfileHero';
import Highlights from '../Components/Highlights';
import PostGrid from '../Components/PostGrid';

import { db } from '../Context/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { usePosts } from '../Context/PostContext';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
 
 const {user} = useAuth();
 const {profileData} = useUser();
 const { posts, addPost } = usePosts()

  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchPosts = async () => {
      if (user) {
        try {
          const postCollection = collection(db, 'posts');
          const postSnapshot = await getDocs(postCollection);
          const postList = postSnapshot.docs
            .map(doc => ({ id: doc.id, ...doc.data() }))
            .filter(post => post.userId === user.uid); // Filter posts by the logged-in user

            addPost(postList);
        } catch (error) {
          console.error('Error fetching posts:', error);
        }
      } else {
        navigate('/login'); // Redirect to login if no user
      }
      setLoading(false);
    };

    fetchPosts();
  }, [user, addPost , navigate]);

  if (loading) {
    return <div>Loading...</div>;
    console.log('loading profile');
  }

  if (!user) {
    return <div>Redirecting to login...</div>; // Additional safety check
    console.log('no user found ')
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
