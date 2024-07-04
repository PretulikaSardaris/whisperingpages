import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from "./Pages/Homepage";
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

function App() {
  return (
    <div>
      <div className="flex flex-col h-[100vh] bg-gradient-to-r from-purple-900 via-black to-purple-900">
        <Header />
        <div className="flex-grow flex">
          <Sidebar className="hidden md:block md:w-1/4 lg:w-1/5" />
          <div className="w-full md:w-1/2 lg:w-3/5 bg-white p-4">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/bookmark" element={<Bookmark />} />
            </Routes>
          </div>
          <div className="hidden md:block md:w-1/4 lg:w-1/5 bg-gray-200">
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
