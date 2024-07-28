import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from "./Pages/Homepage";
import { useContext } from 'react';
import { AppContext } from './Context/AppContext';

import LoginPage from "./Pages/LoginPage";
import ProfilePage from "./Pages/ProfilePage";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import Suggestions from "./Components/Suggestions";
import SignUp from "./Pages/SignUp";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import PrivateRoute from './Components/PrivateRoute';
import Notification from './Components/Notification';
import Bookmark from './Components/Bookmark';



function App() {

const [showNotifications ,  setShowNotifications] = useState(false)

const toggleNotifications = () => {
  console.log('clicked')
  setShowNotifications(prev => !prev);
}

  return (
    <div style={{
      background: 'url(https://wallpapers.com/images/hd/vintage-paper-background-d1zmfj3zp0nq6bva.jpg)',
      backgroundRepeat: 'no-repeat',
      position: 'relative',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
    }}>
      <div className="flex h-screen" >
      {/* Left Sidebar */}
      <div className="hidden md:flex md:w-1/6 ">
        <Sidebar toggleNotifications={toggleNotifications}/>
      </div>

      {/* Middle Section */}
      <div className="flex flex-col w-full md:w-2/3 " >
        <Header className="fixed w-full h-16 z-10 bg-gray-800 text-white flex items-center justify-between p-4 shadow-md" />
        <div className="flex-grow overflow-auto mt-16 p-4">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route element={<PrivateRoute />}>
              <Route path="/profile" element={<ProfilePage />} />

              <Route path="/bookmark" element={<Bookmark />} />
            </Route>
          </Routes>
        </div>
        <Footer toggleNotifications={toggleNotifications}   className="block md:hidden bg-gray-800 text-white p-4 text-center" />
        <Notification  show={showNotifications} toggleNotifications={toggleNotifications} />
      </div>

      {/* Right Suggestions Section */}
      <div className="hidden md:flex md:w-1/6  mt-16 p-4 overflow-auto">
        <Suggestions />
      </div>
    </div>
    <ToastContainer />
  </div>
  
  
  );
}

export default App;
