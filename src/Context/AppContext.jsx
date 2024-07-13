import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth, db } from "./firebase";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
} from 'firebase/firestore';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [profileData, setProfileData] = useState(null);
  const [posts, setPosts] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [loading, setLoading] = useState(true);

  // Auth state change listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      console.log("User changed:", currentUser);
      setUser(currentUser);

      if (currentUser) {
        try {
          const docRef = doc(db, 'users', currentUser.uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setProfileData(docSnap.data());
            console.log("Profile data fetched:", docSnap.data());
          } else {
            console.log('No profile data found for user:', currentUser.uid);
            setProfileData(null);
          }
        } catch (error) {
          console.error('Error fetching profile data:', error);
          setProfileData(null);
        }
      } else {
        setProfileData(null);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Fetch posts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postCollection = collection(db, 'posts');
        const postSnapshot = await getDocs(postCollection);
        const postList = postSnapshot.docs.map(doc => ({
          id: doc.id, ...doc.data()
        }));
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
      const docRef = await addDoc(postCollection, post);
      setPosts([...posts, { id: docRef.id, ...post }]);
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };

  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  
  const value = {
    user,
    login,
    logout,
    posts,
    setPosts,
    addPost,
    bookmarks,
    setBookmarks,
    followers,
    setFollowers,
    following,
    setFollowing,
    profileData,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
