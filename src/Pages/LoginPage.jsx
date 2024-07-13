import { signInWithPopup } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { auth, db } from '../Context/firebase'; 
import { doc, setDoc } from 'firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await login(email, password);
      toast.success('Welcome Back');
      navigate('/');
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

 

  return (
    <div className="flex items-center justify-center w-full h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://static.vecteezy.com/system/resources/thumbnails/036/491/936/small_2x/ai-generated-old-worn-book-opens-to-blank-pages-against-a-white-canvas-photo.jpg)' }}>
      <div className="bg-red-950 bg-opacity-50 backdrop-filter p-8 rounded-lg shadow-glow max-w-md w-full">
        <h2 className="text-4xl font-bold mb-8 text-center text-white">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              className="shadow-glow border rounded w-full py-3 px-4 text-white leading-tight focus:shadow-outline focus:border-red-500 bg-white bg-opacity-10"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              className="shadow-glow border rounded w-full py-3 px-4 text-white leading-tight focus:shadow-outline focus:border-red-500 bg-white bg-opacity-10"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="flex flex-col items-center justify-between gap-10">
            <button
              className="w-full bg-gradient-to-r from-orange-700 via-black to-orange-900 rounded-lg text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline transition duration-200"
              type="submit"
              disabled={loading}
            >
              {loading ? 'Loading ..' : 'Login'}
            </button>
           
          </div>
          <div className="mt-8 text-center">
            <p className="text-white">
              Don't have an account? 
              <Link to="/signup" className="text-black hover:bg-red-950 hover:m-5 hover:p-5 hover:rounded-md hover:text-white font-bold transition duration-200"> Sign Up</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
