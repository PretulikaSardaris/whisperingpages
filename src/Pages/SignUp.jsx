import React, { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import { useUser } from '../Context/UserContext';
import Modal from '../Components/Modal';
import { auth } from '../Context/firebase';

const SignUp = () => {
  const { signup, login } = useAuth(); // Ensure login is included
  const { updateUserProfile, createUserProfile } = useUser();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [registerMode, setRegisterMode] = useState(false);
  const [isProfileSetupOpen, setIsProfileSetupOpen] = useState(false);
  
  const handleRegister = async (e) => {
    e.preventDefault();
    setRegisterMode(true);

    const formData = new FormData(e.target);
    const { username, email, password } = Object.fromEntries(formData);

    try {
      const res = await signup(email, password);
      await createUserProfile(res.user.uid, username, email);

      toast.success('Welcome To Whispering Pages!');
      setIsProfileSetupOpen(true);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setRegisterMode(false);
    }
  };

  const handleProfileSave = async (profileData) => {
    const user = auth.currentUser;

    if (user) {
      try {
        if (!profileData.username || !profileData.avatarUrl) {
          throw new Error('Invalid profile data');
        }

        await updateUserProfile({
          username: profileData.username,
          avatarUrl: profileData.avatarUrl,
          bio: profileData.bio,
          favAuthor: profileData.favAuthor,
          bookRecommendation: profileData.bookRecommendation,
          currentlyReading: profileData.currentlyReading,
          updatedAt: new Date().toISOString(),
        }, { merge: true });

        toast.success('Profile setup complete. Welcome!');
        setIsProfileSetupOpen(false);
        
        // Automatically log in the user after profile setup
        await login(profileData.email, profileData.password);
        navigate('/');
      } catch (err) {
        console.log(err);
        toast.error(err.message);
      }
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-cover bg-center font-playwrite" 
         style={{ backgroundImage: 'url(https://static.vecteezy.com/system/resources/thumbnails/036/491/936/small_2x/ai-generated-old-worn-book-opens-to-blank-pages-against-a-white-canvas-photo.jpg)' }}>
      <div className="bg-red-950 bg-opacity-50 backdrop-filter p-5 rounded-lg shadow-glow max-w-md w-full">
        <h2 className="text-4xl font-bold mb-8 text-center text-white">Sign Up</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-6">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              autoComplete="username"
              className="shadow-glow border rounded w-full py-3 px-4 text-black leading-tight focus:shadow-outline focus:border-red-500 bg-white bg-opacity-10"
              placeholder="Choose a unique username"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              autoComplete="email"
              className="shadow-glow border rounded w-full py-3 px-4 text-black leading-tight focus:shadow-outline focus:border-purple-500 bg-white bg-opacity-10"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              autoComplete="password"
              className="shadow-glow border rounded w-full py-3 px-4 text-black leading-tight focus:shadow-outline focus:border-red-500 bg-white bg-opacity-10"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="flex flex-col items-center justify-between gap-10">
            <button
              className="w-full bg-gradient-to-r from-orange-900 via-black to-red-950 rounded-lg hover:bg-red-800 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline transition duration-200"
              type="submit"
              disabled={registerMode}
            >
              {registerMode ? 'Loading...' : 'Sign Up'}
            </button>
          </div>
          <div className="mt-8 text-center">
            <p className="text-white">
              You can now{' '}
              <Link to="/login" className="text-black hover:bg-red-950 hover:m-5 hover:p-5 hover:rounded-md hover:text-white font-bold transition duration-200">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
      <Modal
        isOpen={isProfileSetupOpen}
        onClose={() => setIsProfileSetupOpen(false)}
        onSave={handleProfileSave}
      />
    </div>
  );
};

export default SignUp;
