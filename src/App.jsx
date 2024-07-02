import Homepage from "./Pages/Homepage"
import LoginPage from "./Pages/LoginPage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ProfilePage from "./Pages/ProfilePage"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Sidebar from "./Components/Sidebar"
import Suggestions from "./Components/Suggestions"
function App() {
 

  return (
    <div>
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
      
      <Sidebar className="hidden md:block md:w-1/4 lg:w-1/5 " />
      
      <div className="w-full md:w-1/2 lg:w-3/5 bg-white">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
        </div>
        <div className="hidden md:block md:w-1/4 lg:w-1/5 bg-gray-200" >
        <Suggestions /></div>
      </div>
      <Footer />
    </div>
    </div>
  )
}

export default App
