import React, { useState } from 'react';

const Highlights = () => {
  const [divs, setDivs] = useState([1]);

  const newDiv = () => {
    setDivs([...divs, divs.length + 1]);
  };

  return (
    <div className='mt-0 m-3 flex flex-col rounded-md'>
      <div className='flex'>
        {divs.map((div, index) => (
          <div key={index} className='m-1 md:m-10 flex flex-col items-center'>
            <div
              className='w-20 h-20
                sm:w-20 sm:h-20
                md:w-22 md:h-22
                lg:w-24 lg:h-24
                border border-spacing-1 rounded-full bg-gradient-to-r from-red-700 to-black flex items-center justify-center'
              onClick={newDiv}
            >
              +
            </div>
            <p className="text-center mt-2">Add New</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Highlights;
