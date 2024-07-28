import React from 'react'
import Feeds from '../Components/Feeds'
import AddPost from '../Components/AddPost'


const Homepage = () => {
  return (

    <div className='flex-grow top-40 items-center'>
      <AddPost />
      <div >
            <Feeds />
          </div>
      

    </div>
  )
}

export default Homepage
