import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import LoginPage from './LoginPage'
import ProfilePage from  './ProfilePage'

const MiddleSection = () => {
  return (
    <div>
        <Header />
        <LoginPage />
        <SignUp />
        <ProfilePage />
        <Homepage />
        <Footer />
      
    </div>
  )
}

export default MiddleSection
