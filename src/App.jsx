import React from 'react';
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
import Bookmark from './Components/BookMark';

import PrivateRoute from './Components/PrivateRoute';


function App() {

  return (
    <div>
    <div className="flex flex-col h-[100vh] ">
      <Header className="fixed flex-shrink-0 h-16"/>
      <div className="flex-grow flex overflow-hidden">
        {/* Left Sidebar */}
        <div className="hidden md:block md:w-1/4 lg:w-1/5 overflow-hidden bg-gradient-to-r from-purple-900 via-black to-purple-900 h-full flex-shrink-0">
          <Sidebar />
        </div>
        
        {/* Middle Section */}
        <div className="flex-grow h-full md:w-1/2 lg:w-3/5 bg-white p-4 overflow-auto">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route element={<PrivateRoute />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/bookmark" element={<Bookmark />} />
          </Routes>
        </div>
        
        {/* Right Sidebar */}
        <div className="hidden md:block md:w-1/4 lg:w-1/5 bg-gray-200 overflow-auto h-full flex-shrink-0">
          <Suggestions />
        </div>
      </div>
      <Footer />
    </div>
    <ToastContainer />
  </div>
  
  
  );
}

export default App;
