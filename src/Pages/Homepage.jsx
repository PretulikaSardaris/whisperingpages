import React from 'react'
import Impact from '../Components/Impact'
import Feeds from '../Components/Feeds'
import Sidebar from '../Components/Sidebar'
import AddPost from '../Components/AddPost'
import Header from '../Components/Header'

const Homepage = () => {
  return (
  
    <div className='flex-grow top-40'>
    
 
       <AddPost />
       <Feeds />

    </div>
  )
}

export default Homepage
