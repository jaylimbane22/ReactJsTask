import React from 'react';
import Sidebar from '../components/Sidebar';

const Section1 = () => {
  return (
    <div className="flex">
    
        <Sidebar />
        <div className="p-7">
            <h2 className="text-2xl text-white font-semibold">Section1</h2>
        </div>
    </div>
  )
}

export default Section1
