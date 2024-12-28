import React from 'react'
import { Link } from 'react-router-dom'

const StudentLogin = () => {
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
      <img className='w-100 mx-auto' src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0a/Global_Academy_logo.svg/768px-Global_Academy_logo.svg.png?20210928174133" alt='' />
        <form>
          <h3 className='text-xl font-medium mt-3 mb-3'>What&apos;s your email?</h3>
          <input className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type='email' placeholder='email@example.com' required/>
          <h3 className='text-xl font-medium mb-2'>Enter your Password</h3>
          <input className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type='password' placeholder='password' required />
          <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Login</button>
        </form>
        <p className='text-center'>New Here?<Link to='/student-signup' className='text-blue-600'>Create a New Account</Link></p>
      </div>
      <div>
        <Link to='/teacher-login' className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Sign In as Teacher</Link>
      </div>
    </div>
  )
}

export default StudentLogin