
import Home from './components/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='Home' element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="Signup" element={<Signup />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;