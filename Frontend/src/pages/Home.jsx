import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className='bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1735360426650-e806eed53f79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-8 flex justify-between flex-col w-full bg-red-400'>
      <img className='w-16 ml-8' src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0a/Global_Academy_logo.svg/768px-Global_Academy_logo.svg.png?20210928174133" alt='' />
            <div className='bg-white pb-7 py-4 px-4'>
                <Link to='/student-login' className='flex text-2xl font-semibold text-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Get Started</Link>
            </div>
        </div>
    </div>
  )
}

export default Home