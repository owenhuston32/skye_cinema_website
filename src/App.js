import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './css/App.css';
import Home from './home.js';
import Advertise from './advertise.js';
import Contact from './contact.js';
import NavBar from './navbar.js';

function App() {
  
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route exact path = "/" element={<Home/>} />
        <Route exact path = "/Advertise" element={<Advertise/>} />
        <Route exact path = "/Contact" element={<Contact/>} />
      </Routes>

    </div>
  );
}

export default App;
