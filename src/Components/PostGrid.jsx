import React from 'react'

const PostGrid = () => {
  return (
    <div className='m-2 p-2 md:m-10 md:p-10'>

        {/* followers detail  */}
      <div className='flex flex-row gap-10 m-5  bg-gradient-to-r from-red-950 to-black border-black text-white rounded-md'>
        <div className='flex flex-col m-5 '><p>123</p>
        <p>Posts </p></div>
        <div className='flex flex-col m-5'><p>123</p>
        <p>Followers </p></div>
        <div className='flex flex-col m-5'><p>123</p>
        <p>Following </p></div>

      </div>


      {/* post Grid  */}
      <div className="grid grid-cols-3 gap-2">
  <div className="bg-gradient-to-r from-red-950 to-black border-b-2">01</div>
  <div className="bg-gradient-to-r from-red-950 to-black border-b-2">02</div>
  <div className="bg-gradient-to-r from-red-950 to-black border-b-2">03</div>
  <div className="bg-gradient-to-r from-red-950 to-black border-b-2">04</div>
  <div className="bg-gradient-to-r from-red-950 to-black border-b-2">05</div>
  <div className="bg-gradient-to-r from-red-950 to-black border-b-2">06</div>
  
</div>
    </div>
  )
}

export default PostGrid
