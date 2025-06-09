import React, { useState, useEffect } from 'react';
import './App.css';
import {HashRouter as Router,Route,Routes,Navigate} from 'react-router-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login.js';
import Home from './pages/home.js';
import Footer from './footer.js';

function App() {
  const[user,setUser]=useState(null);
  return (
    <div>
      <Router>
        
          <div className='container'>
            <Routes>
              <Route path="/" element={<Login setUser={setUser} />}/>
              <Route path="/home" element={user? <Home user={user} />: <Navigate to="/" /> }/>
            </Routes>
          </div>
       <Footer />
      </Router>
    </div>
  );
}

export default App;
