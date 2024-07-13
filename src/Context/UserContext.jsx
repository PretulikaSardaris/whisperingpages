// src/contexts/UserContext.js
import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "./firebase"; // Adjust path if necessary
import { doc, getDoc, updateDoc, setDoc } from "firebase/firestore";
import { useAuth } from "./AuthContext"; // Adjust path if necessary

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { user } = useAuth();
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      if (user) {
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProfileData(docSnap.data());
        } else {
          setProfileData(null);
        } 
      } else {
        setProfileData(null);
      }
    };

    fetchProfileData();
  }, [user]);

  const updateUserProfile = async (data) => {
    if (!auth.currentUser) return;

    const docRef = doc(db, 'users', auth.currentUser.uid);
    await updateDoc(docRef, data);
    setProfileData((prev) => ({ ...prev, ...data }));
  };

  const createUserProfile = async (uid, username, email) => {
    await setDoc(doc(db, 'users', uid), {
      username,
      email,
      avatarUrl: '',
      followers: [],
      following: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
  };

  const value = {
    profileData,
    updateUserProfile,
    createUserProfile,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext); 