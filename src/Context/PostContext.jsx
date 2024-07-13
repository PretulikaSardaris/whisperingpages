// src/contexts/PostsContext.js
import { createContext, useContext, useEffect, useState } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../Context/firebase";
import {useAuth} from './AuthContext'
import { toast } from "react-toastify";

const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const {user} = useAuth()
  const [posts, setPosts] = useState([]);
  const [loading , setLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      try {
        const postCollection = collection(db, 'posts');
        const postSnapshot = await getDocs(postCollection);
        const postList = postSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        postList.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setPosts(postList);
        setPosts(postList);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const addPost = async (post) => {
    try {
      const postCollection = collection(db, 'posts');
      const newPost = {
        ...post,
        username: user.displayName || user.email, // Include username
        userId: user.uid, // Save user ID for reference
        createdAt :new Date().toISOString
      };
      const docRef = await addDoc(postCollection, newPost);
      setPosts(prevPosts => [ { id: docRef.id, ...newPost }, ...prevPosts ]);
    } catch (error) {
      console.error("Error adding post:", error);
      toast.error('Failed to add post.');
    }
  };

  const value = {
    posts,
    loading,
    addPost,
  };

  return <PostsContext.Provider value={value}>{children}</PostsContext.Provider>;
};

export const usePosts = () => useContext(PostsContext);
