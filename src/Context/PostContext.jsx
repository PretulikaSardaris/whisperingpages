import { createContext, useContext, useEffect, useState } from "react";
import { collection, addDoc, getDocs, doc, updateDoc, increment, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "../Context/firebase";
import { useAuth } from './AuthContext';
import { toast } from "react-toastify";

const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const { user } = useAuth();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);









  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const postCollection = collection(db, 'posts');
        const postSnapshot = await getDocs(postCollection);
        const postList = postSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        postList.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setPosts(postList);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
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
        createdAt: new Date().toISOString(),
        avatarUrl: post.avatarUrl || '', // Set createdAt to current timestamp
      };

      const docRef = await addDoc(postCollection, newPost);
      setPosts(prevPosts => [...prevPosts, { id: docRef.id, ...newPost }]); // Use newPost instead of post
    } catch (error) {
      console.error("Error adding post:", error);
      toast.error('Failed to add post.');
    }
  };


  const editPost = async (postId, updatedContent) => {
    try {
      const postRef = doc(db, 'posts', postId);
      await updateDoc(postRef, updatedContent);
      setPosts(prevPosts => 
        prevPosts.map(post => (post.id === postId ? { ...post, ...updatedContent } : post))
      );
    } catch (error) {
      console.error("Error editing post:", error);
    }
  };


  const deletePost = async (postId) => {
    try {
      const postRef = doc(db, 'posts', postId);
      await deleteDoc(postRef);
      setPosts(prevPosts => prevPosts.filter(post => post.id !== postId));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };
  
  

  
  const addLike = async (postId, userId, username) => {
    try {
      const postRef = doc(db, 'posts', postId);
      const postDoc = await getDoc(postRef);

      if (!postDoc.exists()) return;

      await updateDoc(postRef, {
        likes: increment(1)
      });

      // Send notification to post owner
      const postOwnerId = postDoc.data().userId; // Assuming posts have a userId field
      const notification = {
        type: 'like',
        senderId: userId,
        senderName: username,
        postId: postId,
        read: false,
        timestamp: new Date()
      };

      const userRef = doc(db, 'users', postOwnerId);
      await addDoc(collection(userRef, 'notifications'), notification);

      // Update local state
      setPosts(prevPosts =>
        prevPosts.map(post =>
          post.id === postId ? { ...post, likes: (post.likes || 0) + 1 } : post
        )
      );
    } catch (error) {
      console.error("Error adding like:", error);
      toast.error('Failed to add like.');
    }
  };


  const addComment = async (postId, comment) => {
    try {
      const postRef = doc(db, 'posts', postId);
      await updateDoc(postRef, {
        comments: arrayUnion(comment)
      });
      setPosts(prevPosts =>
        prevPosts.map(post => 
          post.id === postId ? { ...post, comments: [...post.comments, comment] } : post
        )
      );
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };
  

  const addShare = async (postId) => {
    try {
      const postRef = doc(db, 'posts', postId);
      await updateDoc(postRef, {
        shares: increment(1)
      });
      setPosts(prevPosts =>
        prevPosts.map(post => 
          post.id === postId ? { ...post, shares: (post.shares || 0) + 1 } : post
        )
      );
    } catch (error) {
      console.error("Error adding share:", error);
    }
  };
  

  const addBookmark = async (postId) => {
    if(!user) return ;

    const userRef = doc(db, 'users', user.uid);
    try {
      
      await updateDoc(userRef, {
        bookmarks: arrayUnion(postId)
      });
      console.log('Post bookmarked successfully');
    } catch (error) {
      console.error("Error adding bookmark:", error);
    }
  };
  
 
  const value = {
   posts,
   setPosts,
  loading,
  addPost,
  editPost,
  deletePost,
  addLike,
  addComment,
  addShare,
  addBookmark
  };

  return <PostsContext.Provider value={value}>{children}</PostsContext.Provider>;
};

export const usePosts = () => useContext(PostsContext);
