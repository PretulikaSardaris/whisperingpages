import Homepage from "./Pages/Homepage"
import LoginPage from "./Pages/LoginPage"
import { Routes , Route } from "react-router-dom"
import ProfilePage from "./Pages/ProfilePage"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
function App() {
 

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
