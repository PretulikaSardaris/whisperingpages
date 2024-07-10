import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth , db } from "./firebase";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc
} from 'firebase/firestore';


const AppContext = createContext();

const AppProvider = ({ children }) => {
  const[user, setUser] = useState(null);
  const[ posts,setPosts] = useState([]);
  const[ bookmarks,setBookmarks] = useState([]);
  const[ followers,setFollowers] = useState([]);
  const[ following,setFollowing] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      try{
      const postCollection = collection(db, 'posts');
      const postSnapshot = await getDocs(postCollection);
      const postList = postSnapshot.docs.map(doc => ({
        id:doc.id, ...doc.data()
      }));
      setPosts(postList);
      }
      catch(error){
console.error('Error fetching posts : ' , error)
      }
    }
    fetchPosts()
  } , [])

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

    try{
      await signInWithEmailAndPassword(auth, email, password)
    } catch(err){
   console.error(err)
    }
  }
  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };



  const value = {
    user,
    login,
    logout,
    posts,
    setPosts,
    addPost , 
    bookmarks,
    setBookmarks,
    followers,
    setFollowers,
    following,
    setFollowing,
  };

  return (
    <AppContext.Provider value={value}>
      {!loading && children}
    </AppContext.Provider>
  );
};


export{ AppContext , AppProvider}