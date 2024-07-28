import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "./firebase"; // Ensure paths are correct
import { doc, getDoc, updateDoc, setDoc } from "firebase/firestore";
import { useAuth } from "./AuthContext"; // Ensure path is correct

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { user } = useAuth(); // Get user from AuthContext
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      if (user) {
        try {
          const docRef = doc(db, 'users', user.uid); // Get user document reference
          const docSnap = await getDoc(docRef); // Fetch document snapshot

          if (docSnap.exists()) {
            setProfileData(docSnap.data()); // Set profile data
            console.log("Profile Data:", docSnap.data()); // Debugging log
          } else {
            console.warn("No profile data found for user:", user.uid); // Debugging log
            setProfileData(null);
          }
        } catch (error) {
          console.error("Error fetching profile data:", error); // Error handling
          setProfileData(null);
        }
      } else {
        setProfileData(null);
      }
    };

    fetchProfileData();
  }, [user]); // Re-run when user changes

  const updateUserProfile = async (data) => {
    if (!auth.currentUser) return; // Ensure user is authenticated

    try {
      const docRef = doc(db, 'users', auth.currentUser.uid); // Get document reference
      await updateDoc(docRef, data); // Update document
      setProfileData(prev => ({ ...prev, ...data })); // Update state
      console.log("Profile updated:", data); // Debugging log
    } catch (error) {
      console.error("Error updating profile:", error); // Error handling
    }
  };

  const createUserProfile = async (uid, username, email) => {
    try {
      await setDoc(doc(db, 'users', uid), {
        username,
        email,
        avatarUrl: '',
        followers: [],
        following: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });
      console.log("User profile created:", { uid, username, email }); // Debugging log
    } catch (error) {
      console.error("Error creating user profile:", error); // Error handling
    }
  };

  const value = {
    profileData,
    updateUserProfile,
    createUserProfile,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
