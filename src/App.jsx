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
      <div className="flex h-screen">
      {/* Left Sidebar */}
      <div className="hidden md:flex md:w-1/6 bg-[#131826]">
        <Sidebar />
      </div>

      {/* Middle Section */}
      <div className="flex flex-col w-full md:w-2/3 bg-white">
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
        <Footer className="block md:hidden bg-gray-800 text-white p-4 text-center" />
      </div>

      {/* Right Suggestions Section */}
      <div className="hidden md:flex md:w-1/6 bg-gray-200 mt-16 p-4 overflow-auto">
        <Suggestions />
      </div>
    </div>
    <ToastContainer />
  </div>
  
  
  );
}

export default App;
