import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Login from './pages/Login';
import Dashboard from './components/Dashboard';
import ProfileInfo from './pages/ProfileInfo';
import JobPostForm from './pages/JobPostForm';
import CraeteAccount from './pages/CreateAccount';

const App=()=> {
  return (    
    <Router>
      <Routes>
        <Route path='/user' element={<><Header/><Dashboard /></>} />
        <Route path='/recruiter' element={<Header/>}/>
        <Route path='/signup' element={<CraeteAccount/>} />
        <Route path='/' element={<Login/>} />
        <Route path='/user/profile' element={<ProfileInfo/>}/>
        <Route path='/admin/jobPostForm' element={<JobPostForm/>}/>
      </Routes>
    </Router>
  );
}

export default App;
