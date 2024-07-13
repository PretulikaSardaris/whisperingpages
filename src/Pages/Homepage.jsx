import React from 'react'
import Feeds from '../Components/Feeds'
import AddPost from '../Components/AddPost'


const Homepage = () => {
  return (

    <div className='flex-grow top-40'>
      <AddPost />
      <Feeds />

    </div>
  )
}

export default Homepage
