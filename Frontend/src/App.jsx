import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import StudentLogin from './pages/StudentLogin';
import StudentSignUp from './pages/StudentSignUp';
import TeacherLogin from './pages/TeacherLogin';
import TeacherSignUp from './pages/TeacherSignUp';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/student-login' element={<StudentLogin />} />
        <Route path='/student-signup' element={<StudentSignUp />} />
        <Route path='/teacher-login' element={<TeacherLogin />} />
        <Route path='/teacher-signup' element={<TeacherSignUp />} />
      </Routes>
    </div>
  )
}

export default App