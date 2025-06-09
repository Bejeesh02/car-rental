import React, { useState } from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './navbar';
import Login from './pages/login';
import Home from './pages/home';
import Footer from './footer';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Login setUser={setUser} />} />
            <Route path="/home" element={user ? <Home user={user} /> : <Navigate to="/" />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
