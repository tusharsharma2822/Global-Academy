import React from 'react';
import { Link } from 'react-router-dom';

const StudentSignUp = () => {
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
    <div>
    <img className='w-100 mx-auto' src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0a/Global_Academy_logo.svg/768px-Global_Academy_logo.svg.png?20210928174133" alt='' />
      <form>
        <h3 className='text-lg font-medium mt-3 mb-2'>What&apos;s your name?</h3>
        <div className='flex gap-2 mb-6'>
        <input className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-sm' type='text' placeholder='First Name' required/>
        <input className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-sm' type='text' placeholder='Last Name' required/>
        </div>
        <h3 className='text-lg font-medium mb-2'>What&apos;s your email?</h3>
        <input className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-sm' type='email' placeholder='email@example.com' required/>
        <h3 className='text-lg font-medium mb-2'>Enter your Password</h3>
        <input className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-sm' type='password' placeholder='password' required />
        <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-sm'>Create Account</button>
      </form>
      <p className='text-center'>Already have an Account?<Link to='/student-login' className='text-blue-600'>Login Here</Link></p>
    </div>
    <div>
      <p className='text-[10px] leading-tight mb-6'>By proceeding, you consent to get calls, whatsapp or SMS messages, including by automated means, from Global Academy and its affliates to the number provided</p>
    </div>
  </div>
  )
}

export default StudentSignUp