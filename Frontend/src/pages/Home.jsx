import React from 'react'
import backgroundImg from '../assets/Images/BackgroundImg.jpg';

const Home = () => {
  return (
    <div>
        <div className='h-screen flex justify-between flex-col w-full bg-blue-500'>
            <div className='bg-white py-5 px-10'>
                <h2 className='text-md font-bold'>Getting Started with Global Academy</h2>
                <button className='w-full bg-black text-white py-3'>Continue</button>
            </div>
        </div>
    </div>
  )
}

export default Home