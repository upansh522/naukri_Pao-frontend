import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './components/Dashboard';
import ProfileInfo from './pages/ProfileInfo';
import JobPostForm from './pages/JobPostForm';

const App=()=> {
  return (    
    <Router>
      <Routes>
        <Route path='/user' element={<><Header/><Dashboard /></>} />
        <Route path='/recruiter' element={<Header/>}/>
        <Route path='signup' element={<Signup />} />
        <Route path='/' element={<Login/>} />
        <Route path='/user/profile' element={<ProfileInfo/>}/>
        <Route path='/admin/jobPostForm' element={<JobPostForm/>}/>
      </Routes>
    </Router>
  );
}

export default App;
