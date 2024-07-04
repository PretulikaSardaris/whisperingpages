import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth,db } from '../Context/firebase'; 
import { doc, setDoc } from 'firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';


const LoginPage = () => {
  const { login, register } = useContext(AppContext);

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [registerMode, setRegisterMode] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const { username, email, password } = Object.fromEntries(formData);

    try {
      await login(username, email, password);

      toast.success('Welcome Back ' + username);
      navigate('/');
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      await setDoc(doc(db, 'username', user.uid), {
        username: user.displayName,
        email: user.email,
        id: user.uid,
      });
      await setDoc(doc(db, 'usercart', user.uid), {
        cart: [],
      });

      toast.success('Welcome ' + user.displayName);
      navigate('/CartPage');
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };
  return (
    <div className="flex items-center justify-center w-full h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://t3.ftcdn.net/jpg/08/07/53/78/360_F_807537893_NCFr2VUk3SBI9Pf9WbkeCm5nNAnJgxRZ.jpg)' }}>
      <div className="bg-white bg-opacity-10 backdrop-filter  p-8 rounded-lg shadow-glow max-w-md w-full">
        <h2 className="text-4xl font-bold mb-8 text-center text-white">Login</h2>
        <form onSubmit={handleLogin}>
        <div className="mb-6">
            
            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
              User Name
            </label>
            <input
              type="username"
              id="username"
              autocomplete="username"
              className="shadow-glow border rounded w-full py-3 px-4 text-white leading-tight  focus:shadow-outline focus:border-purple-500 bg-white bg-opacity-10"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-6">
            
            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              autocomplete="email"
              className="shadow-glow border rounded w-full py-3 px-4 text-white leading-tight  focus:shadow-outline focus:border-purple-500 bg-white bg-opacity-10"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              autocomplete="password"
              className="shadow-glow border rounded w-full py-3 px-4 text-white leading-tight  focus:shadow-outline focus:border-purple-500 bg-white bg-opacity-10"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex flex-col items-center justify-between gap-10">
            <button
              className=" w-full bg-purple-700 rounded-lg  hover:bg-purple-800 text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline transition duration-200"
              type="submit"
              disabled={loading}
            >
              {loading ? 'loading ..' : 'Login In'}
            </button>
           
          </div>
          <div className="mt-8 text-center">
            <p className="text-white">Don't have an account? <Link to="/signup" className="text-purple-400 hover:bg-purple-700 hover:text-white font-bold transition duration-200">Sign Up</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
