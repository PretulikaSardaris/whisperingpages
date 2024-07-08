import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth,db } from '../Context/firebase'; 
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import { Link } from 'react-router-dom';
import Modal from '../Components/Modal'


const SignUp = () => {
    const [avatar , setAvatar] = useState({
        file:null,
        url:""
    })

    const handleAvatar = e => {
        if(e.target.files[0]){
            setAvatar({
                file:e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            })
        }
    }


  const { login, register } = useContext(AppContext);

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [registerMode, setRegisterMode] = useState(false);
  const [isProfileSetupOpen, setIsProfileSetupOpen] = useState(false);

 

  const handleRegister =async  (e) => {
    e.preventDefault();
    setRegisterMode(true);

    const formData = new FormData(e.target);
    const { username, email, password } = Object.fromEntries(formData);
    console.log(username)

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, 'username', res.user.uid), {
        username,
        email,
        avatarUrl: '',
        followers: [],
        following: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });
      await setDoc(doc(db, 'post', res.user.uid), {
        post: [],
      }); 

      toast.success('Welcome To Whispering Pages!');
      setIsProfileSetupOpen(true);
      // navigate('/');

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
        await setDoc(doc(db, 'users', user.uid), {
          bio: profileData.bio,
          favAuthor: profileData.favAuthor,
          bookRecommendation: profileData.bookRecommendation,
          currentlyReading: profileData.currentlyReading,
          updatedAt: new Date().toISOString(),
        }, { merge: true });

        toast.success('Profile setup complete. Welcome!');
        setIsProfileSetupOpen(false);
        navigate('/');

      } catch (err) {
        console.log(err);
        toast.error(err.message);
      }
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
      await setDoc(doc(db, 'post', user.uid), {
        post: [],
      });

      toast.success('Welcome ' + user.displayName);
      navigate('/profile');
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };
  return (
    <div className="flex items-center justify-center w-full h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://t3.ftcdn.net/jpg/08/07/53/78/360_F_807537893_NCFr2VUk3SBI9Pf9WbkeCm5nNAnJgxRZ.jpg)' }}>
      <div className="bg-white bg-opacity-10 backdrop-filter  p-8 rounded-lg shadow-glow max-w-md w-full ">
        <h2 className="text-4xl font-bold mb-8 text-center text-white">SignUp</h2>
        <form onSubmit={handleRegister}>
            <label htmlFor="file">
                <img src={avatar.url || "https://play-lh.googleusercontent.com/mDtWbEoP__IFaEh92i1DP68HLf0gNbucJs3mgtMv4ttgFHK4UUfJxMG9kHIga4Sn=w240-h480-rw" } alt="" className='w-24 h-24 rounded-full ' /><p className='text-white'>Upload an Image</p>
            </label>
            <input type="file" id='file' style={{display:'none'}} onChange={handleAvatar} />
        <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
              User Name
            </label>
            <input
              type="text"
              name="username"
              autocomplete="username"
              className="shadow-glow border rounded w-full py-3 px-4 text-white leading-tight  focus:shadow-outline focus:border-purple-500 bg-white bg-opacity-10"
              placeholder="Choose unique Username"
            />
          </div>
          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
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
              name="password"
              autocomplete="password"
              className="shadow-glow border rounded w-full py-3 px-4 text-white leading-tight  focus:shadow-outline focus:border-purple-500 bg-white bg-opacity-10"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex flex-col items-center justify-between gap-10">
            <button
              className=" w-full bg-gradient-to-r from-purple-900 via-green-950 to-black rounded-lg  hover:bg-purple-800 text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline transition duration-200"
              type="submit"
              disabled={register}
            >
              {registerMode ? 'loading ..' : 'Sign Up'}
            </button>
            
          </div>
          <div className="mt-8 text-center">
            <p className="text-white"> You Can Now
                <Link to='/login' className="text-purple-400 hover:bg-purple-700 hover:text-white font-bold transition duration-200">Login</Link></p>
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
