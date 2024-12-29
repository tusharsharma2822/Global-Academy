import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className='bg-cover  bg-[url(https://img1.getimg.ai/generated/2f0c894d-3b55-49cd-9e91-3751d2b9197a/img-A5NXgCLpSt1dEnw93M3J6.jpeg)] h-screen pt-8 flex justify-between flex-col w-full bg-red-400'>
      <img className='w-16 ml-3' src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0a/Global_Academy_logo.svg/768px-Global_Academy_logo.svg.png?20210928174133" alt='' />
            <div className='bg-white pb-7 py-4 px-4'>
                <Link to='/student-login' className='flex text-2xl font-semibold text-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Get Started</Link>
            </div>
        </div>
    </div>
  )
}

export default Home