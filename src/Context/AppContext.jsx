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
  const[ posts,addPosts] = useState([]);
  const[ bookmarks,addBookmark] = useState([]);
  const[ followers,setFollowers] = useState([]);
  const[ following,setFollowing] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
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



   return (
    <AppContext.Provider 
    value={{ login , logout , addPosts,addBookmark, }}>
        {children}
    </AppContext.Provider>
   )
}

export{ AppContext , AppProvider}