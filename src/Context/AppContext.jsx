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